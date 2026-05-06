"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Lightbulb, TrendingUp, Monitor } from "lucide-react";
import { CAREERS_CONTENT } from "../Careers.constants";
import { containerVariants, itemVariants } from "../Careers.animations";

const IconMap = {
  Globe,
  Lightbulb,
  TrendingUp,
  Monitor,
};

export const CareersBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            {CAREERS_CONTENT.benefits.title}
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CAREERS_CONTENT.benefits.items.map((benefit, index) => {
            const Icon = IconMap[benefit.icon as keyof typeof IconMap];
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white transition-colors duration-500 mb-8">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
