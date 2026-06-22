"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import WishlistButton from "@/components/wishlist/WishlistButton";
import PriceDisplay from "@/components/ui/PriceDisplay";
import SizeChartModal from "@/components/ui/SizeChartModal";
import { getActiveColorImage, getColorLabel } from "@/lib/productImages";
import type { Product } from "@/types";

type ProductInfoProps = {
  product: Product;
  selectedColor: number;
  onColorChange: (index: number) => void;
};

const sizeOrder = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

function KokoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 20" className={className} aria-hidden="true">
      <text x="0" y="15" fontSize="13" fontWeight="700" fill="currentColor">Koko</text>
    </svg>
  );
}

function MintpayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 20" className={className} aria-hidden="true">
      <text x="0" y="15" fontSize="11" fontWeight="700" fill="currentColor">mintpay</text>
    </svg>
  );
}

export default function ProductInfo({
  product,
  selectedColor,
  onColorChange,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const activeColor = product.colors?.[selectedColor];
  const activeImage = getActiveColorImage(product, selectedColor);
  const colorLabel = getColorLabel(activeColor?.hex);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      image: activeImage,
      price: product.price,
      href: product.href,
      size: selectedSize ?? undefined,
      color: colorLabel,
      quantity: 1,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const isOnSale = !!product.compareAtPrice;

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Product Title */}
        <div>
          <h1 className="text-[24px] font-bold uppercase leading-tight tracking-normal text-black md:text-[28px]">
            {product.name}
          </h1>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          {isOnSale && (
            <span className="text-[16px] font-normal text-neutral-400 line-through md:text-[18px]">
              <PriceDisplay amount={product.compareAtPrice!} />
            </span>
          )}
          <span className={`text-[20px] font-bold md:text-[24px] ${isOnSale ? "text-foa-red" : "text-black"}`}>
            <PriceDisplay amount={product.price} />
          </span>
        </div>

        {/* Payment Info */}
        <div className="space-y-1.5">
          <p className="flex items-center gap-1.5 text-[12px] leading-relaxed text-[#8e8e8e]">
            <span>
              3 X{" "}
              <strong className="font-semibold text-black">
                <PriceDisplay amount={product.price} installment />
              </strong>
            </span>
            <span className="mx-0.5">or</span>
            <span>
              <strong className="font-semibold text-black">4.5% Cashback</strong>
            </span>
            <span>with</span>
            <a
              href="https://mintpay.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#151515] underline transition-opacity hover:opacity-70"
            >
              <MintpayIcon className="h-4" />
            </a>
          </p>
          <p className="flex items-center gap-1.5 text-[12px] leading-relaxed text-[#8e8e8e]">
            <span>
              or pay in 3 x{" "}
              <strong className="font-semibold text-black">
                <PriceDisplay amount={product.price} installment />
              </strong>
            </span>
            <span>with</span>
            <a
              href="https://koko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#151515] underline transition-opacity hover:opacity-70"
            >
              <KokoIcon className="h-4" />
            </a>
            <span className="mx-0.5">/</span>
            <a
              href="https://initpay.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded border border-[#e2e2e2] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#151515] transition-opacity hover:opacity-70"
            >
              InitPay
            </a>
          </p>
        </div>

        {/* Size Selector */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">
              Size
            </span>
            <button
              type="button"
              onClick={() => setShowSizeChart(true)}
              className="text-[11px] uppercase tracking-[0.04em] text-neutral-500 underline underline-offset-2 hover:text-black"
            >
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {(product.sizes || ["XS", "S", "M", "L", "XL", "2XL"])
              .sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b))
              .map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-[46px] min-w-[56px] items-center justify-center border px-4 text-[13px] font-bold uppercase tracking-[0.04em] transition-colors ${
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

        {/* Color Selector */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">
              Color:{" "}
              <span className="font-normal normal-case tracking-normal text-neutral-600">
                {colorLabel}
              </span>
            </span>
            <div className="flex items-center gap-2">
              {product.colors.map((color, index) => {
                const isSelected = selectedColor === index;
                return (
                  <button
                    key={`${product.id}-color-${index}`}
                    type="button"
                    onClick={() => {
                      onColorChange(index);
                      setSelectedSize(null);
                    }}
                    className={`relative h-8 w-8 shrink-0 rounded-full border-2 bg-clip-padding transition-opacity hover:opacity-80 ${
                      isSelected ? "border-black" : "border-neutral-300"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select color ${colorLabel ?? index + 1}`}
                    aria-pressed={isSelected}
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
          onClick={handleAddToCart}
          className={`h-[54px] w-full rounded-full text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-all ${
            addedToCart
              ? "bg-[#4ca25b]"
              : "bg-black hover:bg-neutral-800"
          }`}
        >
          {addedToCart ? (
            <span className="flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13.5 4L6.5 11L3 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Added
            </span>
          ) : (
            <>Add to Cart — <PriceDisplay amount={product.price} /></>
          )}
        </button>

        {/* Wishlist Button */}
        <WishlistButton
          product={{
            id: product.id,
            name: product.name,
            image: activeImage,
            price: product.price,
            href: product.href,
          }}
          variant="page"
        />

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

      {/* Size Chart Modal */}
      <SizeChartModal isOpen={showSizeChart} onClose={() => setShowSizeChart(false)} />
    </>
  );
}