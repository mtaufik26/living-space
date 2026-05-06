"use client";

import React from "react";
import { motion } from "framer-motion";
export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <div className="max-w-4xl space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
          >
            Since 1994
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95]"
          >
            Crafting Spaces with <br />
            <span className="text-slate-300 italic font-light">Purpose & Soul</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};
