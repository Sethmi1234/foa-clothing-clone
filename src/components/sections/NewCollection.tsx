"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { allProducts } from "@/data/collections";
import { staggerContainer } from "@/lib/animations";

export default function NewCollection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const newCollectionProducts = allProducts.filter((p) =>
    p.collections && Array.isArray(p.collections) && p.collections.includes("new")
  );

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        el.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.75;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pb-12 md:pb-16">
      <Container className="max-w-none px-6 md:px-[62px]">
        <div className="pt-8 md:pt-10">
          <div className="mb-8 flex flex-col gap-4 md:mb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="inline-block border-b-4 border-black pb-1 text-[38px] font-bold uppercase leading-none tracking-normal text-black md:text-[48px]">
                New Collection
              </h2>
              <p className="mt-8 text-[21px] leading-none text-black">
                Shop till you drop!
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Left Arrow */}
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-all ${
                  canScrollLeft
                    ? "cursor-pointer opacity-100 hover:opacity-80"
                    : "cursor-not-allowed opacity-30"
                }`}
                aria-label="Scroll left"
              >
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5.5H2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.30002 1L0.800018 5.5L5.30002 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-all ${
                  canScrollRight
                    ? "cursor-pointer opacity-100 hover:opacity-80"
                    : "cursor-not-allowed opacity-30"
                }`}
                aria-label="Scroll right"
              >
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.69995 1L14.2 5.5L9.69995 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <Link
                href="/collections/new-collection"
                className="text-[19px] leading-none text-black underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Shop New Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Product carousel - shows 4 items initially, scrollable */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          ref={scrollContainerRef}
          className="hide-scrollbar grid grid-cols-2 gap-6 overflow-hidden md:flex md:gap-14 md:overflow-x-auto md:scroll-smooth"
        >
          {newCollectionProducts.map((product) => (
            <div key={product.id} className="md:min-w-0 md:w-1/4 md:flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}