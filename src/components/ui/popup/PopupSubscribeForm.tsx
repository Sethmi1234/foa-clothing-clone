import type { FormEvent } from "react";
import { EmailIcon } from "@/components/icons/UtilityIcons";

type PopupSubscribeFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function PopupSubscribeForm({ onSubmit }: PopupSubscribeFormProps) {
  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-[390px] flex-col gap-4">
      <label className="flex h-[46px] items-center gap-3 rounded-[3px] border border-[#d9d9d9] bg-[#f6f6f6] px-4 text-left focus-within:border-[#111] md:h-[48px]">
        <EmailIcon className="text-[#5f5f5f]" />
        <input
          type="email"
          required
          placeholder="Email address"
          className="h-full min-w-0 flex-1 bg-transparent text-[14px] text-[#222] outline-none placeholder:text-[#9b9b9b]"
          aria-label="Email address"
        />
      </label>

      <label className="flex h-[46px] items-center gap-2 rounded-[3px] border border-[#d9d9d9] bg-[#f6f6f6] px-4 text-left focus-within:border-[#111] md:h-[48px]">
        <span className="text-[11px] font-bold text-[#333]" aria-hidden="true">
          LK
        </span>
        <span className="text-[12px] text-[#333]" aria-hidden="true">
          v
        </span>
        <span className="text-[14px] text-[#9b9b9b]">+94</span>
        <input
          type="tel"
          placeholder="Phone Number"
          className="h-full min-w-0 flex-1 bg-transparent text-[14px] text-[#222] outline-none placeholder:text-[#9b9b9b]"
          aria-label="Phone number"
        />
      </label>

      <button
        type="submit"
        className="mt-3 h-[54px] rounded-[4px] bg-black text-[14px] font-bold uppercase tracking-normal text-white transition-opacity hover:opacity-85"
      >
        Subscribe
      </button>
    </form>
  );
}
