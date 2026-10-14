import { HeroSection } from "@/components/home/hero-section";
import { AboutSection, PhilosophySection } from "@/components/home/about-section";
import { GetInvolvedSection } from "@/components/home/get-involved-section";
import { StoriesSection } from "@/components/home/stories-section";
import { WhatWeDoSection } from "@/components/home/what-we-do-section";
import { SiteShell } from "@/components/layout/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <WhatWeDoSection />
      <StoriesSection />
      <GetInvolvedSection />
    </SiteShell>
  );
}
