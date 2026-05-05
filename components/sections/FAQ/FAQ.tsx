"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_CONTENT } from "./FAQ.constants";
import { accordionVariants, containerVariants, itemVariants } from "./FAQ.animations";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-slate-50 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                {FAQ_CONTENT.badge}
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[0.95]">
                {FAQ_CONTENT.title} <br />
                <span className="text-slate-300 italic font-light">{FAQ_CONTENT.highlight}</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                {FAQ_CONTENT.description}
              </p>
            </motion.div>

            {/* Help Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm space-y-4"
            >
              <h4 className="font-bold text-slate-900">Still have questions?</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest text-slate-950 flex items-center gap-2 group">
                Contact Us
                <div className="w-8 h-px bg-slate-950 transition-all group-hover:w-12" />
              </button>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            {FAQ_CONTENT.items.map((item) => {
              const isOpen = openId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`overflow-hidden rounded-[32px] transition-all duration-500 border ${
                    isOpen ? "bg-white border-slate-200 shadow-md" : "bg-transparent border-slate-200/50 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-8 flex items-center justify-between text-left gap-8"
                  >
                    <span className={`text-lg lg:text-xl font-bold transition-colors ${
                      isOpen ? "text-slate-900" : "text-slate-600"
                    }`}>
                      {item.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? "bg-slate-900 text-white rotate-180" : "bg-slate-200 text-slate-600"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="h-px w-full bg-slate-100 mb-6" />
                          <p className="text-slate-500 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
