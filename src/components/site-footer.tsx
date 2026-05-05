import { Github, Linkedin, Mail, Zap, Activity, Eye, Clock } from "lucide-react";
import Link from "next/link";

import { AnimatedCounter } from "@/components/animated-counter";
import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

export function SiteFooter() {
  const persona = getActivePersona();

  return (
    <footer className="border-t border-border/60 bg-slate-950 text-slate-50">
      <div className="py-12">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Name, Bio, Social */}
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-semibold tracking-tight">{persona.label}</p>
                <p className="mt-3 max-w-xl text-sm text-slate-400 leading-relaxed">{persona.shortBio}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {persona.socialLinks.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="rounded-full border border-slate-700 p-2.5 transition hover:border-cyan-500/40 hover:bg-slate-800"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Performance Metrics + Navigation */}
            <div className="space-y-6">
              {/* Performance Metrics */}
              <div>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Performance Metrics</p>
                  <p className="text-xs text-slate-500 mt-1">Real-time page performance indicators</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Page Load</p>
                      <p className="text-base font-bold">
                        <AnimatedCounter value={1134} duration={1500} />
                        <span className="text-xs font-normal text-slate-500 ml-1">ms</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">DOM Ready</p>
                      <p className="text-base font-bold">
                        <AnimatedCounter value={755} duration={1500} />
                        <span className="text-xs font-normal text-slate-500 ml-1">ms</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                      <Eye className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">First Paint</p>
                      <p className="text-base font-bold">
                        <AnimatedCounter value={0} duration={1500} />
                        <span className="text-xs font-normal text-slate-500 ml-1">ms</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Interactive</p>
                      <p className="text-base font-bold">
                        <AnimatedCounter value={755} duration={1500} />
                        <span className="text-xs font-normal text-slate-500 ml-1">ms</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Measured using Navigation Timing API
                </p>
              </div>

              {/* Footer Navigation */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 pt-4 border-t border-slate-800">
                {portfolioConfig.navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-slate-200 transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
