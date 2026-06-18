"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import WishlistButton from "@/components/wishlist/WishlistButton";
import PriceDisplay from "@/components/ui/PriceDisplay";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types";

type QuickViewModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  if (!product) return null;

  const activeColor = product.colors?.[selectedColor];
  const displayImage = activeColor?.image ?? product.image;
  const displayHover = activeColor?.hoverImage ?? product.hoverImage;

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const salePriceFormatted = product.price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div
              className="relative max-h-[90vh] w-full max-w-[1200px] overflow-y-auto bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 text-neutral-400 transition-colors hover:text-black"
                aria-label="Close quick view"
              >
                <CloseIcon />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product Images */}
                <div className="relative aspect-[4/5] bg-[#f3f3f3] md:aspect-auto">
                  <Image
                    src={displayImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {displayHover && displayHover !== displayImage && (
                    <Image
                      src={displayHover}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="absolute inset-0 object-cover object-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col p-6 md:p-10">
                  <div className="mb-6">
                    <h2 className="mb-2 text-[22px] font-bold uppercase leading-tight tracking-normal text-black">
                      {product.name}
                    </h2>
                    <div className="flex items-center gap-2 text-[22px] font-bold leading-tight">
                      {product.compareAtPrice && (
                        <span className="font-normal text-neutral-400 line-through">
                          Rs {product.compareAtPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      )}
                      <span>Rs {salePriceFormatted}</span>
                    </div>
                  </div>

                  {/* Color Selection */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="mb-6">
                      <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-black">
                        Color
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {product.colors.map((color, index) => (
                          <button
                            key={`${product.id}-color-${index}`}
                            type="button"
                            onClick={() => setSelectedColor(index)}
                            className={`relative h-10 w-10 shrink-0 border-2 border-black bg-clip-padding transition-opacity hover:opacity-80 ${
                              selectedColor === index ? "ring-1 ring-black ring-offset-1" : ""
                            }`}
                            style={{ backgroundColor: color.hex }}
                            aria-label={`Select ${product.name} color ${index + 1}`}
                            aria-pressed={selectedColor === index}
                          >
                            {color.soldOut && (
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="h-px w-full rotate-45 bg-red-600" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size Selection */}
                  <div className="mb-6">
                    <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-black">
                      Size: <span className="font-normal">{selectedSize || "Select Size"}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`h-10 w-10 border border-black text-[13px] font-semibold uppercase transition-colors hover:bg-black hover:text-white ${
                            selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                          }`}
                          aria-label={`Select size ${size}`}
                          aria-pressed={selectedSize === size}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <button
                      type="button"
                      onClick={() => {
                        addItem({
                          productId: product.id,
                          name: product.name,
                          image: displayImage,
                          price: product.price,
                          href: product.href,
                          size: selectedSize ?? undefined,
                          quantity: 1,
                        });
                        onClose();
                      }}
                      className="h-[52px] w-full rounded-full bg-black text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800"
                    >
                      Add to Cart
                    </button>
                    <WishlistButton
                      productId={product.id}
                      productName={product.name}
                      variant="page"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="mt-6 space-y-2 text-[13px] leading-relaxed text-[#8e8e8e]">
                    <p>
                      3 X{" "}
                      <strong className="font-semibold text-[#8e8e8e]">
                        <PriceDisplay amount={product.price} installment />
                      </strong>{" "}
                      or <strong className="font-semibold text-[#8e8e8e]">4.5% Cashback</strong> with Mintpay
                    </p>
                    <p>
                      or pay in 3 x{" "}
                      <strong className="font-semibold text-[#8e8e8e]">
                        <PriceDisplay amount={product.price} installment />
                      </strong>{" "}
                      with Koko
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
