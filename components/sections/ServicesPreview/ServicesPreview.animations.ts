import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardVariants: Variants = {
  rest: { y: 0, scale: 1, backgroundColor: "rgba(255, 255, 255, 1)" },
  hover: { 
    y: -12, 
    scale: 1.02,
    backgroundColor: "rgba(250, 250, 250, 1)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};
