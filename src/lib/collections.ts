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
  "printed-tees-women": "PRINTED TEES WOMEN",
  "womens-jackets": "WOMENS JACKETS",
  "womens-jeans": "WOMENS JEANS",
  "womens-tanks": "WOMENS TANKS",
  "womens-hoodies": "WOMENS HOODIES",
  "womens-shorts": "WOMENS SHORTS",
  "womens-pants": "WOMENS PANTS",
};

/**
 * Maps sub-category slugs to their parent category.
 * Sub-categories under men/women/accessories/footwear use this lookup.
 */
const parentCategoryMap: Record<string, { slug: string; title: string }> = {
  // Men's sub-categories
  tees: { slug: "men", title: "Mens" },
  "printed-tees-1": { slug: "men", title: "Mens" },
  tanks: { slug: "men", title: "Mens" },
  jackets: { slug: "men", title: "Mens" },
  shirts: { slug: "men", title: "Mens" },
  hoodies: { slug: "men", title: "Mens" },
  pants: { slug: "men", title: "Mens" },
  shorts: { slug: "men", title: "Mens" },
  joggers: { slug: "men", title: "Mens" },
  compression: { slug: "men", title: "Mens" },
  boxers: { slug: "men", title: "Mens" },
  denim: { slug: "men", title: "Mens" },
  // Women's sub-categories
  "womens-tees": { slug: "women", title: "Womens" },
  "printed-tees-women": { slug: "women", title: "Womens" },
  tops: { slug: "women", title: "Womens" },
  dresses: { slug: "women", title: "Womens" },
  leggings: { slug: "women", title: "Womens" },
  skirts: { slug: "women", title: "Womens" },
  "womens-jackets": { slug: "women", title: "Womens" },
  "womens-tanks": { slug: "women", title: "Womens" },
  "womens-hoodies": { slug: "women", title: "Womens" },
  "womens-shorts": { slug: "women", title: "Womens" },
  "womens-jeans": { slug: "women", title: "Womens" },
  "womens-pants": { slug: "women", title: "Womens" },
  // Accessories sub-categories
  bags: { slug: "accessories", title: "Accessories" },
  hats: { slug: "accessories", title: "Accessories" },
  caps: { slug: "accessories", title: "Accessories" },
  socks: { slug: "accessories", title: "Accessories" },
  // Footwear sub-categories
  shoes: { slug: "footwear", title: "Footwear" },
  sliders: { slug: "footwear", title: "Footwear" },
  "flip-flops": { slug: "footwear", title: "Footwear" },
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

export function getParentCategory(slug: string): { slug: string; title: string } | null {
  return parentCategoryMap[slug] ?? null;
}

export { otherCollections };
