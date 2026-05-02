import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsGrid } from "@/components/projects-grid";
import { ServicesPreview } from "@/components/services-preview";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Timeline } from "@/components/timeline";
import { TrustedBy } from "@/components/trusted-by";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/structured-data";
import { portfolioConfig } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: portfolioConfig.siteName,
  description: portfolioConfig.siteDescription,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <PersonStructuredData />
      <WebsiteStructuredData />
      <HeroSection />
      <TrustedBy />
      <ProjectsGrid featuredOnly />
      <SkillsSection />
      <ServicesPreview />
      <TestimonialsSection />
      <Timeline />
      {portfolioConfig.homepage.showFaq ? <FaqSection /> : null}
      <CtaBanner />
    </>
  );
}
