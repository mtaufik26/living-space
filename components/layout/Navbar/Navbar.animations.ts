import { Variants } from "framer-motion";

export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const menuVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    }
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    }
  }
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};
