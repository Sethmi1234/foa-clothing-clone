"use client";

import { usePathname } from "next/navigation";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { useWishlist } from "@/context/WishlistContext";

export default function FloatingWishlistButton() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { count: wishlistCount, openDrawer } = useWishlist();

  // Don't show on home page
  if (isHome) return null;

  return (
    <button
      type="button"
      onClick={openDrawer}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-shadow hover:shadow-md"
      aria-label="Open wishlist"
    >
      <HeartIcon 
        filled={wishlistCount > 0} 
        className={wishlistCount > 0 ? "text-[#e00000]" : "text-black"}
      />
      {wishlistCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
          {wishlistCount}
        </span>
      )}
    </button>
  );
}
