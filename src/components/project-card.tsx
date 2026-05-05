import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Target } from "lucide-react";

import type { Project } from "@/data/portfolio-config";
import { ProjectBadges } from "@/components/project-badges";

interface ProjectCardProps {
  project: Project;
  isPersonal?: boolean;
  isLatest?: boolean;
}

export function ProjectCard({ project, isPersonal, isLatest }: ProjectCardProps) {
  const categories = Array.isArray(project.category) ? project.category : [project.category];
  const projectType = isPersonal ? "Personal Project" : "Company Work";
  const hasDemo = project.links.some(link => link.label.toLowerCase().includes('demo'));
  const hasCaseStudy = project.links.some(link => link.label.toLowerCase().includes('case study'));

  return (
    <Link href={`/projects/${project.slug}`} className="group block rounded-3xl border border-border/70 bg-background/70 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden rounded-[1.25rem] border border-border/70 bg-muted/40">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={1200}
          height={800}
          className="aspect-[16/11] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-b from-black/40 to-transparent p-3">
          <div className="flex flex-wrap gap-2">
            {project.featured && (
              <span className="rounded-full bg-amber-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Featured
              </span>
            )}
            <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {projectType}
            </span>
            {hasDemo && (
              <span className="rounded-full bg-blue-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Demo Available
              </span>
            )}
            {hasCaseStudy && (
              <span className="rounded-full bg-green-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Case Study
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-primary">{categories.join(" / ")}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
        </div>
        
        {/* Summary */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Summary</p>
          <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
        </div>
        
        {/* Tech Stack */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs">
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Impact */}
        {project.results && project.results.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Impact</p>
            <div className="flex items-start gap-2">
              <Target className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.results[0]}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
