export type FilterState = {
  categories: string[];
  sizes: string[];
  priceMin: number;
  priceMax: number;
  sortBy: string;
};

export type AccordionState = {
  category: boolean;
  price: boolean;
  size: boolean;
};

export type CategoryFilterOption = {
  name: string;
  count: number;
  key: string;
};

export type SizeFilterOption = [size: string, count: number];
