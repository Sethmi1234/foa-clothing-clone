import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductDetail from "@/components/products/ProductDetail";
import CustomerReviews from "@/components/shared/CustomerReviews";
import FAQSection from "@/components/shared/FAQSection";
import YouMayAlsoLike from "@/components/shared/YouMayAlsoLike";
import { getProductById, getAllProducts, getRelatedProducts } from "@/lib/products";
import StickyProductCard from "@/components/products/StickyProductCard";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) return {};

  return {
    title: `${product.name} | FOA Clothing`,
    description: product.description || `${product.name} - Shop now`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(id, 4);

  return (
    <>
      <div className="bg-white py-6 md:py-10">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10">
          <nav className="mb-6 text-[11px] uppercase tracking-[0.06em] text-neutral-500">
            <a href="/" className="hover:text-black">Home</a>
            <span className="mx-2">/</span>
            <a href={`/collections/${product.collections[0]}`} className="hover:text-black">
              {product.collections[0]}
            </a>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
          </nav>

          <ProductDetail product={product} />
        </div>
      </div>

      <CustomerReviews />
      <FAQSection />
      <YouMayAlsoLike products={relatedProducts} />
      
      <StickyProductCard product={product} />
    </>
  );
}
