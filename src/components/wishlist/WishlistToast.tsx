"use client";

import { useEffect, useRef } from "react";
import { useWishlist } from "@/context/WishlistContext";
import { HeartIcon } from "@/components/icons/HeartIcon";

export default function WishlistToast() {
  const { toasts, dismissToast } = useWishlist();

  return (
    <div
      aria-live="polite"
      aria-label="Wishlist notifications"
      className="pointer-events-none fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 flex-col items-center gap-3"
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          id={toast.id}
          productName={toast.productName}
          action={toast.action}
          onDismiss={dismissToast}
        />
      ))}
    </div>
  );
}

function ToastItem({
  id,
  productName,
  action,
  onDismiss,
}: {
  id: number;
  productName: string;
  action: "added" | "removed";
  onDismiss: (id: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Animate in
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.animate(
      [
        { opacity: 0, transform: "translateY(12px) scale(0.95)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      { duration: 250, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" }
    );
  }, []);

  return (
    <div
      ref={ref}
      role="status"
      className="pointer-events-auto flex items-center gap-3 rounded-none border border-black bg-white px-5 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      style={{ opacity: 0 }}
    >
      <HeartIcon filled={action === "added"} className="shrink-0 text-black" />
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
          {action === "added" ? "Added to Wishlist" : "Removed from Wishlist"}
        </span>
        <span className="mt-0.5 max-w-[200px] truncate text-[12px] text-[#666]">
          {productName}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        aria-label="Dismiss"
        className="ml-2 shrink-0 text-[#999] transition-colors hover:text-black"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
