import { PageHero } from "@/components/page-hero";
import { ServicesEnhanced } from "@/components/services-enhanced";
import { ServicesStats } from "@/components/services-stats";
import { ServicesCTA } from "@/components/services-cta";
import { ScrollAnimation } from "@/components/scroll-animations";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Focus Areas",
  description: "Main contribution areas and working strengths for Amirul Iman.",
  path: "/services"
});

export default function ServicesPage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero 
        eyebrow="Contribution Areas" 
        title="How I contribute" 
        description="The engineering areas where I add the most value across product maintenance, backend work, feature delivery, and release support." 
      />
      
      {/* Stats Section */}
      <section className="pb-8">
        <div className="container">
          <ScrollAnimation animation="fade-up">
            <ServicesStats />
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16">
        <div className="container">
          <ScrollAnimation animation="fade-up" delay={100}>
            <ServicesEnhanced services={persona.services} />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16">
        <div className="container">
          <ScrollAnimation animation="fade-up" delay={200}>
            <ServicesCTA />
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
