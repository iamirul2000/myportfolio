import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsGrid } from "@/components/projects-grid";
import { ServicesPreviewEnhanced } from "@/components/services-preview-enhanced";
import { SkillsSectionEnhanced } from "@/components/skills-section-enhanced";
import { TestimonialsEnhanced } from "@/components/testimonials-enhanced";
import { TechStackVisualizer } from "@/components/tech-stack-visualizer";
import { Timeline } from "@/components/timeline";
import { WorkHighlightsHero } from "@/components/work-highlights-hero";
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
      <WorkHighlightsHero />
      <ProjectsGrid featuredOnly />
      <TechStackVisualizer />
      <SkillsSectionEnhanced />
      <ServicesPreviewEnhanced />
      {persona.testimonials && persona.testimonials.length > 0 && (
        <TestimonialsEnhanced testimonials={persona.testimonials} />
      )}
      <Timeline />
      {portfolioConfig.homepage.showFaq ? <FaqSection /> : null}
      <CtaBanner />
    </>
  );
}
