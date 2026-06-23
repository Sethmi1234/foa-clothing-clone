"use client";

import { useState } from "react";
import { HeartIcon } from "@/components/icons/HeartIcon";
import {
  CareGuideIcon,
  CopyLinkIcon,
  DeliveryTruckIcon,
  SizeChartIcon,
  WhatsAppIcon,
} from "@/components/icons/UtilityIcons";
import Accordion from "@/components/shared/Accordion";
import { eVoucherDenominations, eVoucherDescription } from "@/data/eVoucher";
import { useCart } from "@/context/CartContext";
import PriceDisplay from "@/components/ui/PriceDisplay";

export default function EVoucherDetails() {
  const [selectedDenom, setSelectedDenom] = useState(eVoucherDenominations[0]);
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);
  const { addItem } = useCart();

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
          <SizeChartIcon />
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
        onClick={() =>
          addItem({
            productId: `e-voucher-${selectedDenom.amount}`,
            name: "E - VOUCHER",
            image: "https://foaclothing.com/cdn/shop/files/FOA_Logos-03.png?v=1684393386&width=301",
            price: selectedDenom.amount,
            href: "/collections/e-voucher",
            quantity,
          })
        }
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
          <DeliveryTruckIcon />
          Free shipping for orders above Rs.9999.00
        </p>
        <button type="button" className="flex items-center gap-2 hover:text-black">
          <CareGuideIcon />
          Care Guide
        </button>
        <div className="flex gap-4 pt-2">
          <button type="button" aria-label="Share on WhatsApp" className="hover:opacity-70">
            <WhatsAppIcon />
          </button>
          <button type="button" aria-label="Copy link" className="hover:opacity-70">
            <CopyLinkIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
