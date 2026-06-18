"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import WishlistButton from "@/components/wishlist/WishlistButton";
import PriceDisplay from "@/components/ui/PriceDisplay";
import QuickViewModal from "@/components/ui/QuickViewModal";
import { fadeIn } from "@/lib/animations";
import type { Product } from "@/types";

type ProductCardProps = {
  product: Product;
  showDetails?: boolean;
};

export default function ProductCard({ product, showDetails = true }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addItem } = useCart();

  const activeColor = product.colors?.[selectedColor];
  const displayImage = activeColor?.image ?? product.image;
  const displayHover = activeColor?.hoverImage ?? product.hoverImage;
  const hasColorVariants = Boolean(product.colors && product.colors.length > 0);
  const showHoverImage = isHovered && displayHover && displayHover !== displayImage;

  return (
    <motion.article
      variants={fadeIn}
      className="product-card group flex min-w-[260px] flex-col md:min-w-0"
    >
      <div
        className="relative mb-5 aspect-[4/5] overflow-hidden bg-[#f3f3f3]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={product.href} className="relative block h-full w-full">
          <Image
            key={`${product.id}-${selectedColor}-primary`}
            src={displayImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover object-center transition-opacity duration-300 ${
              showHoverImage ? "opacity-0" : "opacity-100"
            }`}
          />
          {displayHover && displayHover !== displayImage && (
            <Image
              key={`${product.id}-${selectedColor}-hover`}
              src={displayHover}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={`absolute inset-0 object-cover object-center transition-opacity duration-300 ${
                showHoverImage ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </Link>

        <WishlistButton
          productId={product.id}
          productName={product.name}
          variant="card"
          className="absolute right-3 top-3 z-10"
        />

        {product.onSale && product.saleLabel && (
          <span className="absolute left-0 top-3 bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            {product.saleLabel}
          </span>
        )}

        {/* Quick View overlay on hover */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsQuickViewOpen(true);
          }}
          className={`absolute bottom-0 left-0 right-0 flex h-[52px] items-center justify-center bg-black/90 transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
          aria-label={`Quick view ${product.name}`}
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-white">
            Quick View
          </span>
        </button>
      </div>

      {showDetails && (
        <div className="flex flex-col gap-2">
          <Link
            href={product.href}
            className="text-[15px] font-bold uppercase leading-tight tracking-normal text-black hover:opacity-70"
          >
            {product.name}
          </Link>

          <div className="flex items-center gap-2 text-[17px] font-bold leading-tight">
            {product.compareAtPrice && (
              <span className="font-normal text-neutral-400 line-through">
                <PriceDisplay amount={product.compareAtPrice} />
              </span>
            )}
            <span><PriceDisplay amount={product.price} /></span>
          </div>

          <p className="text-[13px] leading-relaxed text-[#8e8e8e]">
            3 X <strong className="font-semibold text-[#8e8e8e]"><PriceDisplay amount={product.price} installment /></strong> or{" "}
            <strong className="font-semibold text-[#8e8e8e]">4.5% Cashback</strong> with Mintpay
          </p>
          <p className="text-[13px] leading-relaxed text-[#8e8e8e]">
            or pay in 3 x <strong className="font-semibold text-[#8e8e8e]"><PriceDisplay amount={product.price} installment /></strong> with Koko
          </p>

          {hasColorVariants && (
            <div className="mt-2 flex items-center gap-2">
              {product.colors!.map((color, index) => (
                <button
                  key={`${product.id}-color-${index}`}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColor(index);
                    setIsHovered(false);
                  }}
                  className={`relative h-7 w-7 shrink-0 border-2 border-black bg-clip-padding transition-opacity hover:opacity-80 ${
                    selectedColor === index ? "ring-1 ring-black ring-offset-1" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${product.name} color ${index + 1}`}
                  aria-pressed={selectedColor === index}
                >
                  {color.soldOut && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="h-px w-full rotate-45 bg-red-600" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() =>
              addItem({
                productId: product.id,
                name: product.name,
                image: displayImage,
                price: product.price,
                href: product.href,
                quantity: 1,
              })
            }
            className="mt-4 h-[52px] w-full rounded-full bg-black text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800"
          >
            Add to Cart
          </button>
        </div>
      )}

      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </motion.article>
  );
}