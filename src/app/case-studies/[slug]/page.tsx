import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { getCaseStudyBySlug } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return buildMetadata({ title: "Case study not found", description: "Missing case study entry." });
  }

  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Case Study" title={study.title} description={study.summary} />
      <section className="pb-16">
        <div className="container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Role</p>
            <p className="text-lg font-semibold">{study.role}</p>
            <p className="pt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">Duration</p>
            <p className="text-lg font-semibold">{study.duration}</p>
            <p className="pt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">Outcomes</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              {study.outcomes.map((outcome) => (
                <p key={outcome}>{outcome}</p>
              ))}
            </div>
          </Card>
          <div className="space-y-6">
            {study.sections.map((section) => (
              <Card key={section.title} className="space-y-3">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">{section.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}