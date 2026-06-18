"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { currencies } from "@/data/currencies";
import { useCurrency } from "@/context/CurrencyContext";

type CurrencySelectorProps = {
  variant?: "floating" | "footer";
};

export default function CurrencySelector({ variant = "floating" }: CurrencySelectorProps) {
  const [open, setOpen] = useState(false);
  const { currency: selected, setCurrency: setSelected } = useCurrency();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buttonClass =
    variant === "floating"
      ? "rounded border border-neutral-300 bg-white px-3 py-2 text-[11px] text-black shadow-sm"
      : "rounded border border-neutral-600 bg-white px-3 py-1.5 text-[11px] text-black";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 ${buttonClass}`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {selected.label}
        <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute bottom-full left-0 z-50 mb-1 max-h-60 w-44 overflow-y-auto border bg-white shadow-lg ${
            variant === "footer" ? "border-neutral-700" : "border-neutral-200"
          }`}
        >
          {currencies.map((currency) => (
            <li key={currency.code} role="option" aria-selected={selected.code === currency.code}>
              <button
                type="button"
                onClick={() => {
                  setSelected(currency);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-[11px] transition-colors hover:bg-neutral-100 ${
                  selected.code === currency.code ? "bg-neutral-50 font-medium" : ""
                }`}
              >
                {currency.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
