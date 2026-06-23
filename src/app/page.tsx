import BestSellers from "@/components/sections/BestSellers";
import CategoryGrid from "@/components/sections/CategoryGrid";
import CollectionShowcase from "@/components/sections/CollectionShowcase";
import HeroSlideshow from "@/components/sections/HeroSlideshow";
import IronIsland from "@/components/sections/IronIsland";
import NewCollection from "@/components/sections/NewCollection";
import ShopTheLook from "@/components/sections/ShopTheLook";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <NewCollection />
      <CategoryGrid />
      <ShopTheLook />
      <div className="h-10 bg-white md:h-16" aria-hidden="true" />
      <CollectionShowcase />
      <SectionDivider />
      <BestSellers />
      <IronIsland />
    </>
  );
}
