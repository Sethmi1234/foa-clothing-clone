"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ironIslandData } from "@/data/mockData";
import { heroTextReveal } from "@/lib/animations";

export default function IronIsland() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden md:h-[80vh]">
      <Image
        src={ironIslandData.image}
        alt={ironIslandData.title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.p
          custom={0}
          variants={heroTextReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.2em]"
        >
          {ironIslandData.subheading}
        </motion.p>
        <motion.h2
          custom={1}
          variants={heroTextReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 max-w-2xl text-3xl font-semibold uppercase leading-tight md:text-5xl lg:text-6xl"
        >
          {ironIslandData.title}
        </motion.h2>
        <motion.p
          custom={2}
          variants={heroTextReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 max-w-lg text-sm leading-relaxed text-white/90 md:text-base"
        >
          {ironIslandData.description}
        </motion.p>
        <motion.div
          custom={3}
          variants={heroTextReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button href={ironIslandData.href} variant="outline" color="white">
            {ironIslandData.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
