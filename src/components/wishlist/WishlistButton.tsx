"use client";

import { useWishlist, type WishlistItem } from "@/context/WishlistContext";
import { HeartIcon } from "@/components/icons/HeartIcon";

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

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);
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
        className={`flex items-center gap-2 transition-opacity hover:opacity-70 ${className}`}
      >
        <HeartIcon filled={isWishlisted} className="text-black" />
        <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-black">
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
  );
}
