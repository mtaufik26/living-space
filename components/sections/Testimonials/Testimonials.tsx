"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { TESTIMONIALS_CONTENT } from "./Testimonials.constants";

import {
  cardVariants,
} from "./Testimonials.animations";

export const Testimonials: React.FC = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [
    ...TESTIMONIALS_CONTENT.testimonials,
    ...TESTIMONIALS_CONTENT.testimonials,
    ...TESTIMONIALS_CONTENT.testimonials,
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16 lg:mb-24">
        <div className="max-w-3xl space-y-4 sm:space-y-6 text-center sm:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-slate-400"
          >
            {TESTIMONIALS_CONTENT.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            {TESTIMONIALS_CONTENT.title}
          </motion.h2>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative flex overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Gradient */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient */}
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div
          ref={marqueeRef}
          className="marquee-track flex items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 py-4 sm:py-6 lg:py-8"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
              className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] shrink-0"
            >
              <motion.div
                className="relative bg-white border border-slate-200 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
                }}
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-50 to-transparent rounded-tr-2xl lg:rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="space-y-6 sm:space-y-7 lg:space-y-8 relative z-10">
                  {/* Quote Icon */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors duration-300">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-600 transition-colors duration-300" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-700 leading-relaxed tracking-tight line-clamp-4">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 lg:pt-6 border-t border-slate-100">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-0.5 sm:space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                        {testimonial.author}
                      </h4>

                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
        <div className="flex gap-2">
          {TESTIMONIALS_CONTENT.testimonials.map((_, idx) => (
            <div
              key={idx}
              className="w-1.5 h-1.5 rounded-full bg-slate-300 hover:bg-slate-600 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};