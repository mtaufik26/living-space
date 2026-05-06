"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAREERS_CONTENT } from "../Careers.constants";
export const CareersHero: React.FC = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-20 lg:pb-32 bg-white overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10" />

      <div className="container mx-auto px-6 lg:px-12">

        <div className="max-w-4xl space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
          >
            {CAREERS_CONTENT.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95]"
          >
            {CAREERS_CONTENT.hero.title} <br />
            <span className="text-slate-300 italic font-light">{CAREERS_CONTENT.hero.highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl leading-relaxed"
          >
            {CAREERS_CONTENT.hero.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
