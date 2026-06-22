"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** When false, renders image only (no link). Use when Logo is already inside a Link. */
  linked?: boolean;
};

const logos = {
  dark: "https://foaclothing.com/cdn/shop/files/FOAblack-logo.png?v=1684393386&width=120",
  light: "https://foaclothing.com/cdn/shop/files/FOA_Logos-03.png?v=1684393386&width=120",
};

export function Logo({ variant = "dark", className = "", onClick, linked = true }: LogoProps) {
  const image = (
    <Image
      src={logos[variant]}
      alt="FOA Clothing"
      width={80}
      height={28}
      className="h-6 w-auto md:h-7"
      priority
    />
  );

  if (!linked) {
    return <span className={`inline-flex items-center ${className}`}>{image}</span>;
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="FOA Clothing home"
      onClick={onClick}
      scroll
    >
      {image}
    </Link>
  );
}
