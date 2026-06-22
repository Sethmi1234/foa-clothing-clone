"use client";

import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { TrashIcon } from "@/components/icons/TrashIcon";
import QuantitySelector from "@/components/cart/QuantitySelector";
import { formatCartPrice } from "@/lib/cart";
import type { CartItem } from "@/types";

type CartLineItemProps = {
  item: CartItem;
  variant?: "drawer" | "page";
  onQuantityChange: (lineId: string, quantity: number) => void;
  onRemove: (lineId: string) => void;
};

function getVariantLabel(item: CartItem): string | null {
  const parts = [item.color, item.size].filter(Boolean);
  return parts.length > 0 ? parts.join(", ") : null;
}

export default function CartLineItem({
  item,
  variant = "drawer",
  onQuantityChange,
  onRemove,
}: CartLineItemProps) {
  const variantLabel = getVariantLabel(item);
  const lineTotal = item.price * item.quantity;

  if (variant === "drawer") {
    return (
      <div className="grid grid-cols-[88px_1fr_auto] gap-4 border-b border-[#e2e2e2] py-5 last:border-b-0">
        <div className="relative aspect-[2/3] overflow-hidden bg-[#f3f3f3]">
          <SafeImage src={item.image} alt={item.name} fill sizes="88px" className="object-cover object-center" />
        </div>

        <div className="min-w-0">
          <Link
            href={item.href}
            className="mb-1 block text-[13px] font-semibold uppercase leading-snug text-[#151515] hover:opacity-70"
          >
            {item.name}
          </Link>
          <p className="mb-3 text-[13px] font-semibold text-[#151515]">{formatCartPrice(item.price)}</p>
          {variantLabel && (
            <p className="mb-3 text-[12px] uppercase tracking-[0.02em] text-neutral-500">{variantLabel}</p>
          )}
          <div className="flex items-center gap-3">
            <QuantitySelector
              value={item.quantity}
              onChange={(quantity) => onQuantityChange(item.lineId, quantity)}
              label={item.name}
              compact
            />
            <button
              type="button"
              onClick={() => onRemove(item.lineId)}
              className="text-[#e93636] transition-opacity hover:opacity-70"
              aria-label={`Remove ${item.name}`}
            >
              <TrashIcon />
            </button>
          </div>
        </div>

        <div className="pt-1 text-right text-[13px] font-semibold text-[#151515]">
          {formatCartPrice(lineTotal)}
        </div>
      </div>
    );
  }

  return (
    <tr className="border-b border-[#e2e2e2]">
      <td className="py-6 pr-4 align-top">
        <div className="flex gap-4">
          <div className="relative h-[120px] w-[84px] shrink-0 overflow-hidden bg-[#f3f3f3]">
            <SafeImage src={item.image} alt={item.name} fill sizes="84px" className="object-cover object-center" />
          </div>
          <div className="min-w-0">
            <Link
              href={item.href}
              className="mb-2 block text-[13px] font-semibold uppercase leading-snug text-[#151515] hover:opacity-70"
            >
              {item.name}
            </Link>
            {variantLabel && (
              <div className="mb-3 text-[12px] leading-relaxed text-neutral-500">
                {item.color && (
                  <p>
                    <span className="font-medium">Color</span>: {item.color}
                  </p>
                )}
                {item.size && (
                  <p>
                    <span className="font-medium">Size</span>: {item.size}
                  </p>
                )}
              </div>
            )}
            <div className="flex items-center gap-3 md:hidden">
              <QuantitySelector
                value={item.quantity}
                onChange={(quantity) => onQuantityChange(item.lineId, quantity)}
                label={item.name}
                compact
              />
              <button
                type="button"
                onClick={() => onRemove(item.lineId)}
                className="text-[#e93636] transition-opacity hover:opacity-70"
                aria-label={`Remove ${item.name}`}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="hidden py-6 align-top md:table-cell">
        <div className="flex items-center gap-3">
          <QuantitySelector
            value={item.quantity}
            onChange={(quantity) => onQuantityChange(item.lineId, quantity)}
            label={item.name}
          />
          <button
            type="button"
            onClick={() => onRemove(item.lineId)}
            className="text-[#e93636] transition-opacity hover:opacity-70"
            aria-label={`Remove ${item.name}`}
          >
            <TrashIcon />
          </button>
        </div>
      </td>
      <td className="py-6 pl-4 text-right align-top text-[13px] font-semibold text-[#151515]">
        {formatCartPrice(lineTotal)}
      </td>
    </tr>
  );
}
