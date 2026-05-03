import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PrintButton } from "@/components/print-button";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Resume",
  description: "Resume and experience for Amirul Iman.",
  path: "/resume"
});

export default function ResumePage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="Resume and experience"
        description="Download my resume and review my current role, engineering timeline, and product work across web, APIs, mobile support, and production systems."
        aside={
          <div className="flex flex-wrap gap-3 no-print">
            <Button asChild size="lg">
              <Link href={persona.resumeFile} download>
                Download PDF
              </Link>
            </Button>
            <PrintButton />
          </div>
        }
      />
      <section className="pb-16">
        <div className="container space-y-6">
          {/* Contact Info - Print Only */}
          <div className="hidden print:block mb-8">
            <h1 className="text-3xl font-bold mb-2">{persona.label}</h1>
            <p className="text-lg mb-4">{persona.role}</p>
            <div className="text-sm space-y-1">
              <p>Email: {persona.email}</p>
              <p>Location: {persona.location}</p>
              <p>Website: {persona.website}</p>
            </div>
          </div>

          {persona.timeline.map((entry) => (
            <Card key={`${entry.period}-${entry.title}`} className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{entry.period}</p>
              <div>
                <h2 className="text-2xl font-semibold">{entry.title}</h2>
                <p className="mt-1 text-sm text-primary">{entry.organization}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{entry.summary}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
