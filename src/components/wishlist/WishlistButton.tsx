"use client";

import { useWishlist } from "@/context/WishlistContext";
import { HeartIcon } from "@/components/icons/HeartIcon";

type WishlistButtonProps = {
  productId: string;
  productName: string;
  variant?: "card" | "page";
  className?: string;
};

export default function WishlistButton({
  productId,
  productName,
  variant = "card",
  className = "",
}: WishlistButtonProps) {
  const { isInWishlist, toggleItem } = useWishlist();
  const isWishlisted = isInWishlist(productId);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(productId, productName);
  };

  if (variant === "page") {
    return (
      <button
        type="button"
        onClick={handleToggle}
        aria-label={
          isWishlisted
            ? `Remove ${productName} from wishlist`
            : `Add ${productName} to wishlist`
        }
        className={`group flex items-center gap-2 transition-opacity hover:opacity-70 ${className}`}
      >
        <HeartIcon
          filled={isWishlisted}
          className={isWishlisted ? "text-black" : "text-black"}
        />
        <span className="text-[13px] font-semibold uppercase tracking-[0.06em]">
          {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={
        isWishlisted
          ? `Remove ${productName} from wishlist`
          : `Add ${productName} to wishlist`
      }
      className={`flex items-center justify-center transition-transform duration-150 active:scale-90 ${className}`}
    >
      <HeartIcon
        filled={isWishlisted}
        className={`transition-colors duration-200 ${
          isWishlisted ? "text-black" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        }`}
      />
    </button>
  );
}