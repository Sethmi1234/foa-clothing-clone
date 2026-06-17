import type {
  CategoryItem,
  CollectionItem,
  FooterData,
  HeroSlide,
  Product,
} from "@/types";
import { shopImage } from "@/lib/images";

export const announcementMessages = [
  "ORDERS WILL TAKE 4 TO 6 WORKING DAYS FOR DELIVERY",
  "FREE SHIPPING FOR ORDERS ABOVE Rs.9999.00",
];

export const heroSlides: HeroSlide[] = [
  {
    id: "printed-tees",
    title: "Printed Tees Collection",
    cta: "Shop Now",
    href: "/collections/printed-tees-1",
    desktopImage: shopImage(
      "Untitled_design_1_5b73bf05-5465-4cbc-8706-35c6474443a1.png?v=1772531406",
      1920
    ),
    mobileImage: shopImage("60014201E.jpg?v=1772612995", 800),
  },
  {
    id: "womens",
    title: "Womens Collection",
    cta: "Shop Now",
    href: "/collections/women",
    desktopImage: shopImage(
      "web_1_a3b9b7ef-a9c0-43fc-83a0-139d1dcf9a32.png?v=1769071508",
      1920
    ),
    mobileImage: shopImage("web_2.png?v=1769071508", 800),
  },
  {
    id: "embroidery",
    title: "Embroidery Collection",
    cta: "Shop Now",
    href: "/collections/embroidery-collection",
    desktopImage: shopImage("foa_1.jpg?v=1762937543", 1920),
    mobileImage: shopImage("IMG_6988.jpg?v=1763015919", 800),
  },
];

export const newCollectionProducts: Product[] = [
  {
    id: "neo-utility-short",
    name: "Neo Utility Short",
    price: 4500,
    image: shopImage("00012701A.jpg?v=1778250510"),
    hoverImage: shopImage("00012701B.jpg?v=1778250510"),
    href: "/products/neo-utility-short",
    category: "new",
    colors: [
      { hex: "#1a2744", image: shopImage("00012701A.jpg?v=1778250510"), hoverImage: shopImage("00012701B.jpg?v=1778250510") },
      { hex: "#2d2d2d", image: shopImage("00012702A.jpg?v=1778250511"), hoverImage: shopImage("00012701B.jpg?v=1778250510") },
    ],
  },
  {
    id: "flux-jogger",
    name: "Flux Jogger",
    price: 4800,
    image: shopImage("00012601A.jpg?v=1778249513"),
    hoverImage: shopImage("00012601B.jpg?v=1778249512"),
    href: "/products/flux-jogger",
    category: "new",
    colors: [
      { hex: "#1a1a1a", image: shopImage("00012601A.jpg?v=1778249513"), hoverImage: shopImage("00012601B.jpg?v=1778249512") },
      { hex: "#2c3e50", image: shopImage("00012601C.jpg?v=1778249513"), hoverImage: shopImage("00012601B.jpg?v=1778249512") },
    ],
  },
  {
    id: "flux-oversize-tee",
    name: "Flux Oversize Tee",
    price: 4800,
    image: shopImage("00012501A.jpg?v=1778247075"),
    hoverImage: shopImage("00012501B.jpg?v=1778247075"),
    href: "/products/flux-oversize-tee",
    category: "new",
    colors: [
      { hex: "#1a2744", image: shopImage("00012501A.jpg?v=1778247075"), hoverImage: shopImage("00012501B.jpg?v=1778247075") },
      { hex: "#1a1a1a", image: shopImage("00012501C.jpg?v=1778247075"), hoverImage: shopImage("00012501B.jpg?v=1778247075") },
    ],
  },
  {
    id: "aero-tank-top",
    name: "Aero Tank Top",
    price: 2800,
    image: shopImage("00012401A.jpg?v=1778242184"),
    hoverImage: shopImage("00012401B.jpg?v=1778242184"),
    href: "/products/aero-tank-top",
    category: "new",
    colors: [
      { hex: "#3d3d3d", image: shopImage("00012401A.jpg?v=1778242184"), hoverImage: shopImage("00012401B.jpg?v=1778242184") },
      { hex: "#1a1a1a", image: shopImage("00012401C.jpg?v=1778242184"), hoverImage: shopImage("00012401B.jpg?v=1778242184") },
    ],
  },
];

export const categoryItems: CategoryItem[] = [
  {
    label: "Mens",
    href: "/collections/men",
    image:
      "https://cdn.shopify.com/s/files/1/0750/4415/9772/files/Mens_d3aaeb4d-1ebe-40ad-8dd2-d83c76d303c3.png?v=1759915492",
  },
  {
    label: "Womens",
    href: "/collections/women",
    image:
      "https://cdn.shopify.com/s/files/1/0750/4415/9772/files/Womens_6fddf6f4-f8a0-44a7-8d6d-b32302d8fac6.png?v=1759915492",
  },
  {
    label: "Accessories",
    href: "/collections/accessories",
    image:
      "https://cdn.shopify.com/s/files/1/0750/4415/9772/files/Accessories_b0d96e03-2e8e-432e-96ad-b724078cd445.png?v=1759915492",
  },
];

export const collectionShowcase: CollectionItem[] = [
  {
    id: "embroidery",
    title: "Embroidery Collection",
    href: "/collections/embroidery-collection",
    image: shopImage("Embroidery_Collection.png?v=1763010568", 1920),
    outlined: false,
  },
  {
    id: "linen",
    title: "Linen Collection",
    href: "/collections/linen-collection",
    image: shopImage(
      "embroidery_collection_0a6acb97-5b93-44e2-8d9a-83f3956400b8.png?v=1765520754",
      1920
    ),
    outlined: true,
  },
  {
    id: "core",
    title: "Core 24/7 collection",
    href: "/collections/core-24-7",
    image: shopImage("core_247.png?v=1761217192", 1920),
    outlined: true,
  },
];

export const bestSellerTabs = ["Tees", "Denim", "Bags", "Accessories"] as const;

export const bestSellerProducts: Product[] = [
  {
    id: "flux-oversize-tee-bs",
    name: "Flux Oversize Tee",
    price: 4800,
    image: shopImage("00012501A.jpg?v=1778247075"),
    hoverImage: shopImage("00012501B.jpg?v=1778247075"),
    href: "/products/flux-oversize-tee",
    category: "tees",
    colors: [
      { hex: "#1a2744", image: shopImage("00012501A.jpg?v=1778247075"), hoverImage: shopImage("00012501B.jpg?v=1778247075") },
      { hex: "#1a1a1a", image: shopImage("00012501C.jpg?v=1778247075"), hoverImage: shopImage("00012501B.jpg?v=1778247075") },
    ],
  },
  {
    id: "dead-rules-tee",
    name: "Dead Rules Tee",
    price: 5200,
    image: shopImage("60014301A.jpg?v=1774438598"),
    hoverImage: shopImage("60014302A.jpg?v=1774439477"),
    href: "/products/dead-rules-tee",
    category: "tees",
    colors: [
      { hex: "#1a2744", image: shopImage("60014301A.jpg?v=1774438598"), hoverImage: shopImage("60014302A.jpg?v=1774439477") },
      { hex: "#1a1a1a", image: shopImage("60014303A.jpg?v=1774439477"), hoverImage: shopImage("60014302A.jpg?v=1774439477") },
    ],
  },
  {
    id: "unchained-tee",
    name: "Unchained Tee",
    price: 5200,
    image: shopImage("60014201A.jpg?v=1772541413"),
    hoverImage: shopImage("60014202A.jpg?v=1772612995"),
    href: "/products/unchained-tee",
    category: "tees",
    colors: [
      { hex: "#1a1a1a", image: shopImage("60014201A.jpg?v=1772541413"), hoverImage: shopImage("60014202A.jpg?v=1772612995") },
    ],
  },
  {
    id: "linear-tee",
    name: "Linear Tee",
    price: 4500,
    image: shopImage("00012301A.jpg?v=1770036513"),
    hoverImage: shopImage("00012301B.jpg?v=1770036513"),
    href: "/products/linear-tee",
    category: "tees",
    colors: [
      { hex: "#2c2c2c", image: shopImage("00012301A.jpg?v=1770036513"), hoverImage: shopImage("00012301B.jpg?v=1770036513") },
    ],
  },
  {
    id: "lycus-henley-tee",
    name: "Lycus Henley Tee",
    price: 2500,
    compareAtPrice: 5000,
    image: shopImage("10002101A.jpg?v=1754042692"),
    hoverImage: shopImage("10002102A.jpg?v=1754042692"),
    href: "/products/lycus-henley-tee",
    category: "tees",
    onSale: true,
    saleLabel: "50% OFF",
    colors: [
      { hex: "#1a1a1a", image: shopImage("10002101A.jpg?v=1754042692"), hoverImage: shopImage("10002102A.jpg?v=1754042692") },
    ],
  },
  {
    id: "loose-flared-jeans",
    name: "Loose Flared Jeans",
    price: 7500,
    image: shopImage("00011801A.jpg?v=1761150100"),
    hoverImage: shopImage("00011803A.jpg?v=1761214526"),
    href: "/products/loose-flared-jeans",
    category: "denim",
    colors: [
      { hex: "#1a2744", image: shopImage("00011801A.jpg?v=1761150100"), hoverImage: shopImage("00011803A.jpg?v=1761214526") },
    ],
  },
  {
    id: "carpenter-jeans",
    name: "Carpenter Jeans",
    price: 7500,
    image: shopImage("00011501A.jpg?v=1761146073"),
    hoverImage: shopImage("00011501B.jpg?v=1761214447"),
    href: "/products/carpenter-jeans",
    category: "denim",
    colors: [
      { hex: "#2c3e50", image: shopImage("00011501A.jpg?v=1761146073"), hoverImage: shopImage("00011501B.jpg?v=1761214447") },
    ],
  },
  {
    id: "essential-tote-bag",
    name: "Essential Tote Bag",
    price: 3000,
    image: shopImage("60013801A.jpg?v=1769681924"),
    href: "/products/essential-tote-bag",
    category: "bags",
    colors: [
      { hex: "#1a1a1a", image: shopImage("60013801A.jpg?v=1769681924") },
    ],
  },
  {
    id: "crossbody-bag",
    name: "Crossbody Bag 2.0",
    price: 2450,
    compareAtPrice: 3500,
    image: shopImage("60009300A.jpg?v=1754042961"),
    hoverImage: shopImage("60009301A.jpg?v=1754042961"),
    href: "/products/crossbody-bag-2-0",
    category: "bags",
    onSale: true,
    saleLabel: "50% OFF",
    colors: [
      { hex: "#1a1a1a", image: shopImage("60009300A.jpg?v=1754042961"), hoverImage: shopImage("60009301A.jpg?v=1754042961") },
    ],
  },
  {
    id: "foa-tote-bag",
    name: "F.O.A Tote Bag",
    price: 2500,
    image: shopImage("60009201A.jpg?v=1754042800"),
    href: "/products/foa-tote-bag",
    category: "bags",
    colors: [
      { hex: "#1a1a1a", image: shopImage("60009201A.jpg?v=1754042800") },
    ],
  },
  {
    id: "foa-hydrojug",
    name: "F.O.A Hydrojug 1L",
    price: 4500,
    image: shopImage("60009101A.jpg?v=1754042600"),
    href: "/products/foa-hydrojug-1l",
    category: "accessories",
    colors: [
      { hex: "#1a1a1a", image: shopImage("60009101A.jpg?v=1754042600") },
    ],
  },
  {
    id: "foa-boxer-briefs",
    name: "F.O.A BOXER BRIEFS",
    price: 1500,
    image: shopImage("60009001A.jpg?v=1754042400"),
    href: "/products/foa-boxer-briefs",
    category: "accessories",
    colors: [
      { hex: "#1a1a1a", image: shopImage("60009001A.jpg?v=1754042400") },
      { hex: "#2c2c2c", image: shopImage("60009001A.jpg?v=1754042400") },
    ],
  },
];

export const shopTheLookImage = {
  desktop: shopImage("img.png?v=1777363868", 1920),
  mobile: shopImage("collection_mobile.png?v=1777871467", 1080),
};

export const ironIslandData = {
  subheading: "IRON ISLAND",
  title: "STRONGEST IN THE CITY",
  description:
    "Test your limits with a short run, long run, or lifting showdown. Limited spots, lock in your entry today!",
  cta: "Explore",
  href: "/pages/iron-island-event-sign-up",
  image: shopImage("IMG_9177-edited.jpg?v=1736527061", 1500),
};

export const footerData: FooterData = {
  followUs: {
    id: "footer-follow-us",
    title: "Follow Us",
    social: [
      { id: "social-facebook", label: "Facebook", href: "https://facebook.com/foaclothing" },
      { id: "social-instagram", label: "Instagram", href: "https://instagram.com/foaclothing" },
      { id: "social-youtube", label: "YouTube", href: "https://youtube.com/foaclothing" },
      { id: "social-tiktok", label: "TikTok", href: "https://tiktok.com/@foaclothing" },
    ],
  },
  support: {
    id: "footer-support",
    title: "Support",
    items: [
      { id: "support-terms", label: "Terms and Conditions", href: "/pages/terms-and-conditions" },
      { id: "support-privacy", label: "Privacy Policy", href: "/pages/privacy-policy" },
      { id: "support-returns", label: "Return and Exchange Policy", href: "/pages/return-and-exchange-policy" },
      { id: "support-shipping", label: "Shipping Policy", href: "/pages/shipping-policy" },
    ],
  },
  info: {
    id: "footer-info",
    title: "Info",
    items: [
      { id: "info-story", label: "Our Story", href: "/pages/our-story" },
      { id: "info-contact", label: "Contact Us", href: "/pages/contact-us" },
      { id: "info-careers", label: "Careers", href: "/pages/careers" },
      { id: "info-training", label: "Training Dept", href: "/pages/training-dept" },
      { id: "info-iron-island", label: "Strongest in the City", href: "/pages/iron-island-event-sign-up" },
    ],
  },
};

// Legacy export for backward compatibility (can be removed after refactoring)
export const footerLinks = {
  support: footerData.support.items,
  info: footerData.info.items,
  social: footerData.followUs.social,
};

export function formatPrice(amount: number): string {
  return `Rs ${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function installmentPrice(amount: number, installments = 3): string {
  const per = amount / installments;
  return `Rs ${per.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
