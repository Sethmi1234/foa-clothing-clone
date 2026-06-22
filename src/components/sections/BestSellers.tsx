"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ProductCarousel from "@/components/ui/ProductCarousel";
import { useProductCarousel } from "@/hooks/useProductCarousel";
import { bestSellerProducts, bestSellerTabs } from "@/data/mockData";

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState<(typeof bestSellerTabs)[number]>("Tees");

  const filtered = bestSellerProducts.filter(
    (p) => p.category === activeTab.toLowerCase()
  );

  const carousel = useProductCarousel(filtered);

  return (
    <section className="py-12 md:py-16">
      <Container className="max-w-none px-6 md:px-[62px]">
        <div className="mb-8 md:mb-9">
          <h2 className="inline-block border-b-4 border-black pb-1 text-[38px] font-bold uppercase leading-none tracking-normal text-black md:text-[48px]">
            Best Sellers
          </h2>
          <p className="mt-8 text-[21px] leading-none text-black">
            Shop some of our hottest products
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-1 text-[19px] leading-none">
            {bestSellerTabs.map((tab, index) => (
              <span key={tab} className="flex items-center gap-1">
                {index > 0 && <span className="text-[#8e8e8e]">/</span>}
                <button
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase transition-colors ${
                    activeTab === tab
                      ? "font-bold text-black underline underline-offset-4"
                      : "font-normal text-[#8e8e8e] hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              </span>
            ))}
          </div>
        </div>

        <ProductCarousel products={filtered} carousel={carousel} />
      </Container>
    </section>
  );
}
