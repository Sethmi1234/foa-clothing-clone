import type { Product, ProductColor } from "@/types";
import { allProducts } from "@/data/collections";
import { isInvalidImageUrl, pickFirstValidImage, resolveImageUrl } from "@/lib/images";

const COLOR_LABELS: Record<string, string> = {
  "#ffffff": "White",
  "#1a1a1a": "Black",
  "#1a2744": "Navy",
  "#2c3e50": "Blue",
  "#3d3d3d": "Dark Grey",
  "#2d2d2d": "Charcoal",
  "#4a4a4a": "Grey",
  "#8b7355": "Khaki",
  "#c4a574": "Beige",
  "#d4c4a8": "Cream",
  "#e8dcc8": "Off White",
  "#556b2f": "Olive",
  "#8b4513": "Brown",
  "#dc143c": "Red",
  "#228b22": "Green",
};

export function getColorLabel(hex?: string): string | undefined {
  if (!hex) return undefined;
  return COLOR_LABELS[hex.toLowerCase()] ?? "Multi";
}

function resolvePrimaryImage(product: Product): string {
  return pickFirstValidImage([
    product.image,
    ...(product.colors?.map((c) => c.image) ?? []),
    ...(product.images ?? []),
    product.hoverImage,
    ...(product.colors?.map((c) => c.hoverImage) ?? []),
  ]);
}

function sanitizeColor(color: ProductColor, productPrimary: string): ProductColor {
  const image = pickFirstValidImage(
    [color.image, ...(color.images ?? [])],
    productPrimary
  );
  const hoverImage = pickFirstValidImage(
    [color.hoverImage ?? "", image],
    image
  );

  return {
    ...color,
    image,
    hoverImage: hoverImage !== image ? hoverImage : undefined,
  };
}

export function sanitizeProductImages(product: Product): Product {
  const primary = resolvePrimaryImage(product);
  const hoverImage = product.hoverImage
    ? resolveImageUrl(product.hoverImage, primary)
    : undefined;

  return {
    ...product,
    image: primary,
    hoverImage: hoverImage !== primary ? hoverImage : undefined,
    images: product.images
      ?.map((img) => resolveImageUrl(img, primary))
      .filter((img, index, arr) => arr.indexOf(img) === index),
    colors: product.colors?.map((color) => sanitizeColor(color, primary)),
  };
}

/** Per-color images — prefers each color's original CDN files before sanitization */
export function getColorImages(
  product: Product,
  colorIndex: number
): { primary: string; hover?: string } {
  const rawProduct = allProducts.find((item) => item.id === product.id) ?? product;
  const sanitized = sanitizeProductImages(rawProduct);
  const rawColor = rawProduct.colors?.[colorIndex];

  if (!rawColor) {
    return {
      primary: sanitized.image,
      hover: sanitized.hoverImage,
    };
  }

  const primary = pickFirstValidImage(
    [rawColor.image, ...(rawColor.images ?? []), sanitized.colors?.[colorIndex]?.image],
    sanitized.image
  );
  const hover = pickFirstValidImage(
    [rawColor.hoverImage ?? "", sanitized.colors?.[colorIndex]?.hoverImage ?? "", primary],
    primary
  );

  return {
    primary,
    hover: hover !== primary ? hover : undefined,
  };
}

export function getGalleryImages(product: Product, colorIndex = 0): string[] {
  const { primary, hover } = getColorImages(product, colorIndex);
  const rawProduct = allProducts.find((item) => item.id === product.id) ?? product;
  const rawColor = rawProduct.colors?.[colorIndex];
  const extras =
    rawColor?.images?.filter((img) => img && !isInvalidImageUrl(img)) ?? [];

  return [...new Set([primary, hover, ...extras].filter(Boolean) as string[])];
}

export function getActiveColorImage(product: Product, colorIndex = 0): string {
  return getColorImages(product, colorIndex).primary;
}

export function getDisplayImages(
  product: Product,
  colorIndex = 0
): { primary: string; hover?: string } {
  return getColorImages(product, colorIndex);
}
