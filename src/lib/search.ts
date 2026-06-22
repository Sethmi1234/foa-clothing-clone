import { getAllProducts } from "@/lib/products";
import type { Product } from "@/types";

export const popularSearches = [
  { label: "Shoes", query: "shoes" },
  { label: "Tees", query: "tees" },
  { label: "New Collection", query: "new" },
  { label: "Footwear", query: "footwear" },
  { label: "Bags", query: "bags" },
] as const;

export function searchProducts(query: string, limit = 12): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return getAllProducts()
    .filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(normalized);
      const categoryMatch = product.category.toLowerCase().includes(normalized);
      const collectionMatch = product.collections.some((c) =>
        c.toLowerCase().includes(normalized)
      );
      return nameMatch || categoryMatch || collectionMatch;
    })
    .slice(0, limit);
}

export function getTrendingProducts(limit = 6): Product[] {
  const trendingIds = [
    "foa-boxer-briefs",
    "crossbody-bag",
    "foa-tote-bag",
    "lycus-henley-tee",
    "thalia-long-line-top",
    "foa-hydrojug",
  ];

  const trending = trendingIds
    .map((id) => getAllProducts().find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  if (trending.length >= limit) return trending.slice(0, limit);

  const remaining = getAllProducts().filter((p) => !trending.some((t) => t.id === p.id));
  return [...trending, ...remaining].slice(0, limit);
}
