import { invalidShopImageFiles } from "@/data/invalidImages";

const DEFAULT_PRODUCT_IMAGE =
  "https://foaclothing.com/cdn/shop/files/00012701A.jpg?v=1778250510&width=770";

export function shopImage(filename: string, width = 770): string {
  const base = `https://foaclothing.com/cdn/shop/files/${filename}`;
  const separator = filename.includes("?") ? "&" : "?";
  return `${base}${separator}width=${width}`;
}

export function shopCollectionImage(filename: string, width = 960): string {
  const base = `https://foaclothing.com/cdn/shop/collections/${filename}`;
  const separator = filename.includes("?") ? "&" : "?";
  return `${base}${separator}width=${width}`;
}

/** Extract the filename(+v param) from a foaclothing.com CDN URL */
export function extractShopFile(url: string): string | null {
  const match = url.match(/\/cdn\/shop\/files\/([^&]+)/);
  return match ? match[1] : null;
}

export function isInvalidImageUrl(url?: string): boolean {
  if (!url) return true;
  const file = extractShopFile(url);
  if (!file) return false;
  return invalidShopImageFiles.has(file);
}

export function resolveImageUrl(url: string | undefined, fallback: string): string {
  if (!url || isInvalidImageUrl(url)) return fallback;
  return url;
}

export function pickFirstValidImage(
  candidates: Array<string | undefined>,
  fallback = DEFAULT_PRODUCT_IMAGE
): string {
  for (const url of candidates) {
    if (url && !isInvalidImageUrl(url)) return url;
  }
  return fallback;
}

export { DEFAULT_PRODUCT_IMAGE };
