"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import CarouselArrows from "@/components/ui/CarouselArrows";
import { CollectionArrowIcon } from "@/components/icons/UtilityIcons";
import { carouselSlide } from "@/lib/animations";
import type { OtherCollectionGroup } from "@/types";

type OtherCollectionsProps = {
  groups: OtherCollectionGroup[];
};

export default function OtherCollections({ groups }: OtherCollectionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleCount = containerWidth < 768 ? 1 : 3;
  const gap = containerWidth >= 1024 ? 32 : containerWidth >= 768 ? 24 : 40;
  const slideWidth = containerWidth
    ? (containerWidth - gap * (visibleCount - 1)) / visibleCount
    : 0;
  const arrowTop = slideWidth ? slideWidth * (9 / 32) : undefined;
  const maxIndex = Math.max(0, groups.length - visibleCount);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;
  const translateX = -(currentIndex * (slideWidth + gap));

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateWidth = () => setContainerWidth(node.offsetWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  return (
    <section className="border-b border-t border-neutral-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h2 className="mb-8 text-[22px] font-bold uppercase tracking-wide text-black md:mb-10 md:text-[28px]">
          OTHER COLLECTIONS
        </h2>

        <div className="group/carousel relative">
          <CarouselArrows
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
            onPrev={goPrev}
            onNext={goNext}
            arrowTop={arrowTop}
            className="opacity-100"
          />

          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: translateX }}
              transition={carouselSlide}
              style={{ gap: `${gap}px` }}
            >
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="group shrink-0"
                  style={{ width: slideWidth || undefined }}
                >
                  <Link href={group.href} className="block" title={group.label}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                      <SafeImage
                        src={group.image}
                        alt={group.label}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </Link>

                  <Link
                    href={group.href}
                    className="mt-3 flex items-center gap-3 text-black transition-opacity group-hover:opacity-70"
                    title={group.label}
                  >
                    <span className="shrink-0 text-[13px] font-bold uppercase tracking-wide md:text-[14px]">
                      {group.label}
                    </span>
                    <span className="h-px flex-1 bg-neutral-300" />
                    <CollectionArrowIcon className="shrink-0" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
