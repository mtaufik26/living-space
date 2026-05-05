"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Layout, TreePine, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES_PREVIEW_CONTENT } from "./ServicesPreview.constants";
import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "./ServicesPreview.animations";

const IconMap = {
  Home: Home,
  Layout: Layout,
  TreePine: TreePine,
  Briefcase: Briefcase,
};

export const ServicesPreview: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              {SERVICES_PREVIEW_CONTENT.badge}
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              {SERVICES_PREVIEW_CONTENT.title.main} <br />
              <span className="text-slate-400 font-light italic">{SERVICES_PREVIEW_CONTENT.title.highlight}</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xs"
          >
            <p className="text-slate-500 text-sm leading-relaxed">
              {SERVICES_PREVIEW_CONTENT.description}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {SERVICES_PREVIEW_CONTENT.services.map((service, index) => {
            const Icon = IconMap[service.icon as keyof typeof IconMap];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link href={service.href}>
                  <motion.div
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                    className="h-full p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                      <span>Detail</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <Link href={SERVICES_PREVIEW_CONTENT.cta.href}>
            <Button variant="outline" size="lg" className="rounded-full px-12 h-14 border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">
              {SERVICES_PREVIEW_CONTENT.cta.label}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
