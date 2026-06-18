"use client";

import { useState, useMemo, useCallback } from "react";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import FilterDrawer from "@/components/collections/FilterDrawer";
import CollectionProductCard from "@/components/collections/CollectionProductCard";
import type { Product } from "@/types";

type FilterState = {
  categories: string[];
  sizes: string[];
  priceMin: number;
  priceMax: number;
  sortBy: string;
};

type CollectionPageClientProps = {
  products: Product[];
  sortLabel?: string;
};

export default function CollectionPageClient({
  products,
  sortLabel = "Best Selling",
}: CollectionPageClientProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    categories: [],
    sizes: [],
    priceMin: 0,
    priceMax: Infinity,
    sortBy: "best-selling",
  });

  const sortOptions = [
    { value: "best-selling", label: "Best Selling" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest" },
    { value: "a-z", label: "Alphabetically: A-Z" },
    { value: "z-a", label: "Alphabetically: Z-A" },
  ];

  const activeSortLabel = sortOptions.find(s => s.value === activeFilters.sortBy)?.label || sortLabel;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by categories
    if (activeFilters.categories.length > 0) {
      result = result.filter(p =>
        p.collections.some(c => activeFilters.categories.includes(c))
      );
    }

    // Filter by sizes
    if (activeFilters.sizes.length > 0) {
      result = result.filter(p =>
        (p.sizes || []).some(s => activeFilters.sizes.includes(s))
      );
    }

    // Filter by price
    result = result.filter(
      p => p.price >= activeFilters.priceMin && p.price <= activeFilters.priceMax
    );

    // Sort
    switch (activeFilters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }, [products, activeFilters]);

  const handleApplyFilters = useCallback((filters: Partial<FilterState>) => {
    setActiveFilters(prev => ({ ...prev, ...filters }));
    setIsDrawerOpen(false);
  }, []);

  const clearAllFilters = useCallback(() => {
    setActiveFilters({
      categories: [],
      sizes: [],
      priceMin: 0,
      priceMax: Infinity,
      sortBy: "best-selling",
    });
  }, []);

  const removeCategoryFilter = (cat: string) => {
    setActiveFilters(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== cat),
    }));
  };

  const activeFilterCount =
    activeFilters.categories.length + activeFilters.sizes.length;

  const hasActiveFilters = activeFilterCount > 0 || activeFilters.sortBy !== "best-selling";

  return (
    <>
      {/* Filter/Sort Bar */}
      <div className="border-y border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          {/* Left: Filter button */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.04em] text-black hover:opacity-70"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M0 1H18M3 7H15M5 13H13" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="6" cy="1" r="1.5" fill="currentColor" />
              <circle cx="12" cy="7" r="1.5" fill="currentColor" />
              <circle cx="9" cy="13" r="1.5" fill="currentColor" />
            </svg>
            Filter and Sort
            {activeFilterCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Center: Active filter chips */}
          <div className="hidden items-center gap-2 md:flex">
            {activeFilters.categories.map(cat => (
              <span key={cat} className="flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-[11px] uppercase tracking-[0.02em]">
                {cat}
                <button onClick={() => removeCategoryFilter(cat)}>
                  <CloseIcon className="size-3" />
                </button>
              </span>
            ))}
            {hasActiveFilters && (
              <button onClick={clearAllFilters} className="text-[11px] uppercase text-neutral-500 underline hover:text-black">
                Clear all
              </button>
            )}
          </div>

          {/* Right: Sort + Product count */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-1 text-[12px] uppercase tracking-[0.04em] text-black hover:opacity-70"
              >
                {activeSortLabel}
                <ChevronDownIcon className={`transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
              </button>
              {isSortOpen && (
                <div className="absolute right-0 top-full z-30 mt-1 w-[200px] border border-neutral-200 bg-white shadow-lg">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setActiveFilters(prev => ({ ...prev, sortBy: option.value }));
                        setIsSortOpen(false);
                      }}
                      className={`block w-full px-4 py-2.5 text-left text-[12px] uppercase tracking-[0.02em] transition-colors hover:bg-neutral-100 ${
                        activeFilters.sortBy === option.value ? "font-bold text-black" : "text-neutral-600"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="text-[12px] uppercase tracking-[0.04em] text-neutral-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"}
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="bg-white py-8 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
              {filteredProducts.map((product) => (
                <CollectionProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-sm uppercase tracking-wide text-neutral-400">
              No products found matching your filters.
            </p>
          )}
        </div>
      </section>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        products={products}
        activeFilters={activeFilters}
        onApply={handleApplyFilters}
      />
    </>
  );
}