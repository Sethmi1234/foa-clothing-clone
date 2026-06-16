"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { newCollectionProducts } from "@/data/mockData";
import { staggerContainer } from "@/lib/animations";

export default function NewCollection() {
  return (
    <section className="pb-12 md:pb-16">
      <Container className="max-w-none px-6 md:px-[62px]">
        <div className="pt-8 md:pt-10">
          <div className="mb-8 flex flex-col gap-4 md:mb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="inline-block border-b-4 border-black pb-1 text-[38px] font-bold uppercase leading-none tracking-normal text-black md:text-[48px]">
                New Collection
              </h2>
              <p className="mt-8 text-[21px] leading-none text-black">
                Shop till you drop!
              </p>
            </div>

            <Link
              href="/collections/new-collection"
              className="text-[19px] leading-none text-black underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Shop New Collection
            </Link>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hide-scrollbar grid grid-cols-2 gap-6 overflow-hidden md:grid-cols-4 md:gap-14"
        >
          {newCollectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
