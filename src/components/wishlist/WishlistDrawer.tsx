"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SidePanelCloseIcon } from "@/components/icons/SidePanelCloseIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { useWishlist, type WishlistItem } from "@/context/WishlistContext";
import { drawerOverlay, slideInFromRight } from "@/lib/animations";

export default function WishlistDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem } = useWishlist();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.button
            type="button"
            variants={drawerOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[88] bg-black/40"
            onClick={closeDrawer}
            aria-label="Close wishlist"
          />

          <motion.aside
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[90] flex w-[calc(100vw-30px)] max-w-[480px] flex-col bg-white shadow-2xl"
            aria-label="Wishlist"
          >
            <div className="flex items-center justify-between border-b border-[#e2e2e2] px-6 py-5">
              <h2 className="text-[18px] font-normal text-[#151515]">Wishlist</h2>
              <button
                type="button"
                onClick={closeDrawer}
                className="text-[#151515] transition-opacity hover:opacity-70"
                aria-label="Close wishlist panel"
              >
                <SidePanelCloseIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <HeartIcon filled={false} className="mb-4 size-12 text-neutral-300" />
                  <p className="text-[14px] text-neutral-500">Your wishlist is empty</p>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="mt-4 text-[12px] font-medium uppercase tracking-[0.08em] text-[#151515] underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="py-4 space-y-4">
                  {items.map((item) => (
                    <WishlistItem
                      key={item.id}
                      item={item}
                      onRemove={() => removeItem(item.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#e2e2e2] bg-white px-6 pb-8 pt-4 md:pb-6">
                <p className="mb-4 text-center text-[12px] tracking-[0.02em] text-neutral-500">
                  {items.length} {items.length === 1 ? "item" : "items"} in your wishlist
                </p>
                <Link
                  href="/"
                  onClick={closeDrawer}
                  className="block text-center text-[12px] font-medium uppercase tracking-[0.08em] text-[#151515] underline underline-offset-4"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function WishlistItem({
  item,
  onRemove,
}: {
  item: WishlistItem;
  onRemove: () => void;
}) {
  return (
    <div className="flex gap-4">
      <Link
        href={item.href}
        className="relative aspect-square w-24 shrink-0 overflow-hidden bg-[#f3f3f3]"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="96px"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link
            href={item.href}
            className="mb-1 block text-[13px] font-medium text-[#151515] hover:underline"
          >
            {item.name}
          </Link>
          <p className="text-[13px] text-neutral-600">
            Rs {item.price?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) ?? "0.00"}
          </p>
        </div>

        <button
          type="button"
          onClick={onRemove}
          className="self-start text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500 underline underline-offset-2 hover:text-[#151515]"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
