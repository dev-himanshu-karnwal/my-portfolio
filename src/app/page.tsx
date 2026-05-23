import { Hero } from "@/sections/home/hero";
import { QuickAbout } from "@/sections/home/quick-about";
import { FeaturedProjects } from "@/sections/home/featured-projects";
import { SkillsSnapshot } from "@/sections/home/skills-snapshot";
import { ExperienceSnapshot } from "@/sections/home/experience-snapshot";
import { EngineeringProcess } from "@/sections/home/engineering-process";
import { Metrics } from "@/sections/home/metrics";
import { Testimonials } from "@/sections/home/testimonials";
import { Cta } from "@/sections/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAbout />
      <FeaturedProjects />
      <SkillsSnapshot />
      <ExperienceSnapshot />
      <EngineeringProcess />
      <Metrics />
      <Testimonials />
      <Cta />
    </>
  );
}
