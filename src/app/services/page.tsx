import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Main contribution areas and working strengths for Amirul Iman.",
  path: "/services"
});

export default function ServicesPage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero eyebrow="Services" title="How I contribute" description="The engineering areas I currently focus on most across product maintenance, enhancements, and support." />
      <section className="pb-16">
        <div className="container grid gap-6 lg:grid-cols-3">
          {persona.services.map((service) => (
            <Card key={service.title} className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                {service.deliverables.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
