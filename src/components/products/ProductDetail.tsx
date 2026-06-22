"use client";

import { useState } from "react";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import { getGalleryImages } from "@/lib/productImages";
import type { Product } from "@/types";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = getGalleryImages(product, selectedColor);

  const handleColorChange = (index: number) => {
    setSelectedColor(index);
    setSelectedImage(0);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      <ProductGallery
        product={product}
        images={galleryImages}
        selectedImage={selectedImage}
        onSelectImage={setSelectedImage}
      />
      <div className="md:sticky md:top-[120px] md:self-start">
        <ProductInfo
          product={product}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />
      </div>
    </div>
  );
}
