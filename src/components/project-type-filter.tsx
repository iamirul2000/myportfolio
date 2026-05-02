"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/portfolio-config";
import { cn } from "@/lib/utils";

type ProjectType = "all" | "company" | "personal";

interface ProjectTypeFilterProps {
  companyProjects: Project[];
  personalProjects: Project[];
}

export function ProjectTypeFilter({ companyProjects, personalProjects }: ProjectTypeFilterProps) {
  const [activeType, setActiveType] = useState<ProjectType>("all");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allProjects = useMemo(
    () => [...companyProjects, ...personalProjects],
    [companyProjects, personalProjects]
  );

  const currentProjects = useMemo(() => {
    if (activeType === "company") return companyProjects;
    if (activeType === "personal") return personalProjects;
    return allProjects;
  }, [activeType, companyProjects, personalProjects, allProjects]);

  const categories = useMemo(
    () => [
      "All",
      ...new Set(
        currentProjects.flatMap((project) =>
          Array.isArray(project.category) ? project.category : [project.category]
        )
      ),
    ],
    [currentProjects]
  );

  const technologies = useMemo(() => {
    const techs = new Set<string>();
    currentProjects.forEach((project) => {
      project.techStack.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [currentProjects]);

  const filteredProjects = useMemo(() => {
    let filtered = currentProjects;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((project) => {
        const categories = Array.isArray(project.category)
          ? project.category
          : [project.category];
        return categories.includes(activeCategory as any);
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [currentProjects, activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search projects by name, technology, or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-full border border-border bg-background/70 px-6 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        )}
      </div>

      {/* Project Type Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Project Type</h3>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveType("all");
              setActiveCategory("All");
            }}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition",
              activeType === "all"
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-background/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            All Projects ({allProjects.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveType("company");
              setActiveCategory("All");
            }}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition",
              activeType === "company"
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-background/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            Company Work ({companyProjects.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveType("personal");
              setActiveCategory("All");
            }}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition",
              activeType === "personal"
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-background/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            Personal Projects ({personalProjects.length})
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
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
      </div>

      {/* Technology Tags */}
      <details className="group">
        <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
          Filter by Technology ({technologies.length} available) ▾
        </summary>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setSearchQuery(tech)}
              className="rounded-md border border-border/50 bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
            >
              {tech}
            </button>
          ))}
        </div>
      </details>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredProjects.length} of {currentProjects.length} projects
        {searchQuery && ` for "${searchQuery}"`}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
          <p className="text-lg font-medium">No projects found</p>
          <p className="mt-2 text-sm">
            Try adjusting your filters or search query
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
              setActiveType("all");
            }}
            className="mt-4 rounded-full border border-primary px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
