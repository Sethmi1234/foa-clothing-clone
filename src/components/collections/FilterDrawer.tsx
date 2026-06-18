"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/types";

type FilterState = {
  categories: string[];
  sizes: string[];
  priceMin: number;
  priceMax: number;
  sortBy: string;
};

type FilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  activeFilters: FilterState;
  onApply: (filters: Partial<FilterState>) => void;
};

type AccordionState = {
  category: boolean;
  price: boolean;
  size: boolean;
};

export default function FilterDrawer({
  isOpen,
  onClose,
  products,
  activeFilters,
  onApply,
}: FilterDrawerProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>({ ...activeFilters });
  const [openSections, setOpenSections] = useState<AccordionState>({
    category: true,
    price: true,
    size: true,
  });

  // Calculate unique categories and their counts
  const categoryCounts = products.reduce((acc, product) => {
    product.collections.forEach(col => {
      // Filter out generic collections like "new", "sale", "men", "women" to show only product-specific ones
      const excludeList = ["new", "sale", "men", "women", "accessories", "footwear"];
      if (!excludeList.includes(col)) {
        const label = col
          .split("-")
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");
        acc[label] = (acc[label] || 0) + 1;
      }
    });
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
    key: name.toLowerCase().replace(/\s+/g, "-"),
  })).sort((a, b) => a.name.localeCompare(b.name));

  // Calculate sizes and their counts
  const sizeCounts = products.reduce((acc, product) => {
    (product.sizes || ["ONE SIZE"]).forEach(size => {
      acc[size] = (acc[size] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sizes = Object.entries(sizeCounts).sort(([a], [b]) => {
    const order = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "ONE SIZE"];
    return order.indexOf(a) - order.indexOf(b);
  });

  // Price calculations
  const maxPriceRaw = Math.max(...products.map(p => p.price), 0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(maxPriceRaw);

  const toggleSection = (section: keyof AccordionState) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleCategory = (key: string) => {
    setLocalFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(key)
        ? prev.categories.filter(c => c !== key)
        : [...prev.categories, key],
    }));
  };

  const toggleSize = (size: string) => {
    setLocalFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size],
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

  // Sync local when drawer opens
  useEffect(() => {
    if (isOpen) {
      setLocalFilters({ ...activeFilters });
      setMinPrice(0);
      setMaxPrice(maxPriceRaw);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-0 top-0 z-50 flex w-[400px] max-w-full flex-col bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-[0.06em] text-black">
              Filter and Sort
            </h2>
            <p className="text-[12px] uppercase text-neutral-500">
              {products.length} {products.length === 1 ? "Product" : "Products"}
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-500 hover:text-black">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Category Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("category")}
              className="flex w-full items-center gap-4 py-2 text-left"
            >
              <span className="text-lg font-light leading-none">{openSections.category ? "—" : "+"}</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.06em]">Product Category</span>
            </button>
            {openSections.category && (
              <div className="mt-4 flex flex-col gap-3">
                {categories.map(c => (
                  <label key={c.name} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={localFilters.categories.includes(c.key)}
                      onChange={() => toggleCategory(c.key)}
                      className="h-[18px] w-[18px] rounded-sm border-neutral-300 text-black focus:ring-black"
                    />
                    <span className="text-[15px] text-neutral-800">{c.name} ({c.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("price")}
              className="flex w-full items-center gap-4 py-2 text-left"
            >
              <span className="text-lg font-light leading-none">{openSections.price ? "—" : "+"}</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.06em]">Price</span>
            </button>
            {openSections.price && (
              <div className="mt-4">
                <p className="mb-6 text-[14px] text-neutral-600">
                  The highest price is Rs {maxPriceRaw.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <div className="relative mb-8 h-1 w-full rounded bg-neutral-200">
                  <div
                    className="absolute h-full bg-black"
                    style={{
                      left: `${(minPrice / maxPriceRaw) * 100}%`,
                      right: `${100 - (maxPrice / maxPriceRaw) * 100}%`,
                    }}
                  />
                  <input
                    type="range"
                    min="0"
                    max={maxPriceRaw}
                    value={minPrice}
                    onChange={e => setMinPrice(Number(e.target.value))}
                    className="pointer-events-none absolute w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:bg-white"
                  />
                  <input
                    type="range"
                    min="0"
                    max={maxPriceRaw}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Number(e.target.value))}
                    className="pointer-events-none absolute w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:bg-white"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-1 items-center gap-2">
                    <span className="text-[14px]">Rs</span>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={e => setMinPrice(Number(e.target.value))}
                      className="w-full border border-neutral-200 p-2 text-[14px] outline-none"
                    />
                  </div>
                  <div className="flex flex-1 items-center gap-2">
                    <span className="text-[14px]">Rs</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={e => setMaxPrice(Number(e.target.value))}
                      className="w-full border border-neutral-200 p-2 text-[14px] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Size Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("size")}
              className="flex w-full items-center gap-4 py-2 text-left"
            >
              <span className="text-lg font-light leading-none">{openSections.size ? "—" : "+"}</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.06em]">Size</span>
            </button>
            {openSections.size && (
              <div className="mt-4 flex flex-col gap-3">
                {sizes.map(([size, count]) => (
                  <label key={size} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={localFilters.sizes.includes(size)}
                      onChange={() => toggleSize(size)}
                      className="h-[18px] w-[18px] rounded-sm border-neutral-300 text-black focus:ring-black"
                    />
                    <span className="text-[15px] uppercase text-neutral-800">{size} ({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-200 bg-white p-4 px-6">
          <div>
            <button
              onClick={handleClear}
              className="text-[12px] font-bold uppercase tracking-[0.06em] text-neutral-500 hover:text-black"
            >
              Clear
            </button>
          </div>
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