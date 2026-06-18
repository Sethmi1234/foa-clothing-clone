import { collectionMeta, otherCollections } from "@/data/collections";
import { navigationData } from "@/data/navigation";
import type { CollectionMeta } from "@/types";

const slugLabels: Record<string, string> = {
  men: "MENS",
  women: "WOMENS",
  accessories: "ACCESSORIES",
  footwear: "FOOTWEAR",
  "e-voucher": "E-VOUCHER",
  sale: "SALE",
  tees: "TEES",
  "printed-tees-1": "PRINTED TEES",
  tanks: "TANKS",
  jackets: "JACKETS",
  shirts: "SHIRTS",
  hoodies: "HOODIES",
  pants: "PANTS",
  shorts: "SHORTS",
  joggers: "JOGGERS",
  compression: "COMPRESSION",
  boxers: "BOXERS",
  denim: "DENIM",
  shoes: "SHOES",
  sliders: "SLIDERS",
  "flip-flops": "FLIP FLOPS",
  bags: "BAGS",
  hats: "HATS",
  caps: "CAPS",
  socks: "SOCKS",
  dresses: "DRESSES",
  leggings: "LEGGINGS",
  skirts: "SKIRTS",
  tops: "TOPS",
  "womens-tees": "WOMENS TEES",
  "womens-jackets": "JACKETS",
  "womens-jeans": "JEANS",
};

export function getCollectionTitle(slug: string): string {
  if (collectionMeta[slug]) {
    return collectionMeta[slug].title;
  }

  for (const category of navigationData) {
    if (category.url === `/collections/${slug}`) {
      return category.label;
    }
    for (const column of category.columns ?? []) {
      for (const item of column.items) {
        if (item.url === `/collections/${slug}`) {
          return item.label;
        }
      }
    }
  }

  return slugLabels[slug] ?? slug.replace(/-/g, " ").toUpperCase();
}

export function getCollectionMeta(slug: string): CollectionMeta {
  if (collectionMeta[slug]) {
    return collectionMeta[slug];
  }

  return {
    slug,
    title: getCollectionTitle(slug),
    displayTitle: getCollectionTitle(slug)
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    showHero: false,
  };
}

export { otherCollections };
