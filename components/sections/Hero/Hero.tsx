"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "./Hero.constants";
import {
  containerVariants,
  itemVariants,
  imageVariants,
  badgeVariants,
} from "./Hero.animations";
import { useAnchorScroll } from "@/hooks/useAnchorScroll";

export const Hero: React.FC = () => {
  const { handleAnchorClick } = useAnchorScroll();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 100]);
  const scrollOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Subtle Background Pattern - Hidden on mobile */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] hidden sm:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-16 pb-16 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">

          {/* Left Content - Clean & Minimal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/5 backdrop-blur-sm border border-slate-200">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500" />
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 tracking-wide">
                  {HERO_CONTENT.badge}
                </span>
              </div>
            </motion.div>

            {/* Title - Responsive font sizes */}
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.15] lg:leading-[1.1]">
                {HERO_CONTENT.title.main}{" "}
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent block sm:inline">
                  {HERO_CONTENT.title.highlight}
                </span>
              </h1>
            </motion.div>

            {/* Description - Responsive text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* CTA Buttons - Stack on mobile, row on tablet+ */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
            >
              <Link 
                href={HERO_CONTENT.cta.primary.href}
                onClick={(e) => handleAnchorClick(e, HERO_CONTENT.cta.primary.href)}
              >
                <Button
                  size="lg"
                  className="group h-11 sm:h-12 px-6 sm:px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-200 w-full sm:w-auto"
                >
                  {HERO_CONTENT.cta.primary.label}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link 
                href={HERO_CONTENT.cta.secondary.href}
                onClick={(e) => handleAnchorClick(e, HERO_CONTENT.cta.secondary.href)}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="h-11 sm:h-12 px-5 sm:px-6 text-slate-700 hover:text-slate-900 rounded-full w-full sm:w-auto"
                >
                  {HERO_CONTENT.cta.secondary.label}
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats - Responsive grid/flex */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 pt-6 sm:pt-8"
            >
              {HERO_CONTENT.stats.map((stat, index) => (
                <div key={index} className="space-y-1 text-center lg:text-left min-w-[80px]">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual/Image - Responsive height */}
          <div className="flex-1 relative w-full mt-8 lg:mt-0">
            {/* Mobile/Tablet optimized container */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <motion.div
                style={{ y: imageY }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={HERO_CONTENT.image.url}
                    alt={HERO_CONTENT.image.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 50vw"
                  />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Card - Responsive positioning */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 md:-bottom-6 md:-right-5 lg:-bottom-6 lg:-right-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-3 sm:p-4 border border-slate-100 max-w-[180px] sm:max-w-none"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">
                      Modern Architecture
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-500">
                      Redefining spaces
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};