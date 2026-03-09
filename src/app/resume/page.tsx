import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
        description="Download my resume and review my current role, timeline, and product experience."
        aside={
          <Button asChild size="lg">
            <Link href={persona.resumeFile} download>
              Download PDF resume
            </Link>
          </Button>
        }
      />
      <section className="pb-16">
        <div className="container space-y-6">
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
