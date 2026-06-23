import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export const buttonPress = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const slideInFromRight: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideDownFromTop: Variants = {
  hidden: { opacity: 0, y: -20, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    height: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export const drawerOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const modalPopIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 12,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

export const carouselSlide = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const crossFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slowCrossFade: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export const heroImageCrossFade: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const textFade: Variants = {
  hidden: {
    opacity: 0.55,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const slideUpFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.5 },
  },
};

export const quickFade: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const bottomSheetSlide: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: "100%",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const menuDropDown: Variants = {
  hidden: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.15, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};
