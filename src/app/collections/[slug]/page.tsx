import CollectionHero from "@/components/collections/CollectionHero";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import OtherCollections from "@/components/collections/OtherCollections";
import { getCollectionMeta, otherCollections } from "@/lib/collections";
import { getProductsByCollection } from "@/lib/products";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const meta = getCollectionMeta(slug);
  const products = getProductsByCollection(slug);

  return (
    <>
      <CollectionHero meta={meta} />
      <CollectionPageClient
        products={products}
        sortLabel={slug === "sale" ? "Featured" : "Best Selling"}
      />
      <OtherCollections groups={otherCollections} />
    </>
  );
}