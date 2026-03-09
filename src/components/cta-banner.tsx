import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getActivePersona } from "@/data/portfolio-config";

export function CtaBanner() {
  const persona = getActivePersona();

  return (
    <section className="py-16">
      <div className="container">
        <div className="mesh-panel overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950 px-8 py-10 text-slate-50 shadow-glow sm:px-12 sm:py-14 dark:border-cyan-300/15">
          <div className="absolute" aria-hidden="true" />
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/80">Get in touch</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Interested in my work or experience?</h2>
              <p className="text-slate-200/80">Reach out if you would like to connect about my experience, current role, or future opportunities.</p>
            </div>
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-cyan-50">
              <Link href="/contact">
                Contact {persona.label.split(" ")[0]}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}