"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Maximize } from "lucide-react";
import { PROJECTS_PAGE_CONTENT } from "../Projects.constants";
import {
  containerVariants,
  itemVariants,
} from "../Projects.animations";
import { cn } from "@/lib/utils";

export const ProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS_PAGE_CONTENT.projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-4 lg:gap-8 mb-16 lg:mb-24 overflow-x-auto pb-4 scrollbar-hide">
          {PROJECTS_PAGE_CONTENT.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 px-6 py-3 rounded-full border",
                activeCategory === category
                  ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200"
                  : "text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-900"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="space-y-8">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full rounded-[40px] overflow-hidden bg-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-950 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                          <ArrowUpRight className="w-8 h-8" />
                        </div>
                      </div>
                    </div>

                    {/* Content Info */}
                    <div className="space-y-6 px-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                            {project.category}
                          </span>
                          <h3 className="text-3xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-slate-500">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Location</span>
                          </div>
                          <p className="text-xs font-bold text-slate-900">{project.location}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Year</span>
                          </div>
                          <p className="text-xs font-bold text-slate-900">{project.year}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <Maximize className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Area</span>
                          </div>
                          <p className="text-xs font-bold text-slate-900">{project.area}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
