"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import SafeImage from "@/components/ui/SafeImage";
import { useWishlist } from "@/context/WishlistContext";
import { slideDownFromTop } from "@/lib/animations";

export default function WishlistBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCheckout = pathname.startsWith("/checkout");
  const { items, count, isDrawerOpen, openDrawer, closeDrawer, removeItem } = useWishlist();

  if (isCheckout || isHome) return null;

  return (
    <>
      <AnimatePresence>
        {!isDrawerOpen && count > 0 && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={openDrawer}
            className="fixed right-[30px] top-[115px] z-[48] flex h-[50px] w-[50px] items-center justify-center rounded-full border border-neutral-200 bg-[#f3f3f3] shadow-[0_15px_110px_rgba(0,0,0,0.03)] transition-transform hover:scale-105"
            aria-label="Open wishlist"
          >
            <HeartIcon filled className="text-[#e00000]" />
            <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
              {count}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            variants={slideDownFromTop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 right-0 z-[49] border-b border-white bg-[#f3f3f3] shadow-[0_15px_110px_rgba(0,0,0,0.03)]"
            style={{ top: "var(--header-height, 99px)" }}
            aria-label="Wishlist bar"
          >
            <div className="relative mx-auto flex max-w-[1440px] items-center px-4 py-[15px] md:px-8">
              {items.length === 0 ? (
                <div className="flex flex-1 items-center justify-center py-4">
                  <p className="text-[14px] text-neutral-500">Your wishlist is empty</p>
                </div>
              ) : (
                <div className="hide-scrollbar flex flex-1 items-center gap-4 overflow-x-auto px-2 py-1">
                  {items.map((item) => (
                    <div key={item.id} className="group relative shrink-0">
                      <Link
                        href={item.href}
                        onClick={closeDrawer}
                        className="block"
                        title={item.name}
                      >
                        <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-[#bfbfbf] bg-white transition-colors hover:border-[#4ca25b]">
                          <SafeImage
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="70px"
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100"
                        aria-label={`Remove ${item.name} from wishlist`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={closeDrawer}
                className="ml-3 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-70"
                aria-label="Close wishlist bar"
              >
                <CloseIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}