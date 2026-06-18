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
      <SectionDivider />
      <CategoryGrid />
      <div className="h-12 w-full bg-white md:h-16" aria-hidden="true" />
      <ShopTheLook />
      <CollectionShowcase />
      <SectionDivider />
      <BestSellers />
      <IronIsland />
    </>
  );
}
