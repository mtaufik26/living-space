"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TEAM_CONTENT } from "./Team.constants";
import { containerVariants, cardVariants } from "./Team.animations";

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
          >
            {TEAM_CONTENT.badge}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            {TEAM_CONTENT.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            {TEAM_CONTENT.description}
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_CONTENT.members.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group space-y-6"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-slate-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <Link 
                    href={member.socials.linkedin} 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-950 hover:bg-slate-900 hover:text-white transition-all scale-0 group-hover:scale-100 delay-100 duration-300"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={member.socials.instagram} 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-950 hover:bg-slate-900 hover:text-white transition-all scale-0 group-hover:scale-100 delay-150 duration-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1 text-center">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
