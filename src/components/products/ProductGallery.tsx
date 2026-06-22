"use client";

import SafeImage from "@/components/ui/SafeImage";
import type { Product } from "@/types";

type ProductGalleryProps = {
  product: Product;
  images: string[];
  selectedImage: number;
  onSelectImage: (index: number) => void;
};

export default function ProductGallery({
  product,
  images,
  selectedImage,
  onSelectImage,
}: ProductGalleryProps) {
  const safeIndex = Math.min(selectedImage, Math.max(images.length - 1, 0));
  const mainImage = images[safeIndex] ?? product.image;

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="order-1 flex gap-2 overflow-x-auto md:order-1 md:w-20 md:flex-col">
        {images.map((img, index) => (
          <button
            key={`${img}-${index}`}
            type="button"
            onClick={() => onSelectImage(index)}
            className={`relative h-16 w-16 shrink-0 overflow-hidden border-2 md:h-20 md:w-20 ${
              safeIndex === index ? "border-black" : "border-transparent"
            }`}
          >
            <SafeImage
              src={img}
              fallbackSrc={mainImage}
              alt={`${product.name} view ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      <div className="order-2 flex-1 md:order-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f3f3]">
          <SafeImage
            key={mainImage}
            src={mainImage}
            fallbackSrc={mainImage}
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
