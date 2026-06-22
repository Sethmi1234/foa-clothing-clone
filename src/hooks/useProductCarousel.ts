"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Product } from "@/types";

export type CarouselMetrics = {
  slideWidth: number;
  gap: number;
  visibleCount: number;
};

function getMetrics(containerWidth: number): CarouselMetrics {
  const isMobile = containerWidth < 768;
  const gap = isMobile ? 16 : 30; // Foundation grid gutter: 16px mobile, 30px desktop
  const visibleCount = isMobile ? 2 : 4;
  const peekRatio = 0; // No peek, exact 4 items on desktop
  const slideWidth =
    (containerWidth - gap * (visibleCount - 1)) / visibleCount;

  return { slideWidth, gap, visibleCount };
}

export function useProductCarousel(products: Product[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [metrics, setMetrics] = useState<CarouselMetrics>({
    slideWidth: 0,
    gap: 20,
    visibleCount: 4,
  });

  const updateMetrics = useCallback(() => {
    if (!containerRef.current) return;
    setMetrics(getMetrics(containerRef.current.offsetWidth));
  }, []);

  useEffect(() => {
    updateMetrics();
    const observer = new ResizeObserver(updateMetrics);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [updateMetrics]);

  const maxIndex = Math.max(0, products.length - metrics.visibleCount);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const productKey = products.map((product) => product.id).join(",");

  useEffect(() => {
    setCurrentIndex(0);
  }, [productKey]);

  const translateX = -(currentIndex * (metrics.slideWidth + metrics.gap));

  return {
    containerRef,
    metrics,
    translateX,
    canGoPrev,
    canGoNext,
    goPrev,
    goNext,
  };
}
