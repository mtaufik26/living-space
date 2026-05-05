"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAREERS_CONTENT } from "../Careers.constants";
import { containerVariants, itemVariants } from "../Careers.animations";

export const CareersList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJobs = activeCategory === "All" 
    ? CAREERS_CONTENT.openings.jobs 
    : CAREERS_CONTENT.openings.jobs.filter(job => job.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header & Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900">
              {CAREERS_CONTENT.openings.title}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CAREERS_CONTENT.openings.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === category 
                    ? "bg-slate-950 text-white shadow-lg" 
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Job List */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-slate-100 p-6 lg:p-10 rounded-[32px] hover:border-slate-300 hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {job.category}
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-slate-950/5 text-[10px] font-black uppercase tracking-widest text-slate-600">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Button className="h-14 lg:h-16 px-8 rounded-2xl bg-white border border-slate-100 text-slate-900 group-hover:bg-slate-950 group-hover:text-white transition-all flex items-center gap-3 shadow-sm group-hover:shadow-xl">
                      Apply Now
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 italic">No positions open in this category at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};
