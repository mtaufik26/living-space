import { About } from "@/components/sections/AboutPreview/About";
import { AboutStory } from "@/components/sections/AboutPreview/AboutStory";
import { AboutTeam } from "@/components/sections/AboutPreview/AboutTeam";

export default function AboutPage() {
  return (
    <main>
      <About />
      <AboutStory />
      <AboutTeam />
    </main>
  );
}
