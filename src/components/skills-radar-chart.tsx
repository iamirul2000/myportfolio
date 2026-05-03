"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SkillData {
  skill: string;
  level: number;
  category: string;
}

interface SkillsRadarChartProps {
  skills?: SkillData[];
}

const defaultSkills: SkillData[] = [
  { skill: "Laravel/PHP", level: 90, category: "Backend" },
  { skill: "MySQL", level: 85, category: "Database" },
  { skill: "REST APIs", level: 90, category: "Backend" },
  { skill: "Angular", level: 80, category: "Frontend" },
  { skill: "TypeScript", level: 85, category: "Frontend" },
  { skill: "Flutter", level: 75, category: "Mobile" },
  { skill: "Swift/iOS", level: 70, category: "Mobile" },
  { skill: "Git", level: 85, category: "Tools" },
];

export function SkillsRadarChart({ skills = defaultSkills }: SkillsRadarChartProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const centerX = 200;
  const centerY = 200;
  const maxRadius = 150;
  const levels = 5;

  // Calculate points for each skill
  const angleStep = (2 * Math.PI) / skills.length;
  const points = skills.map((skill, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const radius = (skill.level / 100) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      labelX: centerX + (maxRadius + 40) * Math.cos(angle),
      labelY: centerY + (maxRadius + 40) * Math.sin(angle),
      skill: skill.skill,
      level: skill.level,
      category: skill.category,
      angle,
    };
  });

  // Create polygon path
  const polygonPath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  // Create grid circles
  const gridCircles = Array.from({ length: levels }, (_, i) => {
    const radius = ((i + 1) / levels) * maxRadius;
    return radius;
  });

  // Create axis lines
  const axisLines = points.map((p) => ({
    x1: centerX,
    y1: centerY,
    x2: centerX + maxRadius * Math.cos(p.angle),
    y2: centerY + maxRadius * Math.sin(p.angle),
  }));

  return (
    <Card className="card-spacing">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Skills Proficiency</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Interactive radar chart showing technical skill levels
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center">
        {/* Radar Chart */}
        <div className="relative flex-shrink-0">
          <svg width="500" height="500" viewBox="0 0 400 400" className="max-w-full">
            {/* Grid circles */}
            {gridCircles.map((radius, i) => (
              <circle
                key={i}
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                opacity={0.3}
              />
            ))}

            {/* Axis lines */}
            {axisLines.map((line, i) => (
              <line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="hsl(var(--border))"
                strokeWidth="1"
                opacity={0.3}
              />
            ))}

            {/* Skill polygon */}
            <path
              d={polygonPath}
              fill="hsl(var(--primary))"
              fillOpacity={hoveredSkill ? 0.1 : 0.2}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="transition-all duration-300"
            />

            {/* Data points */}
            {points.map((point, i) => {
              const isHovered = hoveredSkill === point.skill;
              return (
                <g key={i}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isHovered ? 8 : 6}
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredSkill(point.skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  />
                  {isHovered && (
                    <text
                      x={point.x}
                      y={point.y - 15}
                      textAnchor="middle"
                      className="fill-primary text-xs font-semibold"
                    >
                      {point.level}%
                    </text>
                  )}
                </g>
              );
            })}

            {/* Labels */}
            {points.map((point, i) => {
              const isHovered = hoveredSkill === point.skill;
              return (
                <text
                  key={i}
                  x={point.labelX}
                  y={point.labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={cn(
                    "text-xs font-medium transition-all duration-200",
                    isHovered ? "fill-primary" : "fill-foreground"
                  )}
                  onMouseEnter={() => setHoveredSkill(point.skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ cursor: "pointer" }}
                >
                  {point.skill}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="w-full space-y-3 lg:w-80">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Skills Breakdown
          </h4>
          {skills.map((skill) => {
            const isHovered = hoveredSkill === skill.skill;
            return (
              <div
                key={skill.skill}
                onMouseEnter={() => setHoveredSkill(skill.skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={cn(
                  "cursor-pointer rounded-lg border p-3 transition-all",
                  isHovered
                    ? "border-primary/50 bg-primary/5 shadow-md"
                    : "border-border/30 bg-card/50 hover:bg-card"
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{skill.skill}</p>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{skill.level}%</p>
                  </div>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-muted-foreground">
        Hover over skills to highlight • Based on years of experience and project complexity
      </div>
    </Card>
  );
}
