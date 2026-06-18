import type { Product } from "@/types";
import { allProducts } from "@/data/collections";

export function getProductById(id: string): Product | undefined {
  return allProducts.find((product) => product.id === id);
}

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductsByCollection(slug: string): Product[] {
  return allProducts.filter((product) => product.collections.includes(slug));
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return allProducts.filter((p) => p.id !== productId).slice(0, limit);

  const collection = product.collections[0];
  const fromCollection = allProducts.filter(
    (p) => p.id !== productId && p.collections.includes(collection)
  );

  if (fromCollection.length >= limit) {
    return fromCollection.slice(0, limit);
  }

  const remaining = allProducts.filter(
    (p) => p.id !== productId && !fromCollection.some((item) => item.id === p.id)
  );

  return [...fromCollection, ...remaining].slice(0, limit);
}
