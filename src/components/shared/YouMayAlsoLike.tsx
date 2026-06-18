import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/types";

type YouMayAlsoLikeProps = {
  products: Product[];
};

export default function YouMayAlsoLike({ products }: YouMayAlsoLikeProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-neutral-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h2 className="mb-2 text-[28px] font-bold uppercase tracking-wide text-black md:text-[32px]">
          You May Also Like
        </h2>
        <p className="mb-8 text-[14px] text-neutral-500">
          Combine your style with these products
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
