"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES_LIST_CONTENT } from "./ServicesList.constants";
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from "./ServicesList.animations";
import { cn } from "@/lib/utils";

export const ServicesList: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="space-y-32 lg:space-y-48">
          {SERVICES_LIST_CONTENT.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center scroll-mt-24 lg:scroll-mt-32",
                  !isEven && "lg:direction-rtl"
                )}
              >
                {/* Text Content */}
                <motion.div 
                  variants={itemVariants}
                  className={cn(
                    "space-y-8",
                    !isEven ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                      {service.subtitle}
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-slate-500 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Image Content */}
                <motion.div
                  variants={imageVariants}
                  className={cn(
                    "relative aspect-[4/3] w-full rounded-[40px] overflow-hidden shadow-2xl",
                    !isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
