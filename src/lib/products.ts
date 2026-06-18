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
