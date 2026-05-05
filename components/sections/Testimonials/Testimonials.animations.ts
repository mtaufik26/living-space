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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Card muncul animation
export const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 30
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: custom * 0.05,
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.2,
    },
  },
};