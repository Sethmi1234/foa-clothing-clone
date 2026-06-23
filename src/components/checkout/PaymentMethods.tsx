import { useState } from "react";
import { VisaIcon, MastercardIcon, AmexIcon, PlusBadgeIcon } from "@/components/icons/UtilityIcons";

type PaymentMethodsProps = {
  inputClassName: string;
};

type PaymentOption = "credit_card" | "payzy" | "koko" | "mintpay" | "payhere";

export default function PaymentMethods({ inputClassName }: PaymentMethodsProps) {
  const [selected, setSelected] = useState<PaymentOption>("credit_card");

  return (
    <section>
      <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Payment</h2>
      <p className="mb-4 text-[13px] text-neutral-600">
        All transactions are secure and encrypted.
      </p>

      <div className="overflow-hidden rounded-[5px] border border-[#dedede] bg-white">
        
        {/* Credit Card Option */}
        <label
          className={`flex cursor-pointer items-center justify-between border-b border-[#dedede] px-4 py-4 transition-colors ${
            selected === "credit_card" ? "bg-[#f4f8fe]" : "hover:bg-neutral-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment_method"
              value="credit_card"
              checked={selected === "credit_card"}
              onChange={() => setSelected("credit_card")}
              className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-[#dedede] bg-white transition-all checked:border-[5px] checked:border-[#151515]"
            />
            <span className="text-[14px] font-medium text-[#151515]">Credit card</span>
          </div>
          <div className="flex items-center gap-1">
            <VisaIcon />
            <MastercardIcon />
            <AmexIcon />
            <PlusBadgeIcon text="+4" />
          </div>
        </label>

        {/* Credit Card Form (Visible if selected) */}
        {selected === "credit_card" && (
          <div className="border-b border-[#dedede] bg-[#f7f7f7] p-4">
            <div className="space-y-3">
              <div className="relative">
                <input type="text" placeholder="Card number" className={inputClassName} />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input type="text" placeholder="Expiration date (MM / YY)" className={inputClassName} />
                <div className="relative">
                  <input type="text" placeholder="Security code" className={inputClassName} />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                </div>
              </div>
              <input type="text" placeholder="Name on card" className={inputClassName} />
            </div>
          </div>
        )}

        {/* Payzy Option */}
        <label
          className={`flex cursor-pointer items-center justify-between border-b border-[#dedede] px-4 py-4 transition-colors ${
            selected === "payzy" ? "bg-[#f4f8fe]" : "hover:bg-neutral-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment_method"
              value="payzy"
              checked={selected === "payzy"}
              onChange={() => setSelected("payzy")}
              className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-[#dedede] bg-white transition-all checked:border-[5px] checked:border-[#151515]"
            />
            <span className="text-[14px] text-[#151515]">Payzy split in up to 4</span>
          </div>
          <div className="flex items-center gap-1">
            <VisaIcon />
            <MastercardIcon />
          </div>
        </label>

        {/* Koko Option */}
        <label
          className={`flex cursor-pointer items-center justify-between border-b border-[#dedede] px-4 py-4 transition-colors ${
            selected === "koko" ? "bg-[#f4f8fe]" : "hover:bg-neutral-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment_method"
              value="koko"
              checked={selected === "koko"}
              onChange={() => setSelected("koko")}
              className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-[#dedede] bg-white transition-all checked:border-[5px] checked:border-[#151515]"
            />
            <span className="text-[14px] text-[#151515]">Koko: Buy Now Pay Later</span>
          </div>
          <div className="flex items-center gap-1">
            <VisaIcon />
            <MastercardIcon />
          </div>
        </label>

        {/* Mintpay Option */}
        <label
          className={`flex cursor-pointer items-center justify-between border-b border-[#dedede] px-4 py-4 transition-colors ${
            selected === "mintpay" ? "bg-[#f4f8fe]" : "hover:bg-neutral-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment_method"
              value="mintpay"
              checked={selected === "mintpay"}
              onChange={() => setSelected("mintpay")}
              className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-[#dedede] bg-white transition-all checked:border-[5px] checked:border-[#151515]"
            />
            <span className="text-[14px] text-[#151515]">Mintpay | Shop now. Pay later.</span>
          </div>
          <div className="flex items-center gap-1">
            <VisaIcon />
            <MastercardIcon />
          </div>
        </label>

        {/* PayHere Option */}
        <label
          className={`flex cursor-pointer items-center justify-between px-4 py-4 transition-colors ${
            selected === "payhere" ? "bg-[#f4f8fe]" : "hover:bg-neutral-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment_method"
              value="payhere"
              checked={selected === "payhere"}
              onChange={() => setSelected("payhere")}
              className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-[#dedede] bg-white transition-all checked:border-[5px] checked:border-[#151515]"
            />
            <span className="text-[14px] text-[#151515]">Bank Card / Bank Account - PayHere</span>
          </div>
          <div className="flex items-center gap-1">
            <VisaIcon />
            <MastercardIcon />
            <AmexIcon />
            <PlusBadgeIcon text="+2" />
          </div>
        </label>
      </div>
    </section>
  );
}
