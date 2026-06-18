"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Logo } from "@/components/icons/Logo";
import { useCart } from "@/context/CartContext";
import { formatCartPrice } from "@/lib/cart";
import type { DeliveryMethod } from "@/types";

const CHECKOUT_HEADER_IMAGE =
  "https://cdn.shopify.com/s/files/1/0750/4415/9772/files/WOMENS_2000x.jpg?v=1686036160";

const inputClassName =
  "w-full rounded-[5px] border border-[#dedede] bg-white px-3 py-3 text-[14px] text-black outline-none transition-colors focus:border-[#151515]";

function getVariantLabel(color?: string, size?: string) {
  return [color, size].filter(Boolean).join(" / ");
}

export default function CheckoutPageContent() {
  const router = useRouter();
  const { items, subtotal, orderNote, clearCart } = useCart();
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("ship");
  const [emailOffers, setEmailOffers] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);
  const [form, setForm] = useState({
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
  });

  const shippingCost = subtotal >= 9999 ? 0 : 350;
  const total = subtotal + shippingCost;

  const itemCountLabel = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return `${count} item${count === 1 ? "" : "s"}`;
  }, [items]);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (items.length === 0) return;
    clearCart();
    router.push("/?order=success");
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f7f7] px-4 text-center">
        <p className="mb-4 text-[16px] text-[#151515]">Your cart is empty.</p>
        <Link
          href="/collections/all"
          className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#151515] px-8 text-[12px] font-medium uppercase tracking-[0.12em] text-white"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#151515]">
      <a href="#checkout-main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <header
        className="relative border-b border-[#dedede] bg-cover bg-center"
        style={{ backgroundImage: `url("${CHECKOUT_HEADER_IMAGE}")` }}
      >
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative mx-auto flex max-w-[1200px] items-center justify-center px-4 py-6 md:py-8">
          <Link href="/" aria-label="FOA Clothing home">
            <Logo variant="dark" className="[&_img]:h-8 [&_img]:w-auto md:[&_img]:h-10" />
          </Link>
        </div>
      </header>

      <button
        type="button"
        onClick={() => setShowMobileSummary((current) => !current)}
        className="flex w-full items-center justify-between border-b border-[#dedede] bg-[#f7f7f7] px-4 py-4 text-left lg:hidden"
      >
        <span className="text-[14px] text-[#005bd1]">
          {showMobileSummary ? "Hide order summary" : "Show order summary"}
        </span>
        <span className="text-[16px] font-semibold">{formatCartPrice(total)}</span>
      </button>

      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-[minmax(0,1fr)_420px]">
        <main id="checkout-main" className="px-4 py-8 md:px-10 md:py-10 lg:border-r lg:border-[#dedede]">
          <form onSubmit={handleSubmit} className="mx-auto max-w-[560px] space-y-8">
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
                  onChange={(event) => updateField("email", event.target.value)}
                  className={inputClassName}
                />
                <label className="flex items-center gap-2 text-[13px] text-[#151515]">
                  <input
                    type="checkbox"
                    checked={emailOffers}
                    onChange={(event) => setEmailOffers(event.target.checked)}
                    className="h-4 w-4 accent-[#151515]"
                  />
                  Email me with news and offers
                </label>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Delivery</h2>
              <p className="mb-3 text-[13px] text-neutral-600">Choose a delivery method</p>
              <div className="mb-4 grid grid-cols-2 overflow-hidden rounded-[5px] border border-[#dedede]">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod("ship")}
                  className={`h-[44px] text-[13px] font-medium transition-colors ${
                    deliveryMethod === "ship"
                      ? "bg-[#151515] text-white"
                      : "bg-white text-[#151515] hover:bg-neutral-50"
                  }`}
                >
                  Ship
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryMethod("pickup")}
                  className={`h-[44px] border-l border-[#dedede] text-[13px] font-medium transition-colors ${
                    deliveryMethod === "pickup"
                      ? "bg-[#151515] text-white"
                      : "bg-white text-[#151515] hover:bg-neutral-50"
                  }`}
                >
                  Pickup
                </button>
              </div>

              {deliveryMethod === "ship" && (
                <div className="space-y-3">
                  <select
                    value={form.country}
                    onChange={(event) => updateField("country", event.target.value)}
                    className={inputClassName}
                  >
                    <option>Sri Lanka</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Australia</option>
                    <option>India</option>
                  </select>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(event) => updateField("firstName", event.target.value)}
                      className={inputClassName}
                    />
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(event) => updateField("lastName", event.target.value)}
                      className={inputClassName}
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Address"
                    value={form.address}
                    onChange={(event) => updateField("address", event.target.value)}
                    className={inputClassName}
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    value={form.apartment}
                    onChange={(event) => updateField("apartment", event.target.value)}
                    className={inputClassName}
                  />
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      type="text"
                      required
                      placeholder="City"
                      value={form.city}
                      onChange={(event) => updateField("city", event.target.value)}
                      className={inputClassName}
                    />
                    <input
                      type="text"
                      placeholder="Province"
                      value={form.province}
                      onChange={(event) => updateField("province", event.target.value)}
                      className={inputClassName}
                    />
                    <input
                      type="text"
                      placeholder="Postal code"
                      value={form.postalCode}
                      onChange={(event) => updateField("postalCode", event.target.value)}
                      className={inputClassName}
                    />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className={inputClassName}
                  />
                  <label className="flex items-center gap-2 text-[13px] text-[#151515]">
                    <input
                      type="checkbox"
                      checked={saveInfo}
                      onChange={(event) => setSaveInfo(event.target.checked)}
                      className="h-4 w-4 accent-[#151515]"
                    />
                    Save this information for next time
                  </label>
                </div>
              )}
            </section>

            <section>
              <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Shipping method</h2>
              <div className="rounded-[5px] border border-[#dedede] p-4">
                {form.city ? (
                  <div className="flex items-center justify-between gap-4 text-[14px]">
                    <span>Standard Shipping</span>
                    <span>{shippingCost === 0 ? "Free" : formatCartPrice(shippingCost)}</span>
                  </div>
                ) : (
                  <p className="text-[14px] text-neutral-500">Enter shipping address</p>
                )}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Payment</h2>
              <p className="mb-4 text-[13px] text-neutral-600">All transactions are secure and encrypted.</p>
              <div className="overflow-hidden rounded-[5px] border border-[#dedede]">
                <div className="border-b border-[#dedede] bg-[#f7f7f7] px-4 py-3 text-[14px] font-medium">
                  Credit card
                </div>
                <div className="space-y-3 p-4">
                  <input type="text" placeholder="Card number" className={inputClassName} />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input type="text" placeholder="Expiration date (MM / YY)" className={inputClassName} />
                    <input type="text" placeholder="Security code" className={inputClassName} />
                  </div>
                  <input type="text" placeholder="Name on card" className={inputClassName} />
                </div>
              </div>
            </section>

            <button
              type="submit"
              className="flex h-[52px] w-full items-center justify-center rounded-[5px] bg-[#151515] text-[14px] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Pay now
            </button>
          </form>
        </main>

        <aside
          className={`bg-[#f7f7f7] px-4 py-8 md:px-8 md:py-10 ${
            showMobileSummary ? "block" : "hidden lg:block"
          }`}
        >
          <div className="mx-auto max-w-[380px]">
            <h2 className="mb-6 text-[18px] font-semibold text-[#151515] lg:sr-only">Order summary</h2>

            <ul className="space-y-5">
              {items.map((item) => {
                const variantLabel = getVariantLabel(item.color, item.size);
                return (
                  <li key={item.lineId} className="flex gap-4">
                    <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-[8px] border border-[#dedede] bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover object-center"
                      />
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#707070] text-[11px] font-medium text-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-medium text-[#151515]">{item.name}</p>
                      {variantLabel && (
                        <p className="mt-1 text-[12px] uppercase tracking-[0.02em] text-neutral-500">
                          {variantLabel}
                        </p>
                      )}
                    </div>
                    <p className="text-[14px] font-medium text-[#151515]">
                      {formatCartPrice(item.price * item.quantity)}
                    </p>
                  </li>
                );
              })}
            </ul>

            {orderNote && (
              <div className="mt-6 border-t border-[#dedede] pt-4">
                <p className="mb-1 text-[12px] font-medium uppercase tracking-[0.06em] text-neutral-500">
                  Order note
                </p>
                <p className="text-[13px] leading-relaxed text-[#151515]">{orderNote}</p>
              </div>
            )}

            <div className="mt-6 space-y-3 border-t border-[#dedede] pt-4 text-[14px]">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Subtotal · {itemCountLabel}</span>
                <span>{formatCartPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>{form.city ? (shippingCost === 0 ? "Free" : formatCartPrice(shippingCost)) : "—"}</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#dedede] pt-4 text-[18px] font-semibold">
                <span>Total</span>
                <span>
                  <span className="mr-2 text-[12px] font-normal text-neutral-500">LKR</span>
                  {formatCartPrice(total)}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
