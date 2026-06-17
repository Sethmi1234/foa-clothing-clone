import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { getCollectionTitle } from "@/lib/collections";
import { getAllProducts } from "@/lib/products";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const title = getCollectionTitle(slug);
  const products = getAllProducts();

  return (
    <Container className="py-10">
      <p className="mb-2 text-[10px] uppercase tracking-wide text-neutral-400">
        Home / Shop / {title}
      </p>
      <h1 className="mb-8 text-3xl font-medium uppercase tracking-wide">{title}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
