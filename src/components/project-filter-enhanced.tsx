"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/empty-state";
import { CtaBanner } from "@/components/cta-banner";
import type { Project } from "@/data/portfolio-config";
import { cn } from "@/lib/utils";

type ProjectType = "all" | "company" | "personal";
type SortOption = "featured" | "newest" | "company" | "personal" | "az";

interface ProjectFilterEnhancedProps {
  companyProjects: Project[];
  personalProjects: Project[];
}

export function ProjectFilterEnhanced({ companyProjects, personalProjects }: ProjectFilterEnhancedProps) {
  const [activeType, setActiveType] = useState<ProjectType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showTechFilter, setShowTechFilter] = useState(false);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const allProjects = useMemo(
    () => [...companyProjects, ...personalProjects],
    [companyProjects, personalProjects]
  );

  const currentProjects = useMemo(() => {
    if (activeType === "company") return companyProjects;
    if (activeType === "personal") return personalProjects;
    return allProjects;
  }, [activeType, companyProjects, personalProjects, allProjects]);

  const technologies = useMemo(() => {
    const techs = new Set<string>();
    currentProjects.forEach((project) => {
      project.techStack.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [currentProjects]);

  const topTechnologies = useMemo(() => technologies.slice(0, 8), [technologies]);

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = currentProjects;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    // Filter by selected technologies
    if (selectedTechs.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTechs.some((tech) => project.techStack.includes(tech))
      );
    }

    // Sort projects
    const sorted = [...filtered];
    switch (sortBy) {
      case "featured":
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "newest":
        // Assuming projects are already in newest order
        break;
      case "company":
        sorted.sort((a, b) => {
          const aIsCompany = companyProjects.includes(a) ? 1 : 0;
          const bIsCompany = companyProjects.includes(b) ? 1 : 0;
          return bIsCompany - aIsCompany;
        });
        break;
      case "personal":
        sorted.sort((a, b) => {
          const aIsPersonal = personalProjects.includes(a) ? 1 : 0;
          const bIsPersonal = personalProjects.includes(b) ? 1 : 0;
          return bIsPersonal - aIsPersonal;
        });
        break;
      case "az":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return sorted;
  }, [currentProjects, searchQuery, selectedTechs, sortBy, companyProjects, personalProjects]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTechs([]);
    setActiveType("all");
    setSortBy("featured");
  };

  const hasActiveFilters = searchQuery || selectedTechs.length > 0 || activeType !== "all";

  return (
    <div className="space-y-8">
      {/* Search and Sort Bar */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-border bg-background/70 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="rounded-full border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="featured">Featured First</option>
          <option value="newest">Newest</option>
          <option value="company">Company Work</option>
          <option value="personal">Personal Projects</option>
          <option value="az">A–Z</option>
        </select>
      </div>

      {/* Project Type Tabs */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setActiveType("all")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition",
            activeType === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          All Projects ({allProjects.length})
        </button>
        <button
          onClick={() => setActiveType("company")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition",
            activeType === "company"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          Company Work ({companyProjects.length})
        </button>
        <button
          onClick={() => setActiveType("personal")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition",
            activeType === "personal"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          Personal ({personalProjects.length})
        </button>
        <button
          onClick={() => setShowTechFilter(!showTechFilter)}
          className={cn(
            "ml-auto flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition",
            showTechFilter || selectedTechs.length > 0
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Technologies {selectedTechs.length > 0 && `(${selectedTechs.length})`}
        </button>
      </div>

      {/* Technology Filter */}
      {showTechFilter && (
        <div className="rounded-2xl border border-border bg-muted/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Filter by Technology</h3>
            {selectedTechs.length > 0 && (
              <button
                onClick={() => setSelectedTechs([])}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear selection
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {topTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  selectedTechs.includes(tech)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:border-primary/50"
                )}
              >
                {tech}
              </button>
            ))}
            {technologies.length > 8 && (
              <button className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-primary/50">
                +{technologies.length - 8} more
              </button>
            )}
          </div>
        </div>
      )}

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-3">
          <p className="text-sm text-muted-foreground">
            Showing {filteredAndSortedProjects.length} of {currentProjects.length} projects
          </p>
          <button
            onClick={clearFilters}
            className="text-sm font-medium text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Projects Grid */}
      {filteredAndSortedProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isPersonal={personalProjects.includes(project)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No projects found"
          description="Try adjusting your search or filters to find what you're looking for."
          action={{
            label: "Clear filters",
            onClick: clearFilters,
          }}
        />
      )}

      {/* Bottom CTA */}
      <div className="pt-8">
        <CtaBanner />
      </div>
    </div>
  );
}
