"use client";

import { useEffect } from "react";

import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { CareersPreview } from "@/components/sections/CareersPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    const target = sessionStorage.getItem("scroll-target");

    if (target) {
      sessionStorage.removeItem("scroll-target");

      requestAnimationFrame(() => {
        const element = document.getElementById(target);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          window.history.replaceState(null, "", `${window.location.pathname}#${target}`);
        }
      });
    }
  }, []);

  return (
    <main>
      <Hero />
      <Clients />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <Team />
      <CareersPreview />
      <BlogPreview />
      <FAQ />
      <Contact />
    </main>
  );
}