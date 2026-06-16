import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  linkText,
  linkHref,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <h2 className="inline-block border-b-4 border-black pb-1 text-2xl font-semibold uppercase tracking-wide md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-neutral-600 md:text-base">{subtitle}</p>
        )}
      </div>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          {linkText}
        </Link>
      )}
    </motion.div>
  );
}
