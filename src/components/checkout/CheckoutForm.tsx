import Link from "next/link";
import DeliveryMethods from "@/components/checkout/DeliveryMethods";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import ShippingMethod from "@/components/checkout/ShippingMethod";
import type {
  CheckoutField,
  CheckoutFormFields,
  CheckoutPreferences,
} from "@/components/checkout/types";
import type { DeliveryMethod } from "@/types";

type CheckoutFormProps = {
  form: CheckoutFormFields;
  preferences: CheckoutPreferences;
  shippingCost: number;
  inputClassName: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onFieldChange: (field: CheckoutField, value: string) => void;
  onDeliveryMethodChange: (method: DeliveryMethod) => void;
  onEmailOffersChange: (checked: boolean) => void;
  onSaveInfoChange: (checked: boolean) => void;
};

export default function CheckoutForm({
  form,
  preferences,
  shippingCost,
  inputClassName,
  onSubmit,
  onFieldChange,
  onDeliveryMethodChange,
  onEmailOffersChange,
  onSaveInfoChange,
}: CheckoutFormProps) {
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-[560px] space-y-8">
      <section className="flex flex-col items-center">
        <p className="mb-3 text-[13px] text-neutral-500">Express checkout</p>
        <button
          type="button"
          className="flex h-[44px] w-full max-w-[280px] items-center justify-center rounded-[4px] bg-black text-[14px] font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <svg viewBox="0 0 41 17" height="17" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.07 7.3v2.2h3.6c-.14.83-.98 2.44-3.6 2.44-2.17 0-3.94-1.79-3.94-4S5.9 3.94 8.07 3.94c1.23 0 2.06.53 2.53.98l1.72-1.66C11.2 2.2 9.77 1.5 8.07 1.5 4.5 1.5 1.63 4.37 1.63 7.94s2.87 6.44 6.44 6.44c3.72 0 6.19-2.61 6.19-6.29 0-.43-.05-.75-.1-1.08H8.07v.29z" fill="#4285F4"/><path d="M16.5 5.4c-1.96 0-3.56 1.49-3.56 3.54 0 2.03 1.6 3.54 3.56 3.54s3.56-1.51 3.56-3.54c0-2.05-1.6-3.54-3.56-3.54zm0 5.68c-1.07 0-2-.89-2-2.14s.93-2.14 2-2.14 2 .9 2 2.14-.93 2.14-2 2.14z" fill="#EA4335"/><path d="M23.5 5.4c-1.96 0-3.56 1.49-3.56 3.54 0 2.03 1.6 3.54 3.56 3.54s3.56-1.51 3.56-3.54c0-2.05-1.6-3.54-3.56-3.54zm0 5.68c-1.07 0-2-.89-2-2.14s.93-2.14 2-2.14 2 .9 2 2.14-.93 2.14-2 2.14z" fill="#FBBC04"/><path d="M30.39 5.56v.54h-.04c-.35-.43-.99-.7-1.8-.7-1.7 0-3.26 1.5-3.26 3.55 0 2.02 1.56 3.53 3.26 3.53.8 0 1.45-.28 1.8-.72h.04v.45c0 1.36-.73 2.09-1.9 2.09-.95 0-1.54-.68-1.78-1.26l-1.3.54c.39.93 1.41 2.1 3.08 2.1 1.79 0 3.3-1.06 3.3-3.63V5.56h-1.4zm-1.7 5.5c-1.07 0-1.97-.9-1.97-2.12 0-1.24.9-2.16 1.97-2.16 1.06 0 1.9.93 1.9 2.16 0 1.22-.84 2.12-1.9 2.12z" fill="#4285F4"/><path d="M34.6 1.85h-2.3v12.06h1.53V9.4h.77c2.02 0 4.01-1.46 4.01-3.78S36.62 1.85 34.6 1.85zm.05 6.1h-.82V3.27h.82c1.13 0 1.77.92 1.77 2.34 0 1.4-.64 2.34-1.77 2.34z" fill="#34A853"/><path d="M38.97 13.91h1.54V1.85h-1.54v12.06z" fill="#EA4335"/>
          </svg>
        </button>
      </section>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#dedede]" />
        <span className="text-[12px] text-neutral-500">OR</span>
        <div className="h-px flex-1 bg-[#dedede]" />
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-[18px] font-semibold text-[#151515]">Contact</h2>
          <Link href="/account/login" className="text-[13px] text-[#005bd1] hover:underline">
            Sign in
          </Link>
        </div>
        <div className="space-y-3">
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(event) => onFieldChange("email", event.target.value)}
            className={inputClassName}
          />
          <label className="flex items-center gap-2 text-[13px] text-[#151515] cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.emailOffers}
              onChange={(event) => onEmailOffersChange(event.target.checked)}
              className="h-4 w-4 appearance-none rounded-[3px] border border-[#dedede] bg-white checked:border-[#151515] checked:bg-[#151515] relative checked:after:content-[''] checked:after:absolute checked:after:left-[4.5px] checked:after:top-[1.5px] checked:after:w-[5px] checked:after:h-[9px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45"
            />
            Email me with news and offers
          </label>
        </div>
      </section>

      <DeliveryMethods
        form={form}
        deliveryMethod={preferences.deliveryMethod}
        saveInfo={preferences.saveInfo}
        inputClassName={inputClassName}
        onDeliveryMethodChange={onDeliveryMethodChange}
        onFieldChange={onFieldChange}
        onSaveInfoChange={onSaveInfoChange}
      />

      <ShippingMethod city={form.city} shippingCost={shippingCost} />
      <PaymentMethods inputClassName={inputClassName} />

      <button
        type="submit"
        className="flex h-[52px] w-full items-center justify-center rounded-[5px] bg-[#151515] text-[14px] font-medium text-white transition-colors hover:bg-neutral-800"
      >
        Pay now
      </button>
    </form>
  );
}
