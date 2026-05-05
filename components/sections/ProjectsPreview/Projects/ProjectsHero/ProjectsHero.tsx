"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECTS_PAGE_CONTENT } from "../Projects.constants";
import { containerVariants, itemVariants } from "../Projects.animations";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const ProjectsHero: React.FC = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <Breadcrumbs currentPage="Projects" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] border border-slate-200">
              {PROJECTS_PAGE_CONTENT.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95]"
          >
            {PROJECTS_PAGE_CONTENT.hero.title.main} <br />
            <span className="text-slate-300 italic font-light">{PROJECTS_PAGE_CONTENT.hero.title.highlight}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-500 max-w-2xl leading-relaxed font-normal"
          >
            {PROJECTS_PAGE_CONTENT.hero.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
