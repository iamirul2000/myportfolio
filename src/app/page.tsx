import { CtaBanner } from "@/components/cta-banner";
import { HeroSection } from "@/components/hero-section";
import { ProjectsGrid } from "@/components/projects-grid";
import { ServicesPreviewEnhanced } from "@/components/services-preview-enhanced";
import { SkillProficiencyEnhanced } from "@/components/skill-proficiency-enhanced";
import { TestimonialsEnhanced } from "@/components/testimonials-enhanced";
import { Timeline } from "@/components/timeline";
import { WhatIBring } from "@/components/what-i-bring";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/structured-data";
import { portfolioConfig, getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: portfolioConfig.siteName,
  description: portfolioConfig.siteDescription,
  path: "/"
});

export default function HomePage() {
  const persona = getActivePersona();
  
  return (
    <>
      <PersonStructuredData />
      <WebsiteStructuredData />
      <HeroSection />
      <ProjectsGrid featuredOnly />
      <ServicesPreviewEnhanced />
      <SkillProficiencyEnhanced />
      <Timeline />
      {persona.testimonials && persona.testimonials.length > 0 && (
        <TestimonialsEnhanced testimonials={persona.testimonials} />
      )}
      <WhatIBring />
      <CtaBanner />
    </>
  );
}
