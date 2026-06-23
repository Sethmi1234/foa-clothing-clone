"use client";

import { motion } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { categoryItems } from "@/data/mockData";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CategoryGrid() {
  return (
    <section className="bg-[#f5f5f5] pb-10 pt-2 md:pt-4">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8"
        >
          {categoryItems.map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="border-4 border-white shadow-sm">
              <Link
                href={item.href}
                className="group relative block aspect-[4/5] overflow-hidden md:aspect-[3/4]"
              >
                <SafeImage
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-6 left-6 text-lg font-medium text-white md:text-xl">
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
