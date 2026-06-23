"use client";

import { useState } from "react";
import {
  ColorSelector,
  ProductActions,
  ProductDetails,
  ProductPaymentOptions,
  ProductPrice,
  SizeSelector,
} from "@/components/products/ProductInfoSections";
import SizeChartModal from "@/components/ui/SizeChartModal";
import { useCart } from "@/context/CartContext";
import { getActiveColorImage, getColorLabel } from "@/lib/productImages";
import type { Product } from "@/types";

type ProductInfoProps = {
  product: Product;
  selectedColor: number;
  onColorChange: (index: number) => void;
};

export default function ProductInfo({
  product,
  selectedColor,
  onColorChange,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const activeColor = product.colors?.[selectedColor];
  const activeImage = getActiveColorImage(product, selectedColor);
  const colorLabel = getColorLabel(activeColor?.hex);

  const handleColorChange = (index: number) => {
    onColorChange(index);
    setSelectedSize(null);
  };

  const handleAddToCart = (quantity: number = 1) => {
    addItem({
      productId: product.id,
      name: product.name,
      image: activeImage,
      price: product.price,
      href: product.href,
      size: selectedSize ?? undefined,
      color: colorLabel,
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[24px] font-bold uppercase leading-tight tracking-normal text-black md:text-[28px]">
            {product.name}
          </h1>
        </div>

        <ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} />
        <ProductPaymentOptions price={product.price} />

        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          onOpenSizeChart={() => setShowSizeChart(true)}
        />

        <ColorSelector
          product={product}
          selectedColor={selectedColor}
          colorLabel={colorLabel}
          onColorChange={handleColorChange}
        />

        <ProductDetails product={product} onOpenSizeChart={() => setShowSizeChart(true)} />

        <ProductActions
          product={product}
          activeImage={activeImage}
          addedToCart={addedToCart}
          onAddToCart={handleAddToCart}
          onOpenSizeChart={() => setShowSizeChart(true)}
        />
      </div>

      <SizeChartModal isOpen={showSizeChart} onClose={() => setShowSizeChart(false)} />
    </>
  );
}
