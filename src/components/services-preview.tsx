import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getActivePersona } from "@/data/portfolio-config";

export function ServicesPreview() {
  const persona = getActivePersona();

  return (
    <section className="py-16">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="How I usually contribute"
          description="The areas where I add the most value across shipping, support, and continuous improvement work."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {persona.services.map((service) => (
            <Card key={service.title} className="flex h-full flex-col justify-between gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                {service.deliverables.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <Button asChild variant="secondary">
          <Link href="/services">See full services</Link>
        </Button>
      </div>
    </section>
  );
}
