"use client";

import Image from "next/image";
import Link from "next/link";
import type { CollectionMeta } from "@/types";

type CollectionHeroProps = {
  meta: CollectionMeta;
};

export default function CollectionHero({ meta }: CollectionHeroProps) {
  if (!meta.showHero || !meta.heroImage) return null;

  return (
    <section className="relative h-[280px] overflow-hidden md:h-[340px]">
      <Image
        src={meta.heroImage}
        alt={meta.displayTitle}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      {meta.heroOverlay && (
        <div className="absolute inset-0" style={{ backgroundColor: meta.heroOverlay }} />
      )}
      {!meta.heroOverlay && <div className="absolute inset-0 bg-black/25" />}

      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-6 md:px-10">
          <p className="text-[11px] text-white/80">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {" / "}
            <Link href="/collections/men" className="hover:underline">
              Shop
            </Link>
            {" / "}
            <span>{meta.displayTitle}</span>
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-[48px] font-bold text-white md:text-[72px] lg:text-[88px]">
            {meta.displayTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}
