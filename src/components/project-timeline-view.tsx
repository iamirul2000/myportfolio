"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/portfolio-config";
import { cn } from "@/lib/utils";

interface ProjectTimelineViewProps {
  companyProjects: Project[];
  personalProjects: Project[];
}

interface TimelineItem {
  year: string;
  projects: Array<{ project: Project; type: "company" | "personal" }>;
}

export function ProjectTimelineView({
  companyProjects,
  personalProjects,
}: ProjectTimelineViewProps) {
  const [isTimelineView, setIsTimelineView] = useState(false);

  // Group projects by year (you can customize this logic)
  const timelineData: TimelineItem[] = [
    {
      year: "2025 - Present",
      projects: [
        { project: companyProjects[0], type: "company" }, // Financio
        { project: personalProjects[0], type: "personal" }, // MoneyPlan
      ],
    },
    {
      year: "2023 - 2025",
      projects: [
        { project: companyProjects[1], type: "company" }, // PigrimPro
        { project: companyProjects[2], type: "company" }, // SakuPay
        { project: companyProjects[3], type: "company" }, // POSLite
        { project: personalProjects[1], type: "personal" }, // RestaurantStarter
        { project: personalProjects[2], type: "personal" }, // WorkshopFlow
      ],
    },
    {
      year: "2023",
      projects: [{ project: companyProjects[4], type: "company" }], // TrackerHero
    },
  ];

  if (!isTimelineView) {
    return (
      <button
        onClick={() => setIsTimelineView(true)}
        className="mb-6 rounded-full border border-border bg-background px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
      >
        📅 Switch to Timeline View
      </button>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => setIsTimelineView(false)}
        className="mb-6 rounded-full border border-border bg-background px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
      >
        🔲 Switch to Grid View
      </button>

      <div className="relative space-y-12">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-border lg:left-1/2" />

        {timelineData.map((item, index) => (
          <div key={item.year} className="relative">
            {/* Year marker */}
            <div className="sticky top-20 z-10 mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                <span className="text-sm font-bold">{item.year.split("-")[0]}</span>
              </div>
              <h3 className="text-2xl font-bold lg:hidden">{item.year}</h3>
            </div>

            {/* Projects */}
            <div className="space-y-8 pl-24 lg:pl-0">
              {item.projects.map((item, projectIndex) => {
                const isLeft = projectIndex % 2 === 0;
                return (
                  <div
                    key={item.project.slug}
                    className={cn(
                      "relative lg:w-[calc(50%-3rem)]",
                      isLeft ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                    )}
                  >
                    {/* Connector dot */}
                    <div
                      className={cn(
                        "absolute top-6 hidden h-4 w-4 rounded-full border-4 border-background bg-primary lg:block",
                        isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                      )}
                    />

                    <Link
                      href={`/projects/${item.project.slug}`}
                      className="group block rounded-2xl border border-border bg-background p-4 transition hover:shadow-lg"
                    >
                      <div className="flex gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.project.thumbnail}
                            alt={item.project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold group-hover:text-primary">
                              {item.project.title}
                            </h4>
                            <span
                              className={cn(
                                "rounded-full px-2 py-0.5 text-xs font-medium",
                                item.type === "company"
                                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                  : "bg-green-500/10 text-green-600 dark:text-green-400"
                              )}
                            >
                              {item.type === "company" ? "Company" : "Personal"}
                            </span>
                          </div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            {item.project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {item.project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
