import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { GitHubStats } from "@/components/github-stats";
import { SkillBars } from "@/components/skill-bars";
import { getActivePersona } from "@/data/portfolio-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Background and profile for Amirul Iman.",
  path: "/about"
});

export default function AboutPage() {
  const persona = getActivePersona();

  return (
    <>
      <PageHero eyebrow="About" title={`About ${persona.label}`} description={persona.shortBio} />
      <section className="pb-16">
        <div className="container grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="space-y-5">
            <h2 className="text-2xl font-semibold">Engineering summary</h2>
            {persona.longBio.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            ))}
          </Card>
          <div className="grid gap-6">
            <Card>
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {persona.skills.map((item) => (
                  <span key={item} className="rounded-full bg-muted px-3 py-2 text-sm text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Tools</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                {persona.tools.map((item) => (
                  <div key={item} className="rounded-2xl border border-border/70 p-3">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <GitHubStats />
          </div>
        </div>
      </section>
      <SkillBars />
    </>
  );
}
