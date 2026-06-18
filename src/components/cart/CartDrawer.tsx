"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartEmptyState from "@/components/cart/CartEmptyState";
import CartLineItem from "@/components/cart/CartLineItem";
import CartTermsCheckbox from "@/components/cart/CartTermsCheckbox";
import { SidePanelCloseIcon } from "@/components/icons/SidePanelCloseIcon";
import { useCart } from "@/context/CartContext";
import { formatCartPrice } from "@/lib/cart";
import { drawerOverlay, slideInFromRight } from "@/lib/animations";

export default function CartDrawer() {
  const router = useRouter();
  const {
    items,
    subtotal,
    orderNote,
    isDrawerOpen,
    termsAccepted,
    closeDrawer,
    removeItem,
    updateQuantity,
    setOrderNote,
    setTermsAccepted,
  } = useCart();
  const [showOrderNote, setShowOrderNote] = useState(false);
  const [draftNote, setDraftNote] = useState(orderNote);

  const handleCheckout = () => {
    if (!termsAccepted || items.length === 0) return;
    closeDrawer();
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.button
            type="button"
            variants={drawerOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[88] bg-black/40"
            onClick={closeDrawer}
            aria-label="Close cart"
          />

          <motion.aside
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[90] flex w-[calc(100vw-30px)] max-w-[480px] flex-col bg-white shadow-2xl"
            aria-label="Cart"
          >
            <div className="flex items-center justify-between border-b border-[#e2e2e2] px-6 py-5">
              <h2 className="text-[18px] font-normal text-[#151515]">Cart</h2>
              <button
                type="button"
                onClick={closeDrawer}
                className="text-[#151515] transition-opacity hover:opacity-70"
                aria-label="Close cart panel"
              >
                <SidePanelCloseIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <CartEmptyState />
              ) : (
                <div className="py-2">
                  {items.map((item) => (
                    <CartLineItem
                      key={item.lineId}
                      item={item}
                      variant="drawer"
                      onQuantityChange={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#e2e2e2] bg-white px-6 pb-8 pt-4 md:pb-6">
                <button
                  type="button"
                  onClick={() => {
                    setDraftNote(orderNote);
                    setShowOrderNote(true);
                  }}
                  className="mb-4 flex w-full items-center justify-between border-b border-[#e2e2e2] py-3 text-left text-[14px] text-[#151515]"
                >
                  Add order note
                  <span className="text-lg leading-none">+</span>
                </button>

                <p className="mb-3 text-center text-[12px] tracking-[0.02em] text-neutral-500">
                  Taxes and{" "}
                  <Link href="/policies/shipping-policy" className="underline underline-offset-2">
                    shipping
                  </Link>{" "}
                  calculated at checkout
                </p>

                <CartTermsCheckbox
                  id="CartTerms-Drawer"
                  checked={termsAccepted}
                  onChange={setTermsAccepted}
                  className="mb-4"
                />

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={!termsAccepted}
                  className="mb-3 flex h-[48px] w-full items-center justify-center rounded-full bg-[#151515] text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Checkout <span className="mx-2 font-bold">•</span> {formatCartPrice(subtotal)}
                </button>

                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  className="block text-center text-[12px] font-medium uppercase tracking-[0.08em] text-[#151515] underline underline-offset-4"
                >
                  View Cart
                </Link>
              </div>
            )}

            <AnimatePresence>
              {showOrderNote && (
                <>
                  <motion.button
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[91] bg-black/30"
                    onClick={() => setShowOrderNote(false)}
                    aria-label="Close order note"
                  />
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-x-0 bottom-0 z-[92] bg-white p-6 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
                  >
                    <label htmlFor="mini-cart-notes" className="mb-2 block text-[13px] font-medium text-[#151515]">
                      Add order note
                    </label>
                    <textarea
                      id="mini-cart-notes"
                      rows={5}
                      value={draftNote}
                      onChange={(event) => setDraftNote(event.target.value)}
                      className="mb-4 w-full resize-none border border-[#e2e2e2] px-3 py-3 text-[14px] text-[#151515] outline-none focus:border-[#151515]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setOrderNote(draftNote);
                        setShowOrderNote(false);
                      }}
                      className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#151515] text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800"
                    >
                      Save
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
