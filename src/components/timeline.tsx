import { SectionHeading } from "@/components/section-heading";
import { getActivePersona } from "@/data/portfolio-config";

export function Timeline() {
  const persona = getActivePersona();

  return (
    <section className="py-16">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="A quick look at the roles and product work that shape my current engineering experience."
        />
        <div className="space-y-6">
          {persona.timeline.map((entry) => (
            <div key={`${entry.period}-${entry.title}`} className="relative rounded-3xl border border-border/70 bg-background/70 p-6 pl-8">
              <div className="absolute left-3 top-8 h-3 w-3 rounded-full bg-primary" />
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{entry.period}</p>
              <h3 className="mt-3 text-2xl font-semibold">{entry.title}</h3>
              <p className="mt-1 text-sm text-primary">{entry.organization}</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{entry.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
