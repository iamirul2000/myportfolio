import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/portfolio-config";

export function ProjectCard({ project }: { project: Project }) {
  const categories = Array.isArray(project.category) ? project.category : [project.category];

  return (
    <Link href={`/projects/${project.slug}`} className="group block rounded-3xl border border-border/70 bg-background/70 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="overflow-hidden rounded-[1.25rem] border border-border/70 bg-muted/40">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={1200}
          height={800}
          className="aspect-[16/11] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-primary">{categories.join(" / ")}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
