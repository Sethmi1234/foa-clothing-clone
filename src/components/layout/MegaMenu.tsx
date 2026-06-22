"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
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
          <div className="mx-auto flex max-w-[1440px] gap-8 px-8 py-10">
            <div className={`grid flex-1 grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3 ${gridCols}`}>
              {category.columns.map((column) => (
                <div key={column.id}>
                  {column.url ? (
                    <Link
                      href={column.url}
                      className="mb-3 block text-[13px] font-semibold uppercase tracking-[0.04em] text-black transition-opacity hover:opacity-60 hover:underline hover:underline-offset-4"
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
                            className="text-[13px] uppercase tracking-[0.03em] text-neutral-600 transition-colors hover:text-black hover:underline hover:underline-offset-4"
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

            {category.promotion && (
              <div className="relative hidden w-[280px] shrink-0 overflow-hidden lg:block xl:w-[320px]">
                <Link href={category.promotion.href} className="group relative block aspect-square">
                  <SafeImage
                    src={category.promotion.image}
                    alt={category.promotion.cta}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-6 left-6 text-[13px] font-medium uppercase tracking-[0.06em] text-white underline underline-offset-4">
                    {category.promotion.cta}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
