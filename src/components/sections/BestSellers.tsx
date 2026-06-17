"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { bestSellerProducts, bestSellerTabs } from "@/data/mockData";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState<(typeof bestSellerTabs)[number]>("Tees");

  const filtered = bestSellerProducts.filter(
    (p) => p.category === activeTab.toLowerCase()
  );

  return (
    <section className="py-12 md:py-16">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="inline-block border-b-4 border-black pb-1 text-2xl font-semibold uppercase md:text-3xl">
            Best Sellers
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Shop some of our hottest products
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-1 text-sm">
            {bestSellerTabs.map((tab, index) => (
              <span key={tab} className="flex items-center gap-1">
                {index > 0 && <span className="text-neutral-300">/</span>}
                <button
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase tracking-wide transition-colors ${
                    activeTab === tab
                      ? "font-semibold text-black underline underline-offset-4"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
          {filtered.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
