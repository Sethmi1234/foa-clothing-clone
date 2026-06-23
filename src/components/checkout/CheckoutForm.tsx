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
      <section>
        <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Express checkout</h2>
        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center rounded-[5px] bg-black text-[14px] font-medium text-white"
        >
          G Pay
        </button>
        <p className="mt-4 text-center text-[12px] text-neutral-500">Show more options</p>
      </section>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#dedede]" />
        <span className="text-[12px] uppercase tracking-[0.08em] text-neutral-500">OR</span>
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
          <label className="flex items-center gap-2 text-[13px] text-[#151515]">
            <input
              type="checkbox"
              checked={preferences.emailOffers}
              onChange={(event) => onEmailOffersChange(event.target.checked)}
              className="h-4 w-4 accent-[#151515]"
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
