"use client";

import Link from "next/link";

type CartTermsCheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

export default function CartTermsCheckbox({
  id,
  checked,
  onChange,
  className = "",
}: CartTermsCheckboxProps) {
  return (
    <label className={`flex items-start gap-2 text-left text-[13px] leading-relaxed text-[#151515] ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-[#151515]"
        required
      />
      <span>
        I agree with the{" "}
        <Link href="/policies/terms-of-service" target="_blank" className="underline underline-offset-2">
          terms and conditions
        </Link>
      </span>
    </label>
  );
}
