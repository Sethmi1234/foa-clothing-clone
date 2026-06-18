"use client";

import Image from "next/image";
import PriceDisplay from "@/components/ui/PriceDisplay";
import { shopImage } from "@/lib/images";

const thumbnail = shopImage("FOAblack-logo.png?v=1684393386", 120);

export default function EVoucherStickyBar() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden w-[340px] border border-neutral-200 bg-white p-4 shadow-lg md:block">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-black">
          <Image src={thumbnail} alt="E-Voucher" fill className="object-contain p-2" sizes="56px" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-bold uppercase text-black">E - VOUCHER</p>
          <p className="text-[14px] font-bold text-black"><PriceDisplay amount={1000} /></p>
          <p className="truncate text-[10px] text-[#8e8e8e]">
            3 X <PriceDisplay amount={1000} installment /> with Mintpay
          </p>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center text-2xl text-black"
          aria-label="Add to cart"
        >
          +
        </button>
      </div>
    </div>
  );
}
