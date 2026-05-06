"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVBAR_LINKS, NAVBAR_CONTENT } from "./Navbar.constants";
import {
  navbarVariants,
  menuVariants,
  overlayVariants,
} from "./Navbar.animations";
import { cn } from "@/lib/utils";

import { useAnchorScroll } from "@/hooks/useAnchorScroll";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { handleAnchorClick } = useAnchorScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll Spy
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "services",
      "projects",
      "testimonials",
      "team",
      "careers",
      "blog",
      "faq",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Navbar Scroll
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Close Mobile Menu On Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent Body Scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
        className={cn(
          "fixed top-[-1px] left-0 right-0 z-[100] border-0 outline-none ring-0 transition-all duration-500",
          isScrolled ? "py-3 lg:py-4" : "py-4 lg:py-6"
        )}
      >
        {/* Background Layer */}
        <div
          className={cn(
            "absolute inset-0 -z-10 border-0",
            isScrolled
              ? "bg-white/90 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] xl:backdrop-blur-xl"
              : "bg-transparent shadow-none"
          )}
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
          }}
        />

        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2 sm:gap-3"
          >
            <div className="flex h-8 w-8 items-center justify-center bg-slate-950 text-xs font-black tracking-tighter text-white transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10 sm:text-sm">
              {NAVBAR_CONTENT.logo.shortText}
            </div>

            <span className="text-base font-bold tracking-tight text-slate-950 sm:text-lg">
              {NAVBAR_CONTENT.logo.text}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 xl:flex">
            {NAVBAR_LINKS.map((link) => {
              const isHomePage = pathname === "/";

              const sectionId = link.href.includes("#")
                ? link.href.split("#")[1]
                : link.href.startsWith("/") && link.href.length > 1
                  ? link.href.substring(1)
                  : null;

              const isActive =
                link.href === "/"
                  ? pathname === "/" && (activeSection === "hero" || activeSection === "")
                  : (isHomePage && sectionId && activeSection === sectionId) ||
                  (pathname === link.href) ||
                  (!link.href.includes("#") && pathname.startsWith(link.href + "/"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  scroll={!link.href.includes("#")}
                  className="group relative py-2"
                >
                  <span
                    className={cn(
                      "text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300",
                      isActive
                        ? "text-slate-950"
                        : "text-slate-400 group-hover:text-slate-950"
                    )}
                  >
                    {link.label}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-slate-950"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-4 xl:flex">
            <Link
              href={NAVBAR_CONTENT.cta.href}
              onClick={(e) => handleAnchorClick(e, NAVBAR_CONTENT.cta.href)}
            >
              <Button className="group h-12 rounded-none bg-slate-950 px-8 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:bg-slate-800">
                {NAVBAR_CONTENT.cta.label}

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="p-2 text-slate-950 transition-colors hover:bg-slate-50 xl:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[110] bg-slate-950/40 xl:hidden"
            />

            {/* Sidebar */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 bottom-0 z-[120] flex w-[75%] max-w-[260px] flex-col border-l border-white/20 bg-white/90 shadow-2xl backdrop-blur-2xl xl:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Menu
                </span>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full p-1.5 transition-colors hover:bg-slate-100"
                >
                  <X size={18} className="text-slate-950" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 space-y-5 overflow-y-auto p-6">
                {NAVBAR_LINKS.map((link, index) => {
                  const isHomePage = pathname === "/";

                  const sectionId = link.href.includes("#")
                    ? link.href.split("#")[1]
                    : link.href.startsWith("/") && link.href.length > 1
                      ? link.href.substring(1)
                      : null;

                  const isActive =
                    link.href === "/"
                      ? pathname === "/" && (activeSection === "hero" || activeSection === "")
                      : (isHomePage && sectionId && activeSection === sectionId) ||
                      (pathname === link.href) ||
                      (!link.href.includes("#") && pathname.startsWith(link.href + "/"));
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          handleAnchorClick(e, link.href);
                          setIsMobileMenuOpen(false);
                        }}
                        scroll={!link.href.includes("#")}
                        className={cn(
                          "block text-2xl font-bold tracking-tight transition-colors",
                          isActive
                            ? "text-slate-950"
                            : "text-slate-400 hover:text-slate-950"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="space-y-5 border-t border-slate-100 p-6">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Project
                </p>

                <Link
                  href={NAVBAR_CONTENT.cta.href}
                  onClick={(e) => {
                    handleAnchorClick(e, NAVBAR_CONTENT.cta.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Button className="h-12 w-full rounded-none bg-slate-950 text-[9px] font-black uppercase tracking-[0.2em]">
                    {NAVBAR_CONTENT.cta.label}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};