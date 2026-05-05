"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ABOUT_HERO_CONTENT } from "./About.constants";
import { containerVariants, itemVariants } from "./About.animations";

export const About: React.FC = () => {
  return (
    <section id="about-top" className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-white scroll-mt-0">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <Breadcrumbs currentPage="About Us" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left: Title & Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] border border-slate-200">
                {ABOUT_HERO_CONTENT.badge}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95]"
            >
              {ABOUT_HERO_CONTENT.title.main} <br />
              <span className="text-slate-300 italic font-light">{ABOUT_HERO_CONTENT.title.highlight}</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-500 max-w-2xl leading-relaxed font-normal"
            >
              {ABOUT_HERO_CONTENT.description}
            </motion.p>
          </motion.div>

          {/* Right: Small Decorative Stat or Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="lg:col-span-4 hidden lg:flex justify-end"
          >
            <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-slate-900 rounded-full"
              />
              <span className="text-2xl font-bold text-slate-900">Est. 2012</span>
            </div>
          </motion.div>
        </div>

        {/* Large Image Below */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-24 relative aspect-[21/9] w-full rounded-[40px] overflow-hidden shadow-2xl"
        >
          <Image
            src={ABOUT_HERO_CONTENT.image}
            alt="Living Space Design Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
