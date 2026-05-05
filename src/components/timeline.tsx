import { SectionHeading } from "@/components/section-heading";
import { getActivePersona } from "@/data/portfolio-config";

export function Timeline() {
  const persona = getActivePersona();

  return (
    <section className="py-16 bg-slate-950">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">Experience</p>
          <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience across full stack product engineering, system maintenance, API integration, database design, mobile support, testing, and release-focused delivery in live software environments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {persona.timeline.map((entry, index) => (
            <div 
              key={`${entry.period}-${entry.title}`} 
              className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{entry.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{entry.organization}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  {index === 0 && (
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                      CURRENT
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {entry.period}
                  </span>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed">{entry.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
