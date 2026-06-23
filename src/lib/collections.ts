import { allProducts, collectionMeta, otherCollections } from "@/data/collections";
import { navigationData } from "@/data/navigation";
import { pickFirstValidImage, resolveImageUrl, shopImage } from "@/lib/images";
import { sanitizeProductImages } from "@/lib/productImages";
import type { CollectionMeta } from "@/types";

function productsForCollection(slug: string) {
  const resolvedSlug = slug === "new-collection" ? "new" : slug;

  return allProducts
    .map(sanitizeProductImages)
    .filter((product) => product.collections.includes(resolvedSlug));
}

const knownGoodHeroes: Record<string, string> = {
  men: shopImage("Mens_91b68e54-5157-486c-9c9e-6a2b661972f3.png?v=1761128934", 1920),
  women: shopImage("web_1_a3b9b7ef-a9c0-43fc-83a0-139d1dcf9a32.png?v=1769071508", 1920),
  footwear: shopImage("Shoes_2.jpg?v=1687365418", 1920),
  shoes: shopImage("Shoes_2.jpg?v=1687365418", 1920),
  accessories:
    "https://cdn.shopify.com/s/files/1/0750/4415/9772/files/Accessories_b0d96e03-2e8e-432e-96ad-b724078cd445.png?v=1759915492",
};

const slugLabels: Record<string, string> = {
  men: "MENS",
  women: "WOMENS",
  accessories: "ACCESSORIES",
  footwear: "FOOTWEAR",
  "e-voucher": "E-VOUCHER",
  sale: "SALE",
  "new-collection": "NEW COLLECTION",
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
  const base = collectionMeta[slug] ?? {
    slug,
    title: getCollectionTitle(slug),
    displayTitle: getCollectionTitle(slug)
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    showHero: false,
  };

  if (!base.showHero) {
    return base;
  }

  const products = productsForCollection(slug);
  const parent = getParentCategory(slug);
  const parentProducts = parent ? productsForCollection(parent.slug) : [];
  const heroImage = resolveImageUrl(
    products[0]?.image ??
      knownGoodHeroes[slug] ??
      (parent ? knownGoodHeroes[parent.slug] : undefined) ??
      parentProducts[0]?.image ??
      base.heroImage,
    pickFirstValidImage([
      knownGoodHeroes.men,
      knownGoodHeroes.women,
      products[0]?.image,
    ])
  );

  return { ...base, heroImage };
}

export function getParentCategory(slug: string): { slug: string; title: string } | null {
  return parentCategoryMap[slug] ?? null;
}

export { otherCollections };
