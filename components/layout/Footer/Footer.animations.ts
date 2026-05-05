import { Variants } from "framer-motion";

export const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const linkVariants: Variants = {
  rest: { x: 0, color: "rgb(148, 163, 184)" },
  hover: { 
    x: 5, 
    color: "rgb(255, 255, 255)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
};
