"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_CONTENT } from "./Contact.constants";
import { containerVariants, itemVariants, formVariants } from "./Contact.animations";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <motion.span variants={itemVariants} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                {CONTACT_CONTENT.badge}
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[0.95]">
                {CONTACT_CONTENT.title} <br />
                <span className="text-slate-300 italic font-light">{CONTACT_CONTENT.highlight}</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-slate-500 max-w-md leading-relaxed">
                {CONTACT_CONTENT.description}
              </motion.p>
            </div>

            <div className="space-y-8 pt-8">
              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Office</h4>
                  <p className="text-slate-500 text-sm">{CONTACT_CONTENT.info.address}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-slate-500 text-sm font-bold">{CONTACT_CONTENT.info.phone}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-slate-500 text-sm">{CONTACT_CONTENT.info.email}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Working Hours</h4>
                  <p className="text-slate-500 text-sm italic">{CONTACT_CONTENT.info.workingHours}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-50 p-8 lg:p-16 rounded-[40px] space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <Input 
                    placeholder={CONTACT_CONTENT.form.namePlaceholder} 
                    className="h-14 rounded-2xl border-slate-200 bg-white focus:ring-slate-950 focus:border-slate-950 transition-all px-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <Input 
                    placeholder={CONTACT_CONTENT.form.emailPlaceholder} 
                    className="h-14 rounded-2xl border-slate-200 bg-white focus:ring-slate-950 focus:border-slate-950 transition-all px-6"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Subject</label>
                <Input 
                  placeholder={CONTACT_CONTENT.form.subjectPlaceholder} 
                  className="h-14 rounded-2xl border-slate-200 bg-white focus:ring-slate-950 focus:border-slate-950 transition-all px-6"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
                <Textarea 
                  placeholder={CONTACT_CONTENT.form.messagePlaceholder} 
                  className="min-h-[160px] rounded-2xl border-slate-200 bg-white focus:ring-slate-950 focus:border-slate-950 transition-all p-6 resize-none"
                />
              </div>

              <Button className="w-full h-16 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 group">
                {CONTACT_CONTENT.form.buttonLabel}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
