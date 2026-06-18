"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeartIcon } from "@/components/icons/HeartIcon";
import PriceDisplay from "@/components/ui/PriceDisplay";
import type { Product } from "@/types";

type CollectionProductCardProps = {
  product: Product;
};

export default function CollectionProductCard({ product }: CollectionProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeColor = product.colors?.[selectedColor];
  const displayImage = activeColor?.image ?? product.image;
  const displayHover = activeColor?.hoverImage ?? product.hoverImage;
  const showHoverImage = isHovered && displayHover && displayHover !== displayImage;

  return (
    <article className="flex flex-col">
      <div
        className="relative mb-4 aspect-[4/5] overflow-hidden bg-[#f3f3f3]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={product.href} className="relative block h-full w-full">
          <Image
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

        {product.onSale && product.saleLabel && (
          <div className="absolute left-0 top-0 z-10 h-20 w-20 overflow-hidden">
            <span className="absolute left-[-28px] top-[14px] w-[110px] -rotate-45 bg-black py-1 text-center text-[9px] font-semibold uppercase tracking-wider text-white">
              {product.saleLabel}
            </span>
          </div>
        )}

        {product.onSale && (
          <span className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-[8px] font-semibold uppercase leading-tight text-white">
            Sale
          </span>
        )}

        <button
          type="button"
          className={`absolute right-3 z-10 text-neutral-300 transition-colors hover:text-neutral-500 ${
            product.onSale ? "top-14" : "top-3"
          }`}
          aria-label="Add to wishlist"
        >
          <HeartIcon />
        </button>

        {/* Quick View overlay on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-20 flex h-[48px] items-center justify-center bg-black/90 transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-white">
            Quick View
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href={product.href}
          className="text-[14px] font-bold uppercase leading-tight tracking-normal text-black hover:opacity-70"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-2 text-[16px] font-bold leading-tight">
          {product.compareAtPrice && (
            <span className="font-normal text-neutral-400 line-through">
              <PriceDisplay amount={product.compareAtPrice} />
            </span>
          )}
          <span><PriceDisplay amount={product.price} /></span>
        </div>

        <p className="text-[12px] leading-relaxed text-[#8e8e8e]">
          3 X{" "}
          <strong className="font-semibold text-[#8e8e8e]">
            <PriceDisplay amount={product.price} installment />
          </strong>{" "}
          or <strong className="font-semibold text-[#8e8e8e]">4.5% Cashback</strong> with Mintpay
        </p>
        <p className="text-[12px] leading-relaxed text-[#8e8e8e]">
          or pay in 3 x{" "}
          <strong className="font-semibold text-[#8e8e8e]">
            <PriceDisplay amount={product.price} installment />
          </strong>{" "}
          with Koko
        </p>

        {product.colors && product.colors.length > 0 && (
          <div className="mt-1 flex items-center gap-2">
            {product.colors.map((color, index) => (
              <button
                key={`${product.id}-color-${index}`}
                type="button"
                onClick={() => {
                  setSelectedColor(index);
                  setIsHovered(false);
                }}
                className={`relative h-7 w-7 shrink-0 border-2 bg-clip-padding transition-opacity hover:opacity-80 ${
                  selectedColor === index ? "border-black" : "border-neutral-300"
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${index + 1}`}
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
          className="mt-3 h-[48px] w-full rounded-full bg-black text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
