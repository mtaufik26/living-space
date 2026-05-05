"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, ArrowUpRight } from "lucide-react";
import { BLOG_PAGE_DATA } from "../Blog.constants";

export const BlogFeatured: React.FC = () => {
  const { featured } = BLOG_PAGE_DATA;

  return (
    <section className="pb-20 lg:pb-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative overflow-hidden rounded-[40px] bg-slate-50 border border-slate-100"
        >
          <Link href={`/blog/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <Image 
                src={featured.image} 
                alt={featured.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 rounded-full bg-slate-950 text-white text-[10px] font-bold uppercase tracking-widest">
                  Featured Article
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight group-hover:text-slate-600 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="pt-6 flex items-center justify-between border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">{featured.author}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{featured.date}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
