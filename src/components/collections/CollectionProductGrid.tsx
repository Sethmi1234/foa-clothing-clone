"use client";

import CollectionProductCard from "@/components/collections/CollectionProductCard";
import type { Product } from "@/types";

type CollectionProductGridProps = {
  products: Product[];
};

export default function CollectionProductGrid({ products }: CollectionProductGridProps) {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
            {products.map((product) => (
              <CollectionProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-sm uppercase tracking-wide text-neutral-400">
            No products found in this collection.
          </p>
        )}
      </div>
    </section>
  );
}