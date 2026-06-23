"use client";

import { AnimatePresence, motion } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { heroSlides } from "@/data/mockData";
import { heroImageCrossFade, heroTextReveal, slideUpFade } from "@/lib/animations";

const SLIDE_DURATION_SECONDS = 7;
const SLIDE_DURATION_MS = SLIDE_DURATION_SECONDS * 1000;

type HeroProgressDotProps = {
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
};

function HeroProgressDot({ index, isActive, onSelect }: HeroProgressDotProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={isActive ? "true" : undefined}
      className="relative flex h-6 w-6 items-center justify-center rounded-full"
    >
      <span className="h-2 w-2 rounded-full bg-white/80 transition-opacity hover:bg-white" />
      {isActive && (
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="8"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
          />
          <motion.circle
            key={index}
            cx="12"
            cy="12"
            r="8"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: SLIDE_DURATION_SECONDS, ease: "linear" }}
          />
        </svg>
      )}
    </button>
  );
}

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Stacked slides — crossfade without unmounting to prevent white flash */}
      {heroSlides.map((s, index) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          variants={heroImageCrossFade}
          initial="hidden"
          animate={index === current ? "visible" : "hidden"}
          style={{ zIndex: index === current ? 2 : 1 }}
          aria-hidden={index !== current}
        >
          <SafeImage
            src={s.desktopImage}
            alt={s.title}
            fill
            priority={index === 0}
            className="hidden object-cover object-center md:block"
            sizes="100vw"
          />
          <SafeImage
            src={s.mobileImage}
            alt={s.title}
            fill
            priority={index === 0}
            className="object-cover object-center md:hidden"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>
      ))}

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pt-[120px] text-center text-white md:pt-[138px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            variants={slideUpFade}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center gap-7"
          >
            <motion.h1
              custom={0}
              variants={heroTextReveal}
              initial="hidden"
              animate="visible"
              className="max-w-3xl text-[44px] font-bold leading-[1.08] tracking-normal md:text-[76px] lg:text-[92px]"
            >
              {slide.title}
            </motion.h1>
            <motion.div custom={1} variants={heroTextReveal} initial="hidden" animate="visible">
              <Button
                href={slide.href}
                variant="outline"
                color="white"
                className="min-w-[178px] px-9 py-4 text-[15px] font-bold tracking-[0.08em]"
              >
                {slide.cta}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {heroSlides.map((_, index) => (
          <HeroProgressDot
            key={index}
            index={index}
            isActive={index === current}
            onSelect={setCurrent}
          />
        ))}
      </div>

      <Link
        href={slide.href}
        className="absolute inset-0 z-[5]"
        aria-label={slide.title}
        tabIndex={-1}
      />
    </section>
  );
}
