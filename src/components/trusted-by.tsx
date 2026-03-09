import { AnimatedSection } from "@/components/animated-section";
import { getActivePersona } from "@/data/portfolio-config";

export function TrustedBy() {
  const persona = getActivePersona();

  return (
    <AnimatedSection className="py-8">
      <div className="container rounded-3xl border border-border/70 bg-background/70 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Current work and product context</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {persona.trustedBy.map((brand) => (
            <div key={brand} className="rounded-2xl border border-border/70 px-4 py-5 text-center text-sm font-medium text-muted-foreground">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
