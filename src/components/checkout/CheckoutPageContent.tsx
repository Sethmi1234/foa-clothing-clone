"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import EmptyCheckout from "@/components/checkout/EmptyCheckout";
import MobileOrderSummaryToggle from "@/components/checkout/MobileOrderSummaryToggle";
import OrderSummary from "@/components/checkout/OrderSummary";
import type { CheckoutField, CheckoutFormFields } from "@/components/checkout/types";
import { useCart } from "@/context/CartContext";
import type { DeliveryMethod } from "@/types";

const inputClassName =
  "w-full rounded-[5px] border border-[#dedede] bg-white px-3 py-3 text-[14px] text-black outline-none transition-colors focus:border-[#151515]";

const initialForm: CheckoutFormFields = {
  email: "",
  country: "Sri Lanka",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  province: "",
  postalCode: "",
  phone: "",
};

export default function CheckoutPageContent() {
  const router = useRouter();
  const { items, subtotal, orderNote, clearCart } = useCart();
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("ship");
  const [emailOffers, setEmailOffers] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);
  const [form, setForm] = useState<CheckoutFormFields>(initialForm);

  const shippingCost = subtotal >= 9999 ? 0 : 350;
  const total = subtotal + shippingCost;

  const itemCountLabel = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return `${count} item${count === 1 ? "" : "s"}`;
  }, [items]);

  const updateField = (field: CheckoutField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (items.length === 0) return;
    clearCart();
    router.push("/?order=success");
  };

  if (items.length === 0) {
    return <EmptyCheckout />;
  }

  return (
    <div className="min-h-screen bg-white text-[#151515]">
      <a href="#checkout-main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <CheckoutHeader />

      <MobileOrderSummaryToggle
        isOpen={showMobileSummary}
        total={total}
        onToggle={() => setShowMobileSummary((current) => !current)}
      />

      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-[minmax(0,1fr)_420px]">
        <main id="checkout-main" className="px-4 py-8 md:px-10 md:py-10 lg:border-r lg:border-[#dedede]">
          <CheckoutForm
            form={form}
            preferences={{ deliveryMethod, emailOffers, saveInfo }}
            shippingCost={shippingCost}
            inputClassName={inputClassName}
            onSubmit={handleSubmit}
            onFieldChange={updateField}
            onDeliveryMethodChange={setDeliveryMethod}
            onEmailOffersChange={setEmailOffers}
            onSaveInfoChange={setSaveInfo}
          />
        </main>

        <OrderSummary
          items={items}
          orderNote={orderNote}
          itemCountLabel={itemCountLabel}
          subtotal={subtotal}
          shippingCost={shippingCost}
          total={total}
          city={form.city}
          isMobileOpen={showMobileSummary}
        />
      </div>
    </div>
  );
}
