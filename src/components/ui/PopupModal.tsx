"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PopupContent from "@/components/ui/popup/PopupContent";
import { modalOverlay, modalPopIn } from "@/lib/animations";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const dismissed = sessionStorage.getItem("foa_popup_dismissed");
        if (dismissed) return;
      } catch {
        // If storage is unavailable, still show the popup for this session.
      }

      setIsOpen(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("foa_popup_dismissed", "true");
    } catch {
      // Ignore storage failures; closing the modal should still work.
    }
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[2147483646] flex items-center justify-center bg-black/50 px-4 py-8 md:px-6"
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
          role="presentation"
        >
          <motion.div
            className="relative flex w-full max-w-[1000px] cursor-default bg-white shadow-[0_18px_70px_rgba(0,0,0,0.22)]"
            variants={modalPopIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute -right-4 -top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[22px] font-light leading-none text-black shadow-[0_2px_8px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-70"
              aria-label="Close popup"
            >
              x
            </button>

            <PopupContent onSuccess={handleClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}