import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/types";

type YouMayAlsoLikeProps = {
  products: Product[];
};

export default function YouMayAlsoLike({ products }: YouMayAlsoLikeProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-[#e2e2e2] bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 md:px-10">
        <div className="mb-8">
          <h2 className="mb-2 text-[24px] font-bold uppercase tracking-wide text-[#151515] md:text-[28px]">
            You May Also Like
          </h2>
          <p className="text-[14px] text-[#8e8e8e]">
            Combine your style with these products
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
