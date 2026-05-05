import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getActivePersona } from "@/data/portfolio-config";

export function CtaBanner() {
  const persona = getActivePersona();

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="mesh-panel relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-8 py-12 text-slate-50 shadow-2xl sm:px-12 sm:py-16 dark:border-cyan-300/15">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px]" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/80">Open to engineering conversations</p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <h2 className="heading-secondary text-white">Hiring for a full stack or backend-leaning role?</h2>
                <p className="body-large text-slate-200/90">I&apos;m happy to connect about software engineering opportunities, product work, or a closer look at my experience.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-white text-slate-950 shadow-lg transition-all hover:scale-105 hover:bg-cyan-50 hover:shadow-xl focus-ring">
                  <Link href="/contact">
                    Contact Me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 hover:shadow-xl">
                  <Link href={persona.resumeFile} target="_blank">
                    Download Resume
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
