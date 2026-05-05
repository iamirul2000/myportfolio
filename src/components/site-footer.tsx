import { Github as GitHubIcon, Linkedin as LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";

import { getActivePersona, portfolioConfig } from "@/data/portfolio-config";
import { FooterPerformanceMetrics } from "@/components/footer-performance-metrics";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedinIcon,
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
              <FooterPerformanceMetrics />

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
