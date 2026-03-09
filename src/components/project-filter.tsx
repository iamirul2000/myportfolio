"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/portfolio-config";
import { cn } from "@/lib/utils";

const allLabel = "All";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => [allLabel, ...new Set(projects.map((project) => project.category))], [projects]);
  const [activeCategory, setActiveCategory] = useState<string>(allLabel);

  const filteredProjects = useMemo(() => {
    if (activeCategory === allLabel) {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              activeCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
          No projects in this category yet. Replace the demo content in `src/data/portfolio-config.ts` to add yours.
        </div>
      ) : null}
    </div>
  );
}
