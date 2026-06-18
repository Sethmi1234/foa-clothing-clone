"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { TopLevelCategory } from "@/types/navigation";

type MegaMenuProps = {
  category: TopLevelCategory | null;
  isOpen: boolean;
  forceSolid?: boolean;
};

export default function MegaMenu({ category, isOpen, forceSolid = false }: MegaMenuProps) {
  if (!category?.columns?.length) return null;

  const gridCols =
    category.columns.length >= 6
      ? "lg:grid-cols-6"
      : category.columns.length >= 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={`absolute left-0 right-0 top-full z-50 border-t border-neutral-200 shadow-lg ${
            forceSolid ? "bg-white" : "bg-white/95 backdrop-blur-[1px]"
          }`}
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <div className="mx-auto max-w-[1440px] px-8 py-10">
            <div className={`grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3 ${gridCols}`}>
              {category.columns.map((column) => (
                <div key={column.id}>
                  {column.url ? (
                    <Link
                      href={column.url}
                      className="mb-3 block text-[13px] font-semibold uppercase tracking-[0.04em] text-black transition-opacity hover:opacity-60"
                    >
                      {column.title}
                    </Link>
                  ) : (
                    <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-black">
                      {column.title}
                    </p>
                  )}
                  {column.items.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {column.items.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.url ?? "#"}
                            className="text-[13px] uppercase tracking-[0.03em] text-neutral-600 transition-colors hover:text-black"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}