"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartEmptyState from "@/components/cart/CartEmptyState";
import CartLineItem from "@/components/cart/CartLineItem";
import CartTermsCheckbox from "@/components/cart/CartTermsCheckbox";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { SidePanelCloseIcon } from "@/components/icons/SidePanelCloseIcon";
import SafeImage from "@/components/ui/SafeImage";
import { useCart } from "@/context/CartContext";
import { formatCartPrice } from "@/lib/cart";
import { bottomSheetSlide, drawerOverlay, quickFade, slideInFromRight } from "@/lib/animations";
import { newCollectionProducts } from "@/data/mockData";
import type { Product } from "@/types";

function CartRecommendationCard({ product }: { product: Product }) {
  return (
    <article className="mb-7 text-center last:mb-0">
      <Link href={product.href} className="group block">
        <div className="relative mx-auto mb-4 aspect-[2/3] w-[122px] bg-white">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
            sizes="122px"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute -right-3 top-14 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            <HeartIcon filled className="h-5 w-5" />
          </span>
        </div>
        <h3 className="text-[15px] font-semibold uppercase leading-tight text-[#151515]">
          {product.name}
        </h3>
        <p className="mt-1 text-[18px] font-semibold text-[#151515]">
          {formatCartPrice(product.price)}
        </p>
      </Link>
      <div className="mx-auto mt-2 max-w-[156px] text-[15px] font-semibold leading-[1.7] text-[#8a8a8a]">
        <p>3 X {formatCartPrice(product.price / 3)} or</p>
        <p>4.5% Cashback with</p>
        <span className="mx-auto my-1 flex h-[25px] w-[74px] items-center justify-center rounded-full bg-[#092942] px-2 py-1 text-[11px] font-bold italic leading-none text-white">
          mintpay
        </span>
        <p>or pay in 3 x {formatCartPrice(product.price / 3)} with</p>
        <span className="text-[20px] font-bold leading-none text-[#6766ff] [text-shadow:1px_0_0_#ff6bc7]">
          KOKO
        </span>
      </div>
      <Link
        href={product.href}
        className="mt-8 inline-block border-b border-[#151515] pb-1 text-[14px] uppercase leading-none text-[#151515]"
      >
        Quick View
      </Link>
    </article>
  );
}

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
  const recommendedProducts = newCollectionProducts
    .filter((product) => !items.some((item) => item.productId === product.id))
    .slice(0, 4);

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
            className="fixed inset-y-0 right-0 z-[90] flex w-[calc(100vw-16px)] max-w-[824px] bg-white shadow-2xl"
            aria-label="Cart"
          >
            {recommendedProducts.length > 0 && (
              <aside className="hidden w-[205px] shrink-0 overflow-y-auto bg-[#f4f4f4] px-5 py-5 lg:block">
                <h2 className="mb-5 text-center text-[16px] font-bold uppercase leading-tight tracking-[0.04em] text-[#151515]">
                  You May Also
                  <br />
                  Like
                </h2>
                {recommendedProducts.map((product) => (
                  <CartRecommendationCard key={product.id} product={product} />
                ))}
              </aside>
            )}

            <div className="flex min-w-0 flex-1 flex-col bg-white">
              <div className="flex h-[88px] items-center justify-between border-b border-[#e2e2e2] px-9">
                <h2 className="text-[20px] font-semibold uppercase tracking-[0.16em] text-[#151515]">Cart</h2>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="text-[#151515] transition-opacity hover:opacity-70"
                  aria-label="Close cart panel"
                >
                  <SidePanelCloseIcon />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-9">
                {items.length === 0 ? (
                  <CartEmptyState />
                ) : (
                  <div className="py-8">
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
                <div className="border-t border-[#e2e2e2] bg-white pb-6">
                  <button
                    type="button"
                    onClick={() => {
                      setDraftNote(orderNote);
                      setShowOrderNote(true);
                    }}
                    className="flex w-full items-center justify-between border-b border-[#e2e2e2] px-9 py-4 text-left text-[19px] text-[#151515]"
                  >
                    Add order note
                    <span className="text-2xl leading-none">+</span>
                  </button>

                  <div className="px-9 pt-6">
                    <p className="mb-3 text-center text-[16px] tracking-[0.02em] text-[#343434]">
                      Taxes and shipping calculated at checkout
                    </p>

                    <CartTermsCheckbox
                      id="CartTerms-Drawer"
                      checked={termsAccepted}
                      onChange={setTermsAccepted}
                      className="mb-5 justify-center text-[16px]"
                    />

                    <button
                      type="button"
                      onClick={handleCheckout}
                      disabled={!termsAccepted}
                      className="mb-4 flex h-[60px] w-full items-center justify-center rounded-full bg-[#151515] text-[17px] font-bold uppercase text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Checkout <span className="mx-2 font-bold">•</span> {formatCartPrice(subtotal)}
                    </button>

                    <Link
                      href="/cart"
                      onClick={closeDrawer}
                      className="block text-center text-[16px] font-medium uppercase text-[#151515] underline underline-offset-4"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <AnimatePresence>
              {showOrderNote && (
                <>
                  <motion.button
                    type="button"
                    variants={quickFade}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-[91] bg-black/30"
                    onClick={() => setShowOrderNote(false)}
                    aria-label="Close order note"
                  />
                  <motion.div
                    variants={bottomSheetSlide}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
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
