"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAREERS_PREVIEW_CONTENT } from "./CareersPreview.constants";
import { containerVariants, itemVariants, imageVariants } from "./CareersPreview.animations";

export const CareersPreview: React.FC = () => {
  return (
    <section id="careers" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20 lg:scroll-mt-24 border-t border-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.span variants={itemVariants} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                {CAREERS_PREVIEW_CONTENT.badge}
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                {CAREERS_PREVIEW_CONTENT.title}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-slate-500 max-w-md leading-relaxed">
                {CAREERS_PREVIEW_CONTENT.description}
              </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              {CAREERS_PREVIEW_CONTENT.stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tighter">{stat.value}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Link href={CAREERS_PREVIEW_CONTENT.ctaHref}>
                <Button className="h-16 rounded-none px-10 bg-slate-950 hover:bg-slate-800 text-white font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center gap-4 group">
                  {CAREERS_PREVIEW_CONTENT.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src={CAREERS_PREVIEW_CONTENT.image}
                alt="Join our team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl">
                <p className="text-slate-900 font-medium italic text-lg leading-relaxed">
                  Working here means being part of a team that values innovation over convention.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-slate-50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
