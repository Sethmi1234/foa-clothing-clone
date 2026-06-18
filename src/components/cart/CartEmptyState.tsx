"use client";

import Link from "next/link";
import { CartEmptyIcon } from "@/components/icons/CartEmptyIcon";

type CartEmptyStateProps = {
  variant?: "drawer" | "page";
};

export default function CartEmptyState({ variant = "drawer" }: CartEmptyStateProps) {
  const isPage = variant === "page";

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        isPage ? "px-4 py-16 md:py-[100px]" : "h-full px-6 py-16"
      }`}
    >
      <CartEmptyIcon className="mb-6 text-[#151515]" />
      <p className="mb-6 text-[14px] text-[#151515]">
        {isPage ? "Ready to find your new favorite products?" : "Your cart is currently empty."}
      </p>
      {isPage ? (
        <>
          <h1 className="sr-only">Your cart is empty</h1>
          <Link
            href="/"
            className="inline-flex h-[48px] min-w-[180px] items-center justify-center rounded-full bg-[#151515] px-8 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800"
          >
            Continue shopping
          </Link>
        </>
      ) : (
        <Link
          href="/collections/all"
          className="inline-flex h-[48px] min-w-[180px] items-center justify-center rounded-full bg-[#151515] px-8 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800"
        >
          Start Shopping
        </Link>
      )}
    </div>
  );
}
