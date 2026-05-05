"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { BLOG_PAGE_DATA } from "../Blog.constants";

export const BlogGrid: React.FC = () => {
  const { articles } = BLOG_PAGE_DATA;

  return (
    <section className="pb-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-16">
          <h3 className="text-2xl font-bold text-slate-900">Recent Stories</h3>
          <div className="h-px flex-1 mx-8 bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/blog/${article.slug}`} className="space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
