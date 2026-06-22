export interface NavItem {
  id: string;
  label: string;
  url?: string;
}

export interface NavColumn {
  id: string;
  title: string;
  url?: string;
  items: NavItem[];
}

export interface TopLevelCategory {
  id: string;
  label: string;
  url?: string;
  isSale?: boolean;
  columns?: NavColumn[];
  promotion?: {
    image: string;
    href: string;
    cta: string;
  };
}
