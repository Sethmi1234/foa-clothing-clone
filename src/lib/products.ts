import type { Product } from "@/types";
import { allProducts } from "@/data/collections";
import { sanitizeProductImages } from "@/lib/productImages";

const products = allProducts.map(sanitizeProductImages);

const collectionAliases: Record<string, string> = {
  "new-collection": "new",
};

function resolveCollectionSlug(slug: string): string {
  return collectionAliases[slug] ?? slug;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCollection(slug: string): Product[] {
  const resolvedSlug = resolveCollectionSlug(slug);

  return products.filter((product) => product.collections.includes(resolvedSlug));
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return products.filter((p) => p.id !== productId).slice(0, limit);

  const collection = product.collections[0];
  const fromCollection = products.filter(
    (p) => p.id !== productId && p.collections.includes(collection)
  );

  if (fromCollection.length >= limit) {
    return fromCollection.slice(0, limit);
  }

  const remaining = products.filter(
    (p) => p.id !== productId && !fromCollection.some((item) => item.id === p.id)
  );

  return [...fromCollection, ...remaining].slice(0, limit);
}
