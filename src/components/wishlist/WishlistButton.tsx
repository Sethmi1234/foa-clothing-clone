"use client";

import { useWishlist, type WishlistItem } from "@/context/WishlistContext";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { useState } from "react";

type WishlistButtonProps = {
  product: WishlistItem;
  variant?: "card" | "page";
  className?: string;
};

export default function WishlistButton({
  product,
  variant = "card",
  className = "",
}: WishlistButtonProps) {
  const { isInWishlist, toggleItem } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  const [showToast, setShowToast] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);
    
    // Show toast when adding to wishlist
    if (!isWishlisted) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  if (variant === "page") {
    return (
      <button
        type="button"
        onClick={handleToggle}
        aria-label={
          isWishlisted
            ? `Remove ${product.name} from wishlist`
            : `Add ${product.name} to wishlist`
        }
        aria-pressed={isWishlisted}
        className={`flex h-[54px] w-full items-center justify-center gap-2 rounded-full border border-black bg-white text-[13px] font-bold uppercase tracking-[0.06em] text-black transition-colors hover:bg-neutral-50 ${className}`}
      >
        <HeartIcon filled={isWishlisted} className="text-black" />
        <span>
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </span>
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={
          isWishlisted
            ? `Remove ${product.name} from wishlist`
            : `Add ${product.name} to wishlist`
        }
        aria-pressed={isWishlisted}
        className={`flex items-center justify-center transition-transform duration-150 active:scale-90 ${className}`}
      >
        <HeartIcon
          filled={isWishlisted}
          className={`transition-colors duration-200 ${
            isWishlisted
              ? "text-black"
              : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
          }`}
        />
      </button>
      
      {showToast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] rounded border-2 border-black bg-white px-6 py-3 text-[14px] font-medium text-black shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
          Added to Wishlist
        </div>
      )}
    </>
  );
}
