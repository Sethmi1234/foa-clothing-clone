import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { formatPrice } from "@/data/mockData";
import { getProductById } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h1 className="mb-4 text-2xl font-medium uppercase tracking-wide">{product.name}</h1>
          <div className="mb-6 flex items-center gap-3">
            {product.compareAtPrice && (
              <span className="text-neutral-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="text-lg">{formatPrice(product.price)}</span>
          </div>
          <button
            type="button"
            className="w-full bg-black px-6 py-3 text-sm font-medium uppercase tracking-wide text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Container>
  );
}
