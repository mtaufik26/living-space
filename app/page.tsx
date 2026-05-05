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
      {/* Section lain akan ditambahkan di sini secara bertahap */}
    </main>
  );
}
