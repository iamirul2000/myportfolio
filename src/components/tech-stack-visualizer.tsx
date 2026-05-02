"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  category: string;
  level: number;
  color: string;
}

const techStack: TechItem[] = [
  { name: "Laravel", category: "Backend", level: 90, color: "bg-red-500" },
  { name: "PHP", category: "Backend", level: 90, color: "bg-indigo-500" },
  { name: "MySQL", category: "Database", level: 85, color: "bg-blue-500" },
  { name: "Angular", category: "Frontend", level: 80, color: "bg-red-600" },
  { name: "TypeScript", category: "Frontend", level: 85, color: "bg-blue-600" },
  { name: "JavaScript", category: "Frontend", level: 85, color: "bg-yellow-500" },
  { name: "Flutter", category: "Mobile", level: 75, color: "bg-cyan-500" },
  { name: "Swift", category: "Mobile", level: 70, color: "bg-orange-500" },
  { name: "REST APIs", category: "Backend", level: 90, color: "bg-green-500" },
  { name: "Git", category: "Tools", level: 85, color: "bg-orange-600" },
];

export function TechStackVisualizer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...new Set(techStack.map((t) => t.category))];

  const filteredTech =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === selectedCategory);

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-secondary">Technology Stack</h2>
          <p className="body-large mt-4">
            Interactive visualization of my technical skills and proficiency levels
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all focus-ring",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted-foreground/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bubble Chart */}
        <div className="mx-auto max-w-5xl">
          <Card className="card-spacing">
            <div className="flex min-h-[400px] flex-wrap items-center justify-center gap-4 p-8">
              {filteredTech.map((tech) => {
                const size = tech.level * 1.5; // Scale size based on level
                return (
                  <div
                    key={tech.name}
                    className="group relative transition-transform hover:scale-110"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                  >
                    <div
                      className={cn(
                        "flex h-full w-full items-center justify-center rounded-full shadow-lg transition-all group-hover:shadow-2xl",
                        tech.color
                      )}
                    >
                      <span className="text-center text-xs font-bold text-white">
                        {tech.name}
                      </span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
                      {tech.category} • {tech.level}% proficiency
                      <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
            <span>Larger = Higher Proficiency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
            <span>Hover for Details</span>
          </div>
        </div>
      </div>
    </section>
  );
}
