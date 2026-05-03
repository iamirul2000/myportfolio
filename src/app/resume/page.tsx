import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/print-button";
import { ExperienceTimelineInteractive } from "@/components/experience-timeline-interactive";
import { SkillsRadarChart } from "@/components/skills-radar-chart";
import { PerformanceMetrics } from "@/components/performance-metrics";
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
        <div className="container space-y-12">
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

          {/* Skills Radar Chart */}
          <div className="no-print">
            <SkillsRadarChart />
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="mb-6 text-3xl font-semibold">Work Experience</h2>
            <ExperienceTimelineInteractive timeline={persona.timeline} />
          </div>

          {/* Performance Metrics */}
          <div className="no-print">
            <PerformanceMetrics />
          </div>
        </div>
      </section>
    </>
  );
}
