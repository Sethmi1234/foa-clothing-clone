"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";

type ProductGalleryProps = {
  product: Product;
};

export default function ProductGallery({ product }: ProductGalleryProps) {
  const allImages = product.images || [product.image];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {/* Thumbnails */}
      <div className="order-1 flex gap-2 overflow-x-auto md:order-1 md:w-20 md:flex-col">
        {allImages.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={`relative h-16 w-16 shrink-0 overflow-hidden border-2 md:h-20 md:w-20 ${
              selectedImage === index ? "border-black" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`${product.name} view ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-2 flex-1 md:order-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f3f3]">
          <Image
            src={allImages[selectedImage]}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {product.onSale && (
            <span className="absolute left-3 top-3 bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              {product.saleLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}