"use client";

import { useState } from "react";
import { HeartIcon } from "@/components/icons/HeartIcon";
import Accordion from "@/components/shared/Accordion";
import { eVoucherDenominations, eVoucherDescription } from "@/data/eVoucher";
import PriceDisplay from "@/components/ui/PriceDisplay";

export default function EVoucherDetails() {
  const [selectedDenom, setSelectedDenom] = useState(eVoucherDenominations[0]);
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);

  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-[28px] font-bold uppercase tracking-wide text-black md:text-[32px]">
        E - VOUCHER
      </h1>

      <p className="mb-4 text-[22px] font-bold text-black">
        <PriceDisplay amount={selectedDenom.amount} />
      </p>

      <p className="mb-1 text-[12px] leading-relaxed text-[#8e8e8e]">
        3 X{" "}
        <strong className="font-semibold">
          <PriceDisplay amount={selectedDenom.amount} installment />
        </strong>{" "}
        or <strong className="font-semibold">4.5% Cashback</strong> with Mintpay
      </p>
      <p className="mb-6 text-[12px] leading-relaxed text-[#8e8e8e]">
        or pay in 3 x{" "}
        <strong className="font-semibold">
          <PriceDisplay amount={selectedDenom.amount} installment />
        </strong>{" "}
        with Koko
      </p>

      <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.06em] text-black">
        Denominations
      </p>
      <div className="mb-8 flex flex-wrap gap-2">
        {eVoucherDenominations.map((denom) => (
          <button
            key={denom.id}
            type="button"
            onClick={() => setSelectedDenom(denom)}
            className={`rounded-full border px-4 py-2 text-[12px] transition-colors ${
              selectedDenom.id === denom.id
                ? "border-black bg-black text-white"
                : "border-neutral-300 bg-white text-black hover:border-black"
            }`}
          >
            {denom.label}
          </button>
        ))}
      </div>

      <div className="mb-6 border-t border-neutral-200 pt-4">
        <button
          type="button"
          className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.06em] text-black"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 14V4L8 1L14 4V14H2Z" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          Size Chart
        </button>
      </div>

      <Accordion
        items={[{ id: "description", title: "Description", content: eVoucherDescription }]}
        className="mb-6"
      />

      <label className="mb-6 flex cursor-pointer items-center gap-3 text-[14px] text-black">
        <input
          type="checkbox"
          checked={isGift}
          onChange={(e) => setIsGift(e.target.checked)}
          className="h-4 w-4 accent-black"
        />
        I want to send this as a gift
      </label>

      <div className="mb-6 flex items-center gap-4">
        <span className="text-[12px] font-bold uppercase tracking-[0.06em]">Quantity</span>
        <div className="flex items-center rounded-full border border-neutral-300">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-lg"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="min-w-[32px] text-center text-[14px]">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-lg"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="mb-3 h-[52px] w-full rounded-full border border-black bg-white text-[13px] font-bold uppercase tracking-[0.06em] text-black transition-colors hover:bg-neutral-50"
      >
        Add to Cart
      </button>
      <button
        type="button"
        className="mb-8 flex h-[52px] w-full items-center justify-center gap-2 rounded-full border border-black bg-white text-[13px] font-bold uppercase tracking-[0.06em] text-black transition-colors hover:bg-neutral-50"
      >
        <HeartIcon className="h-4 w-4" />
        Add to Wishlist
      </button>

      <div className="space-y-3 border-t border-neutral-200 pt-6 text-[13px] text-neutral-600">
        <p className="flex items-center gap-2">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path
              d="M1 4H12L15 7V11H3C1.9 11 1 10.1 1 9V4Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle cx="5" cy="11" r="1.5" fill="currentColor" />
            <circle cx="12" cy="11" r="1.5" fill="currentColor" />
          </svg>
          Free shipping for orders above Rs.9999.00
        </p>
        <button type="button" className="flex items-center gap-2 hover:text-black">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5 7H11M5 10H9" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          Care Guide
        </button>
        <div className="flex gap-4 pt-2">
          <button type="button" aria-label="Share on WhatsApp" className="hover:opacity-70">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M9 1C4.58 1 1 4.58 1 9c0 1.57.46 3.03 1.26 4.26L1 17l3.87-1.01A7.94 7.94 0 009 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z" />
            </svg>
          </button>
          <button type="button" aria-label="Copy link" className="hover:opacity-70">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 10L11 6M8 5h3v3M6 13H4V4h9v2" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
