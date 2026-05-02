"use client";

import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";
import { getActivePersona } from "@/data/portfolio-config";
import { useMemo } from "react";

export function ProjectStats() {
  const persona = getActivePersona();

  const stats = useMemo(() => {
    const projects = persona.projects;
    const technologies = new Set<string>();
    const companies = new Set<string>();

    projects.forEach((project) => {
      project.techStack.forEach((tech) => technologies.add(tech));
    });

    // Extract companies from project descriptions
    const companyNames = [
      "ABSS",
      "Asian Business Software Solutions",
      "Theta Edge Berhad",
      "TrackerHero",
    ];
    companyNames.forEach((company) => companies.add(company));

    return {
      totalProjects: projects.length,
      featuredProjects: projects.filter((p) => p.featured).length,
      technologies: technologies.size,
      companies: companies.size,
      yearsExperience: 3,
    };
  }, [persona.projects]);

  const statItems = [
    {
      label: "Total Projects",
      value: stats.totalProjects,
      icon: "📁",
      description: "Completed projects",
    },
    {
      label: "Years Experience",
      value: stats.yearsExperience,
      icon: "⏱️",
      description: "Professional work",
      suffix: "+",
    },
    {
      label: "Technologies",
      value: stats.technologies,
      icon: "⚡",
      description: "Tools & frameworks",
    },
    {
      label: "Companies",
      value: stats.companies,
      icon: "🏢",
      description: "Organizations",
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statItems.map((stat) => (
            <Card
              key={stat.label}
              className="group relative overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-2">
                <div className="text-3xl">{stat.icon}</div>
                <div className="text-3xl font-bold tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
