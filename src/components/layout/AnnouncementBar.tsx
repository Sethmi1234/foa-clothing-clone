"use client";

import { AnimatePresence, motion } from "framer-motion";
import { announcementMessages } from "@/data/mockData";

type AnnouncementBarProps = {
  scrolled?: boolean;
};

export default function AnnouncementBar({ scrolled = false }: AnnouncementBarProps) {
  const items = [...announcementMessages, ...announcementMessages];

  return (
    <AnimatePresence mode="wait">
      {scrolled ? (
        <motion.div
          key="scrolled"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-[60] flex h-[34px] items-center justify-center bg-[#faf6f4] text-black"
        >
          <p className="text-[11px] font-normal uppercase leading-none tracking-[0.02em] md:text-[12px]">
            FREE SHIPPING FOR ORDERS ABOVE{" "}
            <span className="text-foa-red">Rs.9999</span>
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="marquee"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-[60] overflow-hidden bg-foa-black text-white"
        >
          <div
            className="animate-marquee flex whitespace-nowrap"
            style={{ "--marquee-speed": "24s" } as React.CSSProperties}
          >
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0">
                {items.map((message, index) => (
                  <span
                    key={`${group}-${index}`}
                    className="px-8 py-2.5 text-[11px] font-medium uppercase tracking-[0.08em] leading-[1.6]"
                  >
                    {message}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
