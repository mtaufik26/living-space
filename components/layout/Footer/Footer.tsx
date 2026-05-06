"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

import { FOOTER_CONTENT } from "./Footer.constants";
import { footerVariants, linkVariants } from "./Footer.animations";

const SocialIconMap = {
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Pinterest: FaPinterestP,
};

import { useAnchorScroll } from "@/hooks/useAnchorScroll";

export const Footer: React.FC = () => {
  const { handleAnchorClick } = useAnchorScroll();

  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
        >
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black text-sm tracking-tighter">
                {FOOTER_CONTENT.brand.logo}
              </div>

              <span className="text-xl font-bold tracking-tight">
                {FOOTER_CONTENT.brand.name}
              </span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {FOOTER_CONTENT.brand.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              {FOOTER_CONTENT.socials.map((social) => {
                const Icon =
                  SocialIconMap[
                    social.name as keyof typeof SocialIconMap
                  ];

                if (!Icon) return null;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_CONTENT.links.map((group) => (
              <div key={group.title} className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">
                  {group.title}
                </h4>

                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link 
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                      >
                        <motion.span
                          variants={linkVariants}
                          initial="rest"
                          whileHover="hover"
                          className="text-sm font-medium inline-block text-white/60 hover:text-white transition-colors"
                        >
                          {item.label}
                        </motion.span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">
              {FOOTER_CONTENT.contact.title}
            </h4>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-white/40 shrink-0 mt-1" />

                <span className="text-sm text-white/60 leading-relaxed italic">
                  {FOOTER_CONTENT.contact.address}
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white/40 shrink-0" />

                <span className="text-sm text-white/60 font-bold">
                  {FOOTER_CONTENT.contact.phone}
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/40 shrink-0" />

                <Link
                  href={`mailto:${FOOTER_CONTENT.contact.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {FOOTER_CONTENT.contact.email}
                </Link>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-5 h-5 text-white/40 shrink-0 flex items-center justify-center text-[10px] font-bold border border-white/20 rounded-sm">
                  H
                </div>

                <span className="text-[11px] uppercase tracking-widest text-white/40 font-bold">
                  {FOOTER_CONTENT.contact.hours}
                </span>
              </li>
            </ul>

            {/* Studio Locations Detail */}
            <div className="pt-8 space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-white/40 border-b border-white/10 pb-2">
                Our Studios
              </h5>

              <div className="grid grid-cols-1 gap-4">
                {FOOTER_CONTENT.contact.locations.map((loc) => (
                  <div key={loc.city} className="space-y-1">
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">
                      {loc.city}
                    </p>
                    <p className="text-[10px] text-white/40 leading-tight">
                      {loc.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group"
              >
                Work with us

                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium text-white/40 tracking-wider">
            {FOOTER_CONTENT.bottom.copyright}
          </p>

          <div className="flex gap-8">
            {FOOTER_CONTENT.bottom.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};