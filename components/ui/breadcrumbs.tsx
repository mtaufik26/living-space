"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  currentPage: string;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "flex items-center gap-2 mb-12 text-slate-400 text-xs font-bold uppercase tracking-[0.3em]",
        className
      )}
    >
      <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
      <ChevronRight className="w-3 h-3 text-slate-300" />
      <span className="text-slate-900">{currentPage}</span>
    </motion.div>
  );
};
