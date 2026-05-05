"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS_PREVIEW_CONTENT } from "./ProjectsPreview.constants";
import {
  containerVariants,
  projectVariants,
  overlayVariants,
  imageScaleVariants,
} from "./ProjectsPreview.animations";

export const ProjectsPreview: React.FC = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              {PROJECTS_PREVIEW_CONTENT.badge}
            </span>
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[0.95]">
              {PROJECTS_PREVIEW_CONTENT.title.main} <br />
              <span className="text-slate-300 italic font-light">{PROJECTS_PREVIEW_CONTENT.title.highlight}</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xs"
          >
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              {PROJECTS_PREVIEW_CONTENT.description}
            </p>
          </motion.div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Large Project - Spans 7 columns */}
          <motion.div
            variants={projectVariants}
            className="lg:col-span-7 group cursor-pointer"
          >
            <Link href={`/projects/${PROJECTS_PREVIEW_CONTENT.projects[0].id}`}>
              <motion.div 
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative aspect-[16/10] lg:aspect-auto lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
              >
                <motion.div variants={imageScaleVariants} className="h-full w-full">
                  <Image
                    src={PROJECTS_PREVIEW_CONTENT.projects[0].image}
                    alt={PROJECTS_PREVIEW_CONTENT.projects[0].title}
                    fill
                    className="object-cover transition-all duration-700"
                  />
                </motion.div>
                
                {/* Overlay */}
                <motion.div 
                  variants={overlayVariants}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] p-10 flex flex-col justify-end"
                >
                  <div className="flex items-end justify-between gap-4">
                    <div className="space-y-4">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                        {PROJECTS_PREVIEW_CONTENT.projects[0].category}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                        {PROJECTS_PREVIEW_CONTENT.projects[0].title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{PROJECTS_PREVIEW_CONTENT.projects[0].location}</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Smaller Projects Column - Spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {PROJECTS_PREVIEW_CONTENT.projects.slice(1).map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group cursor-pointer flex-grow"
              >
                <Link href={`/projects/${project.id}`}>
                  <motion.div 
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative aspect-[16/10] lg:h-full rounded-[40px] overflow-hidden shadow-xl"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[40px] bg-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <motion.div 
                      variants={overlayVariants}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] p-8 flex flex-col justify-end"
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <Link href={PROJECTS_PREVIEW_CONTENT.cta.href}>
            <Button variant="outline" size="lg" className="rounded-full px-12 h-14 border-slate-200 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-sm">
              {PROJECTS_PREVIEW_CONTENT.cta.label}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
