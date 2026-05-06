"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_PREVIEW_CONTENT } from "./BlogPreview.constants";
import { containerVariants, cardVariants } from "./BlogPreview.animations";

export const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
            >
              {BLOG_PREVIEW_CONTENT.badge}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              {BLOG_PREVIEW_CONTENT.title}
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-sm leading-relaxed"
          >
            {BLOG_PREVIEW_CONTENT.description}
          </motion.p>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {BLOG_PREVIEW_CONTENT.articles.map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              className="group"
            >
              <div className="space-y-6">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-950">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link href={BLOG_PREVIEW_CONTENT.ctaHref}>
            <Button className="h-16 rounded-none px-12 border-2 border-slate-950 bg-transparent hover:bg-slate-950 text-slate-950 hover:text-white font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center gap-4 group">
              {BLOG_PREVIEW_CONTENT.ctaLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
