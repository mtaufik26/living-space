import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const projectVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const overlayVariants: Variants = {
  rest: { opacity: 0, y: 20 },
  hover: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};

export const imageScaleVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};
