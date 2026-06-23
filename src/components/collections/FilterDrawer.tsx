"use client";

import { useMemo, useState } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import {
  CategoryFilterSection,
  PriceFilterSection,
  SizeFilterSection,
} from "@/components/collections/FilterSections";
import type {
  AccordionState,
  CategoryFilterOption,
  FilterState,
  SizeFilterOption,
} from "@/components/collections/filterTypes";
import type { Product } from "@/types";

type FilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  activeFilters: FilterState;
  onApply: (filters: Partial<FilterState>) => void;
};

const excludedCollections = ["new", "sale", "men", "women", "accessories", "footwear"];
const sizeOrder = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "ONE SIZE"];

function formatCollectionLabel(collection: string) {
  return collection
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getCategoryOptions(products: Product[]): CategoryFilterOption[] {
  const categoryCounts = products.reduce<Record<string, number>>((acc, product) => {
    product.collections.forEach((collection) => {
      if (excludedCollections.includes(collection)) return;
      const label = formatCollectionLabel(collection);
      acc[label] = (acc[label] || 0) + 1;
    });
    return acc;
  }, {});

  return Object.entries(categoryCounts)
    .map(([name, count]) => ({
      name,
      count,
      key: name.toLowerCase().replace(/\s+/g, "-"),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function getSizeOptions(products: Product[]): SizeFilterOption[] {
  const sizeCounts = products.reduce<Record<string, number>>((acc, product) => {
    (product.sizes || ["ONE SIZE"]).forEach((size) => {
      acc[size] = (acc[size] || 0) + 1;
    });
    return acc;
  }, {});

  return Object.entries(sizeCounts).sort(([a], [b]) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));
}

export default function FilterDrawer({
  isOpen,
  onClose,
  products,
  activeFilters,
  onApply,
}: FilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <FilterDrawerPanel
      onClose={onClose}
      products={products}
      activeFilters={activeFilters}
      onApply={onApply}
    />
  );
}

function FilterDrawerPanel({
  onClose,
  products,
  activeFilters,
  onApply,
}: Omit<FilterDrawerProps, "isOpen">) {
  const [localFilters, setLocalFilters] = useState<FilterState>({ ...activeFilters });
  const [openSections, setOpenSections] = useState<AccordionState>({
    category: true,
    price: true,
    size: true,
  });

  const categories = useMemo(() => getCategoryOptions(products), [products]);
  const sizes = useMemo(() => getSizeOptions(products), [products]);
  const maxPriceRaw = useMemo(() => Math.max(...products.map((product) => product.price), 0), [products]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(maxPriceRaw);

  const toggleSection = (section: keyof AccordionState) => {
    setOpenSections((current) => ({ ...current, [section]: !current[section] }));
  };

  const toggleCategory = (key: string) => {
    setLocalFilters((current) => ({
      ...current,
      categories: current.categories.includes(key)
        ? current.categories.filter((category) => category !== key)
        : [...current.categories, key],
    }));
  };

  const toggleSize = (size: string) => {
    setLocalFilters((current) => ({
      ...current,
      sizes: current.sizes.includes(size)
        ? current.sizes.filter((currentSize) => currentSize !== size)
        : [...current.sizes, size],
    }));
  };

  const handleApply = () => {
    onApply({
      categories: localFilters.categories,
      sizes: localFilters.sizes,
      priceMin: minPrice,
      priceMax: maxPrice || Infinity,
    });
  };

  const handleClear = () => {
    setLocalFilters({
      categories: [],
      sizes: [],
      priceMin: 0,
      priceMax: Infinity,
      sortBy: "best-selling",
    });
    setMinPrice(0);
    setMaxPrice(maxPriceRaw);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40 transition-opacity" onClick={onClose} />
      <div className="fixed bottom-0 left-0 top-0 z-50 flex w-[400px] max-w-full flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-[0.06em] text-black">
              Filter and Sort
            </h2>
            <p className="text-[12px] uppercase text-neutral-500">
              {products.length} {products.length === 1 ? "Product" : "Products"}
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-500 hover:text-black" aria-label="Close filters">
            <CloseIcon className="size-3.5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <CategoryFilterSection
            isOpen={openSections.category}
            categories={categories}
            selectedCategories={localFilters.categories}
            onToggleSection={() => toggleSection("category")}
            onToggleCategory={toggleCategory}
          />
          <PriceFilterSection
            isOpen={openSections.price}
            minPrice={minPrice}
            maxPrice={maxPrice}
            maxPriceRaw={maxPriceRaw}
            onToggleSection={() => toggleSection("price")}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          />
          <SizeFilterSection
            isOpen={openSections.size}
            sizes={sizes}
            selectedSizes={localFilters.sizes}
            onToggleSection={() => toggleSection("size")}
            onToggleSize={toggleSize}
          />
        </div>

        <div className="flex items-center justify-between border-t border-neutral-200 bg-white p-4 px-6">
          <button
            onClick={handleClear}
            className="text-[12px] font-bold uppercase tracking-[0.06em] text-neutral-500 hover:text-black"
          >
            Clear
          </button>
          <button
            onClick={handleApply}
            className="rounded-full bg-black px-8 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white hover:bg-neutral-800"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
