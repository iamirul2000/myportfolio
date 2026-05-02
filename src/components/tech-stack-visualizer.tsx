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
  { name: "Laravel", category: "Backend", level: 90, color: "#f87171" },
  { name: "PHP", category: "Backend", level: 90, color: "#818cf8" },
  { name: "MySQL", category: "Database", level: 85, color: "#60a5fa" },
  { name: "Angular", category: "Frontend", level: 80, color: "#fb7185" },
  { name: "TypeScript", category: "Frontend", level: 85, color: "#3b82f6" },
  { name: "JavaScript", category: "Frontend", level: 85, color: "#fbbf24" },
  { name: "Flutter", category: "Mobile", level: 75, color: "#22d3ee" },
  { name: "Swift", category: "Mobile", level: 70, color: "#fb923c" },
  { name: "REST APIs", category: "Backend", level: 90, color: "#4ade80" },
  { name: "Git", category: "Tools", level: 85, color: "#f97316" },
];

export function TechStackVisualizer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const categories = ["All", ...new Set(techStack.map((t) => t.category))];

  const filteredTech =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === selectedCategory);

  // Calculate total for percentage
  const total = filteredTech.reduce((sum, tech) => sum + tech.level, 0);
  
  // Calculate pie chart segments
  let currentAngle = -90; // Start from top
  const segments = filteredTech.map((tech) => {
    const percentage = (tech.level / total) * 100;
    const angle = (percentage / 100) * 360;
    const segment = {
      ...tech,
      percentage,
      startAngle: currentAngle,
      endAngle: currentAngle + angle,
    };
    currentAngle += angle;
    return segment;
  });

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-secondary">Technology Stack</h2>
          <p className="body-large mt-4">
            Distribution of my technical skills and proficiency levels
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

        {/* Pie Chart */}
        <div className="mx-auto max-w-6xl">
          <Card className="card-spacing">
            <div className="flex flex-col items-center gap-8 p-8 lg:gap-12">
              {/* SVG Pie Chart */}
              <div className="relative">
                <svg
                  width="320"
                  height="320"
                  viewBox="0 0 320 320"
                  className="transform transition-transform"
                >
                  {segments.map((segment, index) => {
                    const radius = 140;
                    const centerX = 160;
                    const centerY = 160;
                    
                    // Convert angles to radians
                    const startRad = (segment.startAngle * Math.PI) / 180;
                    const endRad = (segment.endAngle * Math.PI) / 180;
                    
                    // Calculate arc path
                    const x1 = centerX + radius * Math.cos(startRad);
                    const y1 = centerY + radius * Math.sin(startRad);
                    const x2 = centerX + radius * Math.cos(endRad);
                    const y2 = centerY + radius * Math.sin(endRad);
                    
                    const largeArc = segment.endAngle - segment.startAngle > 180 ? 1 : 0;
                    
                    const pathData = [
                      `M ${centerX} ${centerY}`,
                      `L ${x1} ${y1}`,
                      `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                      'Z'
                    ].join(' ');

                    const isHovered = hoveredTech === segment.name;
                    const scale = isHovered ? 1.05 : 1;
                    
                    return (
                      <g
                        key={segment.name}
                        onMouseEnter={() => setHoveredTech(segment.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        style={{
                          transformOrigin: `${centerX}px ${centerY}px`,
                          transform: `scale(${scale})`,
                          transition: 'transform 0.2s ease',
                          cursor: 'pointer',
                        }}
                      >
                        <path
                          d={pathData}
                          fill={segment.color}
                          stroke="white"
                          strokeWidth="2"
                          opacity={hoveredTech && !isHovered ? 0.5 : 1}
                        />
                      </g>
                    );
                  })}
                  
                  {/* Center circle for donut effect */}
                  <circle
                    cx="160"
                    cy="160"
                    r="60"
                    fill="hsl(var(--background))"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                  />
                  
                  {/* Center text */}
                  <text
                    x="160"
                    y="155"
                    textAnchor="middle"
                    className="fill-foreground text-sm font-semibold"
                  >
                    {selectedCategory}
                  </text>
                  <text
                    x="160"
                    y="175"
                    textAnchor="middle"
                    className="fill-muted-foreground text-xs"
                  >
                    {filteredTech.length} skills
                  </text>
                </svg>
              </div>

              {/* Legend */}
              <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-2">
                {segments.map((segment) => {
                  const isHovered = hoveredTech === segment.name;
                  return (
                    <div
                      key={segment.name}
                      onMouseEnter={() => setHoveredTech(segment.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border p-3 transition-all cursor-pointer",
                        isHovered 
                          ? "border-primary/30 bg-primary/5 shadow-md scale-[1.02]" 
                          : "border-border/30 bg-card/50 hover:bg-card/80"
                      )}
                    >
                      <div
                        className="h-4 w-4 flex-shrink-0 rounded-sm shadow-sm"
                        style={{ backgroundColor: segment.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{segment.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {segment.category}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-semibold">
                          {segment.percentage.toFixed(1)}%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {segment.level}% skill
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Hover over segments to highlight • Percentages based on proficiency levels
        </div>
      </div>
    </section>
  );
}
