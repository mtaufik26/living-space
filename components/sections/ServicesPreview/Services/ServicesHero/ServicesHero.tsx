"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES_HERO_CONTENT } from "./ServicesHero.constants";
import { containerVariants, itemVariants } from "./ServicesHero.animations";

export const ServicesHero: React.FC = () => {
  return (
    <section id="services-top" className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-white scroll-mt-0">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] border border-slate-200">
              {SERVICES_HERO_CONTENT.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95]"
          >
            {SERVICES_HERO_CONTENT.title.main} <br />
            <span className="text-slate-300 italic font-light">{SERVICES_HERO_CONTENT.title.highlight}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-500 max-w-2xl leading-relaxed font-normal"
          >
            {SERVICES_HERO_CONTENT.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
