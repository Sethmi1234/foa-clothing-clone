"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { collectionShowcase } from "@/data/mockData";

export default function CollectionShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[500px] overflow-hidden bg-black md:h-[550px]">
      {/* Stacked backgrounds — crossfade to prevent white flash */}
      {collectionShowcase.map((collection, index) => (
        <motion.div
          key={collection.id}
          className="absolute inset-0"
          animate={{ opacity: index === active ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ zIndex: index === active ? 2 : 1 }}
          aria-hidden={index !== active}
        >
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-4 text-center md:gap-4">
        {collectionShowcase.map((collection, index) => (
          <Link
            key={collection.id}
            href={collection.href}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            className="group"
          >
            <motion.span
              animate={{ opacity: index === active ? 1 : 0.55 }}
              transition={{ duration: 0.3 }}
              className={`block text-2xl font-semibold uppercase tracking-wide transition-all md:text-4xl lg:text-5xl ${
                index === active && collection.outlined
                  ? "text-stroke-white"
                  : index === active
                    ? "text-white"
                    : "text-stroke-white-thin group-hover:text-white"
              }`}
            >
              {collection.title}
            </motion.span>
          </Link>
        ))}
      </div>
    </section>
  );
}
