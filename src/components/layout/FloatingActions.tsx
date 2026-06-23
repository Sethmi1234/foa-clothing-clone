"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BackToTopIcon } from "@/components/icons/UtilityIcons";
import CurrencySelector from "@/components/ui/CurrencySelector";
import { fadeScale } from "@/lib/animations";

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
            variants={fadeScale}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={scrollToTop}
            type="button"
            className="fixed bottom-5 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-shadow hover:shadow-md"
            aria-label="Back to top"
          >
            <BackToTopIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
