import Link from "next/link";
import { motion } from "framer-motion";
import { buttonPress } from "@/lib/animations";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "ghost";
  color?: "black" | "white";
  className?: string;
  onClick?: () => void;
};

const variantStyles = {
  solid: {
    black: "bg-black text-white hover:bg-neutral-800",
    white: "bg-white text-black hover:bg-neutral-100",
  },
  outline: {
    black: "border border-black text-black hover:bg-black hover:text-white",
    white: "border border-white text-white hover:bg-white hover:text-black",
  },
  ghost: {
    black: "text-black hover:opacity-70",
    white: "text-white hover:opacity-70",
  },
};

export default function Button({
  children,
  href,
  variant = "solid",
  color = "black",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 rounded-full";

  const styles = `${base} ${variantStyles[variant][color]} ${className}`;

  if (href) {
    return (
      <motion.div {...buttonPress}>
        <Link href={href} className={styles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...buttonPress}
      onClick={onClick}
      className={styles}
    >
      {children}
    </motion.button>
  );
}
