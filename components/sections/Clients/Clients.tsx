"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLIENTS_CONTENT } from "./Clients.constants";

export const Clients: React.FC = () => {
  // Duplicate the list to create a seamless loop
  const duplicatedClients = [...CLIENTS_CONTENT, ...CLIENTS_CONTENT];

  return (
    <section className="py-16 border-y border-slate-100 bg-white overflow-hidden relative">
      {/* Gradient Masks for "Circular" Effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-12 lg:gap-24 items-center"
        >
          {duplicatedClients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center gap-12 lg:gap-24 group"
            >
              <div className="flex items-center gap-6">
                <span className="text-xl lg:text-3xl font-black tracking-tighter text-slate-200 group-hover:text-slate-950 transition-all duration-500 cursor-default select-none uppercase">
                  {client.logo}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-slate-950 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
