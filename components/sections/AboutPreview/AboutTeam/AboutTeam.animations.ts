import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -10, 
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
};
