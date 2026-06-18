"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CurrencySelector from "@/components/ui/CurrencySelector";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="fixed bottom-5 left-5 z-40">
        <CurrencySelector variant="floating" />
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            type="button"
            className="fixed bottom-5 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-shadow hover:shadow-md"
            aria-label="Back to top"
          >
            <svg width="11" height="16" viewBox="0 0 11 16" fill="none" aria-hidden="true">
              <path
                d="M4.87654 2.34497C4.87654 1.99178 5.16285 1.70547 5.51604 1.70547C5.86922 1.70547 6.15554 1.99179 6.15554 2.34497V15.5613C6.15554 15.9144 5.86922 16.2008 5.51604 16.2008C5.16285 16.2008 4.87654 15.9144 4.87654 15.5613V2.34497Z"
                fill="currentColor"
              />
              <path
                d="M0.197525 5.0502L5.02195 0.225769C5.14739 0.100345 5.32293 0.0251028 5.48588 0C5.66143 0 5.83696 0.0752197 5.96239 0.200647L10.7994 5.03761C10.9373 5.17554 11 5.33858 11 5.51412C11 5.68967 10.9248 5.8652 10.7994 5.99063C10.5486 6.254 10.1223 6.254 9.85892 5.99063L6.16301 2.30726C5.72921 2.1318 5.72921 1.70547 4.83387 2.29472L1.13796 5.99063C0.887198 6.254 0.460891 6.254 0.197525 5.99063C-0.0658415 5.73987 -0.0658415 5.31356 0.197525 5.0502Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}