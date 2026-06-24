"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

export default function EVoucherBanner() {
  return (
    <section className="relative h-[400px] overflow-hidden bg-black md:h-[500px]">
      <Image
        src="https://foaclothing.com/cdn/shop/files/embroidery_collection_0a6acb97-5b93-44e2-8d9a-83f3956400b8.png?v=1765520754&width=1920"
        alt="Linen Collection"
        fill
        className="object-cover opacity-80"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
      >
        <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.25em] text-white/80 md:text-[14px]">
          FEATURED COLLECTION
        </p>
        <h2 className="mb-4 text-[32px] font-bold uppercase tracking-[0.05em] text-white md:text-[52px]">
          Linen Collection
        </h2>
        <p className="mb-8 max-w-[500px] text-[15px] leading-relaxed text-white/80 md:text-[16px]">
          Lightweight and breathable linen pieces perfect for the tropical climate. Elevate your everyday style.
        </p>
        <Link
          href="/collections/linen-collection"
          className="inline-flex h-[50px] items-center justify-center rounded-full border-2 border-white px-10 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black"
        >
          Shop Linen
        </Link>
      </motion.div>
    </section>
  );
}