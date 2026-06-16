import { navigationData } from "@/data/navigation";

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
  "womens-tees": "WOMENS TEES",
  "printed-tees-women": "PRINTED TEES",
  "womens-jackets": "JACKETS",
  tops: "TOPS",
  "womens-tanks": "TANKS",
  "womens-hoodies": "HOODIES",
  dresses: "DRESSES",
  leggings: "LEGGINGS",
  "womens-shorts": "SHORTS",
  "womens-jeans": "JEANS",
  skirts: "SKIRTS",
  "womens-pants": "PANTS",
};

export function getCollectionTitle(slug: string): string {
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
