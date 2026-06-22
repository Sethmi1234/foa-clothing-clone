"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import SafeImage from "@/components/ui/SafeImage";
import PriceDisplay from "@/components/ui/PriceDisplay";
import { useSearch } from "@/context/SearchContext";
import { drawerOverlay, slideInFromRight } from "@/lib/animations";
import { getTrendingProducts, popularSearches, searchProducts } from "@/lib/search";
import type { Product } from "@/types";

export default function SearchDrawer() {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const trendingProducts = getTrendingProducts(6);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, closeSearch]);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setResults(value.trim() ? searchProducts(value) : []);
  }, []);

  const handlePopularClick = (searchQuery: string) => {
    setQuery(searchQuery);
    setResults(searchProducts(searchQuery));
    inputRef.current?.focus();
  };

  const handleProductClick = () => {
    closeSearch();
  };

  const displayProducts = query.trim() ? results : trendingProducts;
  const sectionTitle = query.trim()
    ? results.length > 0
      ? `Results for "${query}"`
      : `No results for "${query}"`
    : "Trending Now";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            variants={drawerOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[95] bg-black/50"
            onClick={closeSearch}
            aria-label="Close search"
          />

          <motion.aside
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[96] flex w-[calc(100vw-30px)] max-w-[600px] flex-col bg-white shadow-2xl"
            aria-label="Search"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-[#e2e2e2] px-6 py-5">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    ref={inputRef}
                    type="search"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search"
                    className="w-full border border-[#e2e2e2] bg-white py-3 pl-12 pr-4 text-[15px] text-[#151515] outline-none transition-colors focus:border-[#151515]"
                    aria-label="Search products"
                  />
                </div>
                <button
                  type="button"
                  onClick={closeSearch}
                  className="ml-4 shrink-0 p-2 text-[#151515] transition-opacity hover:opacity-70"
                  aria-label="Close search panel"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">

              {!query.trim() && (
                <div className="mb-8">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((item) => (
                      <button
                        key={item.query}
                        type="button"
                        onClick={() => handlePopularClick(item.query)}
                        className="border border-[#e2e2e2] px-4 py-2 text-[12px] uppercase tracking-[0.04em] text-[#151515] transition-colors hover:border-[#151515]"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                  {sectionTitle}
                </p>

                {displayProducts.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {displayProducts.map((product) => (
                      <SearchProductCard
                        key={product.id}
                        product={product}
                        onClick={handleProductClick}
                      />
                    ))}
                  </div>
                ) : (
                  query.trim() && (
                    <p className="py-8 text-center text-[14px] text-neutral-500">
                      Try searching for &quot;tees&quot;, &quot;shoes&quot;, or &quot;bags&quot;
                    </p>
                  )
                )}
              </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function SearchProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <Link
      href={product.href}
      onClick={onClick}
      className="group flex flex-col"
    >
      <div className="relative mb-3 aspect-[4/5] overflow-hidden bg-[#f3f3f3]">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 16vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.onSale && (
          <span className="absolute left-2 top-2 bg-black px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-white">
            Sale
          </span>
        )}
      </div>
      <p className="mb-1 line-clamp-2 text-[12px] font-bold uppercase leading-tight text-black">
        {product.name}
      </p>
      <div className="flex items-center gap-2 text-[13px] font-bold">
        {product.compareAtPrice && (
          <span className="font-normal text-neutral-400 line-through">
            <PriceDisplay amount={product.compareAtPrice} />
          </span>
        )}
        <span>
          <PriceDisplay amount={product.price} />
        </span>
      </div>
    </Link>
  );
}
