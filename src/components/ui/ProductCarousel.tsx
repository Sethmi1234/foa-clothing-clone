"use client";

import { motion } from "framer-motion";
import CarouselArrows from "@/components/ui/CarouselArrows";
import ProductCard from "@/components/ui/ProductCard";
import { carouselSlide } from "@/lib/animations";
import { useProductCarousel } from "@/hooks/useProductCarousel";
import type { Product } from "@/types";

type ProductCarouselProps = {
  products: Product[];
  className?: string;
  carousel: ReturnType<typeof useProductCarousel>;
  showOverlayArrows?: boolean;
};

export default function ProductCarousel({
  products,
  className = "",
  carousel,
  showOverlayArrows = true,
}: ProductCarouselProps) {
  const { containerRef, metrics, translateX, canGoPrev, canGoNext, goPrev, goNext } =
    carousel;

  const arrowTop = metrics.slideWidth
    ? metrics.slideWidth * (5 / 8)
    : undefined;

  return (
    <div className={`group/carousel relative ${className}`}>
      {showOverlayArrows && (
        <CarouselArrows
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          onPrev={goPrev}
          onNext={goNext}
          arrowTop={arrowTop}
          className="opacity-100"
        />
      )}

      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: translateX }}
          transition={carouselSlide}
          style={{ gap: `${metrics.gap}px` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 pb-8"
              style={{ width: metrics.slideWidth || undefined }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
