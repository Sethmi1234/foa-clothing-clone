export type { NavItem, NavColumn, TopLevelCategory } from "@/types/navigation";

export type HeroSlide = {
  id: string;
  title: string;
  cta: string;
  href: string;
  desktopImage: string;
  mobileImage: string;
};

export type ProductColor = {
  hex: string;
  image: string;
  hoverImage?: string;
  images?: string[];
  soldOut?: boolean;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  hoverImage?: string;
  images?: string[];
  href: string;
  colors?: ProductColor[];
  sizes?: string[];
  category: string;
  collections: string[];
  onSale?: boolean;
  saleLabel?: string;
  description?: string;
  material?: string;
};

export type CollectionMeta = {
  slug: string;
  title: string;
  displayTitle: string;
  heroImage?: string;
  heroOverlay?: string;
  showHero: boolean;
};

export type OtherCollectionGroup = {
  id: string;
  label: string;
  href: string;
  image: string;
};

export type CategoryItem = {
  label: string;
  href: string;
  image: string;
};

export type CollectionItem = {
  id: string;
  title: string;
  href: string;
  image: string;
  outlined?: boolean;
};

export type FooterLinkItem = {
  id: string;
  label: string;
  href: string;
};

export type FooterSection = {
  id: string;
  title: string;
  items: FooterLinkItem[];
};

export type SocialMediaItem = {
  id: string;
  label: string;
  href: string;
};

export type FooterData = {
  followUs: {
    id: string;
    title: string;
    social: SocialMediaItem[];
  };
  support: FooterSection;
  info: FooterSection;
};