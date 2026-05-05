"use client";

import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";
import { getActivePersona } from "@/data/portfolio-config";
import { useMemo } from "react";

export function ProjectStats() {
  const persona = getActivePersona();

  const stats = useMemo(() => {
    const projects = persona.projects;
    const companyProjects = projects.filter(p => 
      p.slug === 'financio' || 
      p.slug === 'poslite' || 
      p.slug === 'sakupay' ||
      p.slug === 'pigrimpro' ||
      p.slug === 'trackerhero'
    );
    const personalProjects = projects.filter(p => 
      p.slug === 'moneyplan-budget-planner' || 
      p.slug === 'workshopflow' ||
      p.slug === 'restaurant-starter' ||
      p.slug === 'clinic-booking'
    );
    
    // Systems Worked On: 4 total career systems (POSLite, SakuPay, PilgrimPro, Financio)
    // Production Systems: 2 went live (SakuPay, Financio)
    const systemsWorkedOn = 4;

    return {
      totalProjects: projects.length,
      companyWork: companyProjects.length,
      personalBuilds: personalProjects.length,
      systemsWorkedOn: systemsWorkedOn,
    };
  }, [persona.projects]);

  const statItems = [
    {
      label: "Projects",
      value: stats.totalProjects,
      icon: "📁",
      description: "Total completed",
    },
    {
      label: "Company Work",
      value: stats.companyWork,
      icon: "🏢",
      description: "Production contributions",
    },
    {
      label: "Personal Builds",
      value: stats.personalBuilds,
      icon: "⚡",
      description: "Side projects",
    },
    {
      label: "Systems Worked On",
      value: stats.systemsWorkedOn,
      icon: "🚀",
      description: "Career total",
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
                  <AnimatedCounter value={stat.value} />
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
