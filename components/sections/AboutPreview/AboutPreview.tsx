"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_PREVIEW_CONTENT } from "./AboutPreview.constants";
import {
  containerVariants,
  textVariants,
  imageVariants,
  cardVariants,
} from "./AboutPreview.animations";

const IconMap = {
  Sparkles: Sparkles,
  Leaf: Leaf,
  ShieldCheck: ShieldCheck,
};

export const AboutPreview: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-white scroll-mt-20 lg:scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Immersive Images with 3D Depth */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src={ABOUT_PREVIEW_CONTENT.images.main}
                alt={ABOUT_PREVIEW_CONTENT.images.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping Sub Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-12 -right-8 lg:-right-12 w-1/2 aspect-square rounded-[30px] overflow-hidden shadow-2xl border-[10px] border-white z-10 hidden sm:block"
            >
              <Image
                src={ABOUT_PREVIEW_CONTENT.images.sub}
                alt="Detail architectural design"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-50 rounded-full -z-10 blur-3xl opacity-60" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={textVariants}>
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase border border-slate-200">
                {ABOUT_PREVIEW_CONTENT.badge}
              </span>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                {ABOUT_PREVIEW_CONTENT.title.main} <br />
                <span className="text-slate-400">{ABOUT_PREVIEW_CONTENT.title.highlight}</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                {ABOUT_PREVIEW_CONTENT.description}
              </p>
            </motion.div>

            {/* Features List */}
            <div className="grid grid-cols-1 gap-6 pt-4">
              {ABOUT_PREVIEW_CONTENT.features.map((feature, index) => {
                const Icon = IconMap[feature.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="flex items-start gap-5 p-4 rounded-3xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={textVariants} className="pt-6">
              <Link href="/about#about-top">
                <Button size="lg" className="rounded-full px-10 h-14 text-sm font-bold tracking-wide bg-slate-900 hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-200 group">
                  {ABOUT_PREVIEW_CONTENT.cta.label}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
