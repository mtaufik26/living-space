import { Variants } from "framer-motion";

export const marqueeVariants = {
  animate: {
    x: [0, -1035], // Adjust based on content width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};
