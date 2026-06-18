"use client";

import { useState } from "react";
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
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isWishlisted ? `Remove ${productName} from wishlist` : `Add ${productName} to wishlist`}
      className={`flex items-center justify-center transition-opacity hover:opacity-70 ${className}`}
    >
      <HeartIcon filled={isWishlisted} />
    </button>
  );
}