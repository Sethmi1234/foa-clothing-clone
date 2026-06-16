"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { shopTheLookImage } from "@/data/mockData";
import { fadeIn } from "@/lib/animations";

export default function ShopTheLook() {
  return (
    <section className="relative">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative aspect-[9/16] w-full md:aspect-[16/9]"
      >
        <Image
          src={shopTheLookImage.mobile}
          alt="Shop the look"
          fill
          className="object-cover md:hidden"
          sizes="100vw"
        />
        <Image
          src={shopTheLookImage.desktop}
          alt="Shop the look"
          fill
          className="hidden object-cover md:block"
          sizes="100vw"
        />

        {/* Hotspot pins */}
        <button
          type="button"
          className="absolute left-[46%] top-[67%] z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/30 md:left-[52%] md:top-[79%]"
          aria-label="View Essential Tote Bag"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
        </button>
      </motion.div>
    </section>
  );
}
