import { SectionHeading } from "@/components/section-heading";
import { getActivePersona } from "@/data/portfolio-config";

export function FaqSection() {
  const persona = getActivePersona();

  return (
    <section className="py-16">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Useful for freelancers, agencies, and service-led portfolios"
          description="A premium portfolio converts better when it answers objections before the call ever happens."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {persona.faq.map((item) => (
            <div key={item.question} className="rounded-3xl border border-border/70 bg-background/70 p-6">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
