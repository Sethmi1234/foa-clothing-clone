"use client";

import { MinusIcon } from "@/components/icons/MinusIcon";
import { PlusIcon } from "@/components/icons/PlusIcon";

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
  label: string;
  compact?: boolean;
};

export default function QuantitySelector({
  value,
  onChange,
  label,
  compact = false,
}: QuantitySelectorProps) {
  return (
    <div
      className={`inline-flex items-center overflow-hidden border border-[#e2e2e2] ${
        compact ? "h-[40px] rounded-full" : "h-[40px]"
      }`}
    >
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        className="flex h-full w-9 items-center justify-center text-[#151515] transition-colors hover:bg-neutral-50"
        aria-label={`Decrease quantity for ${label}`}
      >
        <MinusIcon />
      </button>
      <input
        type="number"
        min={1}
        step={1}
        value={value}
        onChange={(event) => {
          const nextValue = Number.parseInt(event.target.value, 10);
          if (!Number.isNaN(nextValue)) onChange(nextValue);
        }}
        className={`h-full w-10 bg-white text-center text-[13px] font-semibold text-[#151515] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
          compact ? "" : "border-x border-[#e2e2e2]"
        }`}
        aria-label={`Quantity for ${label}`}
      />
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="flex h-full w-9 items-center justify-center text-[#151515] transition-colors hover:bg-neutral-50"
        aria-label={`Increase quantity for ${label}`}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
