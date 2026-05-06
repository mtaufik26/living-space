"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden bg-white px-6 py-24 min-h-[70vh]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 text-center space-y-12 max-w-2xl">
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400"
          >
            Halaman Tidak Ditemukan
          </motion.span>
          
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-[10rem] sm:text-[12rem] lg:text-[18rem] font-bold tracking-tighter text-slate-900 leading-none select-none"
            >
              404
            </motion.h1>
            <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay pointer-events-none">
               <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Sepertinya Anda <br />
            <span className="text-slate-300 italic font-light">Tersesat di Ruang Ini</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed text-base sm:text-lg">
            Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Mari kembali ke tempat yang lebih akrab.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link href="/">
            <Button className="h-14 px-10 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center gap-3">
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="h-14 px-10 rounded-full border border-slate-100 text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-3 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Halaman Sebelumnya
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom detail */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 text-[10px] font-bold uppercase tracking-widest text-slate-300 hidden sm:block"
      >
        Living Space Studio © 2024
      </motion.div>
    </main>
  );
}
