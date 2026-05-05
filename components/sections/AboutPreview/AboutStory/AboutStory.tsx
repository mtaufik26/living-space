"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { ABOUT_STORY_CONTENT } from "./AboutStory.constants";
import {
  containerVariants,
  itemVariants,
  milestoneVariants,
} from "./AboutStory.animations";

export const AboutStory: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
        >
          {/* Left Column: Philosophy & Quote */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                {ABOUT_STORY_CONTENT.philosophy.badge}
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                {ABOUT_STORY_CONTENT.philosophy.title}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                {ABOUT_STORY_CONTENT.philosophy.description}
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative p-10 lg:p-16 bg-white rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group"
            >
              <Quote className="absolute -top-4 -left-4 w-32 h-32 text-slate-50 opacity-10 group-hover:text-slate-100 transition-colors duration-500" />
              <div className="relative z-10 space-y-6">
                <p className="text-2xl lg:text-3xl font-medium italic text-slate-700 leading-snug">
                  {ABOUT_STORY_CONTENT.philosophy.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-slate-900" />
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-900">
                    {ABOUT_STORY_CONTENT.philosophy.author}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Mission, Vision & Timeline */}
          <div className="lg:col-span-5 space-y-16">
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 gap-8">
              <motion.div variants={itemVariants} className="space-y-4 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900">{ABOUT_STORY_CONTENT.mission.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {ABOUT_STORY_CONTENT.mission.description}
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-4 p-8 bg-slate-950 rounded-3xl text-white shadow-xl shadow-slate-900/10">
                <h3 className="text-xl font-bold">{ABOUT_STORY_CONTENT.vision.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {ABOUT_STORY_CONTENT.vision.description}
                </p>
              </motion.div>
            </div>

            {/* Milestones Timeline */}
            <div className="space-y-10 pt-8">
              <motion.h4 variants={itemVariants} className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">
                Key Milestones
              </motion.h4>
              <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                {ABOUT_STORY_CONTENT.milestones.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    variants={milestoneVariants}
                    className="pl-8 relative group"
                  >
                    <div className="absolute left-[-4.5px] top-2 w-[10px] h-[10px] rounded-full bg-slate-200 border-2 border-white group-hover:bg-slate-950 group-hover:scale-125 transition-all" />
                    <div className="space-y-2">
                      <span className="text-xs font-black text-slate-900">{milestone.year}</span>
                      <h5 className="font-bold text-slate-900">{milestone.title}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
