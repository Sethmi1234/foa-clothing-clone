"use client";

import { AnimatePresence, motion } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { heroSlides } from "@/data/mockData";
import { heroTextReveal } from "@/lib/animations";

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Stacked slides — crossfade without unmounting to prevent white flash */}
      {heroSlides.map((s, index) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
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

      {/* Dots navigation */}
      <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full border border-white transition-all ${
              index === current ? "scale-110 bg-white" : "bg-transparent"
            }`}
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