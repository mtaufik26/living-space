"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_TEAM_CONTENT } from "./AboutTeam.constants";
import {
  containerVariants,
  itemVariants,
  cardHoverVariants,
} from "./AboutTeam.animations";

export const AboutTeam: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
          >
            {ABOUT_TEAM_CONTENT.badge}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            {ABOUT_TEAM_CONTENT.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            {ABOUT_TEAM_CONTENT.description}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {ABOUT_TEAM_CONTENT.team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="space-y-6"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full rounded-[32px] overflow-hidden bg-slate-100 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-slate-600">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
