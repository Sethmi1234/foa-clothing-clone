"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MintpayIcon, KokoIcon, InfoIcon } from "@/components/icons/UtilityIcons";
import { useCurrency } from "@/context/CurrencyContext";
import type { Product } from "@/types";

import { useCart } from "@/context/CartContext";

type StickyProductCardProps = {
  product: Product;
  reviewsSectionId?: string;
};

export default function StickyProductCard({
  product,
  reviewsSectionId = "customer-reviews",
}: StickyProductCardProps) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  // Default to second size (S) if available, otherwise first
  const defaultSizeIndex = product.sizes && product.sizes.length > 1 ? 1 : 0;
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(defaultSizeIndex);
  
  const { currency } = useCurrency();
  const { addItem, isDrawerOpen } = useCart();

  const price = (product.price * currency.rate).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const installment = ((product.price * currency.rate) / 3).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    const reviewsEl = document.getElementById(reviewsSectionId);
    if (!reviewsEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(reviewsEl);
    return () => observer.disconnect();
  }, [reviewsSectionId]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-[300px] rounded-[4px] border border-neutral-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-start gap-3 p-3">
        {/* Product image */}
        <div className="relative h-[80px] w-[65px] shrink-0 overflow-hidden bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-top"
            sizes="65px"
          />
        </div>

        {/* Product info */}
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-bold uppercase tracking-wide text-black leading-tight">
            {product.name}
          </p>

          <p className="mt-1 text-[14px] font-bold text-black">
            {currency.symbol} {price}
          </p>

          {/* Mintpay row */}
          <p className="mt-1 flex flex-wrap items-center gap-1 text-[10px] text-neutral-500 leading-relaxed">
            <span>
              3 X <strong className="text-black">{currency.symbol} {installment}</strong>
            </span>
            <span>or 4.5% Cashback with</span>
            <a
              href="https://mintpay.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <MintpayIcon />
            </a>
            <InfoIcon className="shrink-0" />
          </p>

          {/* Koko row */}
          <p className="flex flex-wrap items-center gap-1 text-[10px] text-neutral-500 leading-relaxed">
            <span>
              or pay in 3 x <strong className="text-black">{currency.symbol} {installment}</strong> with
            </span>
            <a
              href="https://koko.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <KokoIcon />
            </a>
            <InfoIcon className="shrink-0" />
          </p>
        </div>

        {/* + button */}
          <button
          type="button"
          aria-label={expanded ? "Close quick add" : "Quick add to cart"}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-[18px] font-light text-black transition-colors hover:border-black hover:bg-neutral-50"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "−" : "+"}
        </button>
      </div>

      {/* Expanded Quick Add Menu */}
      {expanded && (
        <div className="border-t border-neutral-200 bg-white p-4">
          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 text-[11px] text-black">
                <span className="font-bold">COLOR:</span> {product.colors[selectedColorIndex]?.name || `${product.name} 0${selectedColorIndex + 1}`}
              </p>
              <div className="grid grid-cols-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color.hex || i}
                    type="button"
                    onClick={() => setSelectedColorIndex(i)}
                    className={`border border-neutral-200 px-2 py-3 text-center text-[11px] text-black transition-colors hover:bg-neutral-50 ${
                      selectedColorIndex === i ? "border-black font-medium" : ""
                    }`}
                  >
                    {color.name || `${product.name} 0${i + 1}`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-5">
              <p className="mb-2 text-[11px] text-black">
                <span className="font-bold">SIZE:</span> {product.sizes[selectedSizeIndex]}
              </p>
              <div className="flex flex-wrap border border-neutral-200">
                {product.sizes.map((size, i) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSizeIndex(i)}
                    className={`flex h-10 flex-1 items-center justify-center border-r border-neutral-200 text-[12px] text-black transition-colors last:border-r-0 hover:bg-neutral-50 ${
                      selectedSizeIndex === i ? "border border-black font-medium" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            type="button"
            className="w-full rounded-full border border-black bg-white py-3.5 text-[12px] font-bold uppercase tracking-[0.06em] text-black transition-colors hover:bg-neutral-50"
            onClick={() => {
              addItem({
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.colors?.[selectedColorIndex]?.image || product.image,
                href: product.href,
                color: product.colors?.[selectedColorIndex]?.name,
                size: product.sizes?.[selectedSizeIndex],
                quantity: 1,
              });
              setExpanded(false);
            }}
          >
            ADD TO CART
          </button>
        </div>
      )}
    </div>
  );
}
