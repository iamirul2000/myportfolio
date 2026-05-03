"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, GitCompare } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio-config";
import Link from "next/link";
import Image from "next/image";

interface ProjectComparisonProps {
  projects: readonly Project[];
}

export function ProjectComparison({ projects }: ProjectComparisonProps) {
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleProject = (project: Project) => {
    if (selectedProjects.find((p) => p.slug === project.slug)) {
      setSelectedProjects(selectedProjects.filter((p) => p.slug !== project.slug));
    } else if (selectedProjects.length < 3) {
      setSelectedProjects([...selectedProjects, project]);
    }
  };

  const clearComparison = () => {
    setSelectedProjects([]);
    setIsOpen(false);
  };

  if (selectedProjects.length === 0) return null;

  return (
    <>
      {/* Floating Compare Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-ring md:bottom-4"
      >
        <GitCompare className="h-4 w-4" />
        Compare ({selectedProjects.length})
      </button>

      {/* Comparison Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-x-4 bottom-4 top-20 z-50 overflow-auto rounded-2xl border border-border bg-background p-6 shadow-2xl md:inset-x-auto md:left-1/2 md:w-full md:max-w-6xl md:-translate-x-1/2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Project Comparison</h2>
              <Button variant="ghost" size="sm" onClick={clearComparison}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {selectedProjects.map((project) => (
                <Card key={project.slug} className="card-spacing">
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                        Category
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(Array.isArray(project.category)
                          ? project.category
                          : [project.category]
                        ).map((cat) => (
                          <Badge key={cat}>
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="rounded-full border border-border bg-muted px-3 py-1 text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                        Key Results
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-muted-foreground">
                            • {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link href={`/projects/${project.slug}`}>View Details</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleProject(project)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Project Selection UI */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Select Projects to Compare (max 3)
          </h3>
          {selectedProjects.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearComparison}>
              Clear All
            </Button>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isSelected = selectedProjects.find((p) => p.slug === project.slug);
            const isDisabled = !isSelected && selectedProjects.length >= 3;

            return (
              <button
                key={project.slug}
                onClick={() => !isDisabled && toggleProject(project)}
                disabled={isDisabled}
                className={cn(
                  "group relative overflow-hidden rounded-lg border transition-all focus-ring text-left",
                  isSelected
                    ? "border-primary bg-primary/5 ring-2 ring-primary"
                    : "border-border hover:border-primary/50",
                  isDisabled && "cursor-not-allowed opacity-50"
                )}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium">{project.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {Array.isArray(project.category)
                      ? project.category.join(", ")
                      : project.category}
                  </p>
                </div>
                {isSelected && (
                  <div className="absolute right-2 top-2 rounded-full bg-primary p-1">
                    <X className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
