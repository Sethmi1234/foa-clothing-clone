"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartEmptyState from "@/components/cart/CartEmptyState";
import CartLineItem from "@/components/cart/CartLineItem";
import CartTermsCheckbox from "@/components/cart/CartTermsCheckbox";
import { useCart } from "@/context/CartContext";
import { formatCartPrice } from "@/lib/cart";

export default function CartPageContent() {
  const router = useRouter();
  const {
    items,
    subtotal,
    orderNote,
    termsAccepted,
    removeItem,
    updateQuantity,
    setOrderNote,
    setTermsAccepted,
  } = useCart();
  const [notesOpen, setNotesOpen] = useState(false);

  const handleCheckout = () => {
    if (!termsAccepted || items.length === 0) return;
    router.push("/checkout");
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-[900px] px-4 py-10 md:px-8 md:py-[70px]">
        <CartEmptyState variant="page" />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[900px] px-4 py-10 md:px-8 md:py-[70px]">
      <h1 className="mb-8 text-[18px] font-normal text-[#151515]">Your cart</h1>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-[#e2e2e2] text-left text-[12px] font-medium uppercase tracking-[0.06em] text-neutral-500">
              <th className="pb-4 pr-4 font-medium">Product</th>
              <th className="hidden pb-4 font-medium md:table-cell">Quantity</th>
              <th className="pb-4 pl-4 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartLineItem
                key={item.lineId}
                item={item}
                variant="page"
                onQuantityChange={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="hidden pt-8 align-top md:table-cell">
                <Link
                  href="/collections/all"
                  className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#151515] underline underline-offset-4"
                >
                  Continue shopping
                </Link>
              </td>
              <td colSpan={2} className="pt-8 align-top">
                <details
                  open={notesOpen}
                  onToggle={(event) => setNotesOpen(event.currentTarget.open)}
                  className="mb-4 border-b border-[#e2e2e2]"
                >
                  <summary className="cursor-pointer list-none py-3 text-[14px] text-[#151515] [&::-webkit-details-marker]:hidden">
                    Add notes
                  </summary>
                  <div className="pb-4">
                    <textarea
                      id="CartSpecialInstructions"
                      value={orderNote}
                      onChange={(event) => setOrderNote(event.target.value)}
                      className="min-h-[120px] w-full resize-y border border-[#e2e2e2] px-3 py-3 text-[14px] text-[#151515] outline-none focus:border-[#151515]"
                    />
                  </div>
                </details>

                <CartTermsCheckbox
                  id="CartTerms"
                  checked={termsAccepted}
                  onChange={setTermsAccepted}
                  className="mb-4"
                />

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={!termsAccepted}
                  className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#151515] text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Checkout <span className="mx-2 font-bold">•</span> {formatCartPrice(subtotal)}
                </button>

                <div className="mt-4 rounded-md border border-[#e2e2e2] bg-[#f7f7f7] px-4 py-3">
                  <button
                    type="button"
                    className="flex h-[44px] w-full items-center justify-center rounded-md bg-black text-[13px] font-medium text-white"
                  >
                    G Pay
                  </button>
                </div>

                <p className="mt-5 text-center text-[12px] text-neutral-500">
                  Taxes and{" "}
                  <Link href="/policies/shipping-policy" className="underline underline-offset-2">
                    shipping
                  </Link>{" "}
                  calculated at checkout
                </p>

                <Link
                  href="/collections/all"
                  className="mt-6 inline-block text-[12px] font-medium uppercase tracking-[0.08em] text-[#151515] underline underline-offset-4 md:hidden"
                >
                  Continue shopping
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
