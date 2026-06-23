"use client";

import { useState } from "react";
import {
  CareGuideIcon,
  CheckIcon,
  CopyLinkIcon,
  FreeShippingIcon,
  GooglePayIcon,
  InfoIcon,
  KokoIcon,
  MintpayIcon,
  RulerIcon,
  WhatsAppIcon,
} from "@/components/icons/UtilityIcons";
import PriceDisplay from "@/components/ui/PriceDisplay";
import WishlistButton from "@/components/wishlist/WishlistButton";
import type { Product } from "@/types";

const sizeOrder = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

type ProductPriceProps = {
  price: number;
  compareAtPrice?: number;
};

export function ProductPrice({ price, compareAtPrice }: ProductPriceProps) {
  const isOnSale = !!compareAtPrice;

  return (
    <div className="flex items-center gap-3">
      {isOnSale && (
        <span className="text-[16px] font-normal text-neutral-400 line-through md:text-[18px]">
          <PriceDisplay amount={compareAtPrice} />
        </span>
      )}
      <span className={`text-[20px] font-bold md:text-[24px] ${isOnSale ? "text-foa-red" : "text-black"}`}>
        <PriceDisplay amount={price} />
      </span>
    </div>
  );
}

export function ProductPaymentOptions({ price }: { price: number }) {
  return (
    <div className="space-y-2">
      {/* Row 1: 3 X price or 4.5% Cashback with [mintpay badge] ℹ */}
      <p className="flex items-center flex-wrap gap-1.5 text-[12px] leading-relaxed text-[#8e8e8e]">
        <span>
          3 X{" "}
          <strong className="font-semibold text-black">
            <PriceDisplay amount={price} installment />
          </strong>
        </span>
        <span>or</span>
        <strong className="font-semibold text-black">4.5% Cashback</strong>
        <span>with</span>
        <a
          href="https://mintpay.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center transition-opacity hover:opacity-80"
          aria-label="Mintpay"
        >
          <MintpayIcon />
        </a>
        <InfoIcon className="shrink-0 cursor-pointer" />
      </p>

      {/* Row 2: or pay in 3 x price with [KOKO gradient logo] ℹ */}
      <p className="flex items-center flex-wrap gap-1.5 text-[12px] leading-relaxed text-[#8e8e8e]">
        <span>
          or pay in 3 x{" "}
          <strong className="font-semibold text-black">
            <PriceDisplay amount={price} installment />
          </strong>
        </span>
        <span>with</span>
        <a
          href="https://koko.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center transition-opacity hover:opacity-80"
          aria-label="KOKO"
        >
          <KokoIcon />
        </a>
        <InfoIcon className="shrink-0 cursor-pointer" />
      </p>
    </div>
  );
}

type SizeSelectorProps = {
  sizes?: string[];
  selectedSize: string | null;
  onSizeChange: (size: string) => void;
  onOpenSizeChart: () => void;
};

export function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
  onOpenSizeChart,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">Size</span>
        <button
          type="button"
          onClick={onOpenSizeChart}
          className="text-[11px] uppercase tracking-[0.04em] text-neutral-500 underline underline-offset-2 hover:text-black"
        >
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {(sizes || ["XS", "S", "M", "L", "XL", "2XL"])
          .sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b))
          .map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => onSizeChange(size)}
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
  );
}

type ColorSelectorProps = {
  product: Product;
  selectedColor: number;
  colorLabel?: string;
  onColorChange: (index: number) => void;
};

export function ColorSelector({
  product,
  selectedColor,
  colorLabel,
  onColorChange,
}: ColorSelectorProps) {
  if (!product.colors?.length) return null;

  return (
    <div className="flex flex-col gap-3">
      <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">
        Color:{" "}
        <span className="font-normal normal-case tracking-normal text-neutral-600">{colorLabel}</span>
      </span>
      <div className="flex items-center gap-2">
        {product.colors.map((color, index) => {
          const isSelected = selectedColor === index;
          return (
            <button
              key={`${product.id}-color-${index}`}
              type="button"
              onClick={() => onColorChange(index)}
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
  );
}

type ProductActionsProps = {
  product: Product;
  activeImage: string;
  addedToCart: boolean;
  onAddToCart: (qty: number) => void;
  onOpenSizeChart: () => void;
};

export function ProductActions({
  product,
  activeImage,
  addedToCart,
  onAddToCart,
  onOpenSizeChart,
}: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Quantity + Add to Cart */}
      <div className="flex gap-3">
        {/* Quantity stepper */}
        <div className="flex items-center gap-0 rounded-full border border-neutral-300">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-[54px] w-12 items-center justify-center text-[18px] font-light text-black transition-colors hover:bg-neutral-50 rounded-l-full"
          >
            &minus;
          </button>
          <span className="min-w-[28px] text-center text-[14px] font-medium text-black">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-[54px] w-12 items-center justify-center text-[18px] font-light text-black transition-colors hover:bg-neutral-50 rounded-r-full"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => onAddToCart(quantity)}
          className={`flex-1 h-[54px] rounded-full text-[13px] font-bold uppercase tracking-[0.06em] transition-all border ${
            addedToCart
              ? "bg-[#4ca25b] border-[#4ca25b] text-white"
              : "bg-white border-black text-black hover:bg-neutral-50"
          }`}
        >
          {addedToCart ? (
            <span className="flex items-center justify-center gap-2">
              <CheckIcon />
              Added
            </span>
          ) : (
            "ADD TO CART"
          )}
        </button>
      </div>

      {/* Add / Remove Wishlist — full-width outline pill */}
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

      {/* Buy with Google Pay */}
      <button
        type="button"
        className="flex h-[54px] w-full items-center justify-center gap-1.5 rounded-full bg-black text-[14px] font-semibold text-white transition-colors hover:bg-neutral-800"
      >
        Buy with{" "}
        <GooglePayIcon />
        Pay
      </button>

      {/* More payment options */}
      <div className="text-center">
        <button
          type="button"
          className="text-[13px] text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          More payment options
        </button>
      </div>

      {/* Divider */}
      <hr className="border-neutral-200" />

      {/* Pickup available */}
      <div className="flex items-start gap-3 pt-1">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
          <path d="M3 9.5L7 13.5L15 5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <p className="text-[13px] font-medium text-black">Pickup available at F.O.A Zone</p>
          <p className="text-[12px] text-neutral-500">Usually ready in 5+ days</p>
          <button
            type="button"
            className="mt-1 text-[12px] text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            View store information
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-neutral-200" />

      {/* Free shipping */}
      <div className="flex items-center gap-3">
        <FreeShippingIcon className="shrink-0 text-black" />
        <p className="text-[13px] text-neutral-700">
          Free shipping for orders above{" "}
          <span className="font-medium">Rs.9999.00</span>
        </p>
      </div>

      {/* Divider */}
      <hr className="border-neutral-200" />

      {/* Care Guide */}
      <div>
        <button
          type="button"
          className="flex items-center gap-2 text-[13px] text-black underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          <CareGuideIcon className="shrink-0" />
          Care Guide
        </button>
      </div>

      {/* Share icons */}
      <div className="flex items-center gap-4">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="text-black transition-opacity hover:opacity-60"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '')}
          aria-label="Copy link"
          className="text-black transition-opacity hover:opacity-60"
        >
          <CopyLinkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function ProductDetails({
  product,
  onOpenSizeChart,
}: {
  product: Product;
  onOpenSizeChart: () => void;
}) {
  const [descOpen, setDescOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* SIZE CHART row */}
      <div className="border-t border-neutral-200">
        <button
          type="button"
          onClick={onOpenSizeChart}
          className="flex w-full items-center gap-2 py-4 text-left transition-opacity hover:opacity-70"
        >
          <RulerIcon className="shrink-0 text-black" />
          <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">
            Size Chart
          </span>
        </button>
      </div>

      {/* Description accordion */}
      <div className="border-t border-neutral-200">
        <button
          type="button"
          onClick={() => setDescOpen(!descOpen)}
          className="flex w-full items-center justify-between py-4 text-left"
        >
          <span className="text-[15px] font-normal text-black">Description</span>
          <span className="text-[22px] font-light text-black leading-none">
            {descOpen ? "\u2212" : "+"}
          </span>
        </button>
        {descOpen && (
          <div className="pb-5">
            {product.description && (
              <p className="text-[14px] leading-relaxed text-neutral-700">
                {product.description}
              </p>
            )}
            {product.material && (
              <p className="mt-3 text-[13px] text-neutral-500">
                <span className="font-semibold uppercase">Material:</span>{" "}
                {product.material}
              </p>
            )}
            {!product.description && !product.material && (
              <p className="text-[14px] text-neutral-500">No description available.</p>
            )}
          </div>
        )}
      </div>

      {/* Divider at bottom */}
      <div className="border-t border-neutral-200" />
    </div>
  );
}
