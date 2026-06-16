import type { Product } from "@/types";
import {
  bestSellerProducts,
  newCollectionProducts,
} from "@/data/mockData";

const allProducts: Product[] = [...newCollectionProducts, ...bestSellerProducts];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((product) => product.id === id);
}

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((product) => product.category === category);
}
