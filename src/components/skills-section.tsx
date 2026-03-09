import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { getActivePersona } from "@/data/portfolio-config";

export function SkillsSection() {
  const persona = getActivePersona();

  return (
    <AnimatedSection className="py-16">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Expertise"
          title="Core skills and working stack"
          description="The main technologies, product work, and support areas that shape how I contribute as an engineer."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Skills</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {persona.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border/70 px-4 py-2 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Tools & Stack</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {persona.tools.map((tool) => (
                <div key={tool} className="rounded-2xl bg-muted/60 px-4 py-3">
                  {tool}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
