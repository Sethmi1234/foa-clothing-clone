"use client";

import { useState } from "react";
import { HeartIcon } from "@/components/icons/HeartIcon";
import PriceDisplay from "@/components/ui/PriceDisplay";
import type { Product } from "@/types";

type ProductInfoProps = {
  product: Product;
};

const sizeOrder = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const activeColor = product.colors?.[selectedColor];
  const installmentPrice = product.price / 3;

  return (
    <div className="flex flex-col gap-6">
      {/* Product Name */}
      <h1 className="text-[22px] font-bold uppercase leading-tight tracking-normal text-black md:text-[26px]">
        {product.name}
      </h1>

      {/* Price */}
      <div className="flex items-center gap-3">
        {product.compareAtPrice && (
          <span className="text-[16px] font-normal text-neutral-400 line-through md:text-[18px]">
            <PriceDisplay amount={product.compareAtPrice} />
          </span>
        )}
        <span className="text-[18px] font-bold text-black md:text-[20px]">
          Rs {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>

      {/* Installment info */}
      <p className="text-[13px] leading-relaxed text-[#8e8e8e]">
        3 X <strong className="font-semibold">Rs {installmentPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> or{" "}
        <strong className="font-semibold">4.5% Cashback</strong> with Mintpay
      </p>
      <p className="text-[13px] leading-relaxed text-[#8e8e8e]">
        or pay in 3 x <strong className="font-semibold">Rs {installmentPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> with Koko
      </p>

      {/* Size Selector */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">
            Size
          </span>
          <button
            type="button"
            className="text-[11px] uppercase tracking-[0.04em] text-neutral-500 underline hover:text-black"
          >
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {(product.sizes || ["XS", "S", "M", "L", "XL", "2XL"]).sort(
            (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
          ).map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`flex h-[42px] min-w-[52px] items-center justify-center border px-3 text-[12px] font-bold uppercase tracking-[0.04em] transition-colors ${
                  isSelected
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 bg-white text-black hover:border-black"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Swatches */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">
            Color: <span className="font-normal normal-case tracking-normal text-neutral-600">{activeColor?.hex === "#ffffff" ? "White" : activeColor?.hex === "#1a1a1a" ? "Black" : activeColor?.hex === "#1a2744" ? "Navy" : activeColor?.hex === "#2c3e50" ? "Blue" : activeColor?.hex === "#3d3d3d" ? "Dark Grey" : "Multi"}</span>
          </span>
          <div className="flex items-center gap-2">
            {product.colors.map((color, index) => {
              const isSelected = selectedColor === index;
              return (
                <button
                  key={`${product.id}-color-${index}`}
                  type="button"
                  onClick={() => {
                    setSelectedColor(index);
                    setSelectedSize(null);
                  }}
                  className={`relative h-8 w-8 shrink-0 rounded-full border-2 bg-clip-padding transition-opacity hover:opacity-80 ${
                    isSelected ? "border-black" : "border-neutral-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select color ${index + 1}`}
                >
                  {color.soldOut && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="h-px w-[120%] rotate-45 bg-neutral-400" />
                    </span>
                  )}
                  {isSelected && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Add to Cart Button */}
      <button
        type="button"
        className="h-[52px] w-full rounded-full bg-black text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800"
      >
        Add to Cart — Rs {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </button>

      {/* Wishlist */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[0.04em] text-black hover:opacity-70"
      >
        <HeartIcon />
        Add to Wishlist
      </button>

      {/* Description */}
      {product.description && (
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-[14px] leading-relaxed text-neutral-700">
            {product.description}
          </p>
        </div>
      )}

      {/* Material */}
      {product.material && (
        <p className="text-[13px] text-neutral-500">
          <span className="font-semibold uppercase">Material:</span> {product.material}
        </p>
      )}
    </div>
  );
}