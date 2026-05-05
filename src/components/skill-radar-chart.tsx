"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Backend", level: 90, color: "#3b82f6" },
  { name: "Database", level: 85, color: "#8b5cf6" },
  { name: "Frontend", level: 80, color: "#06b6d4" },
  { name: "Mobile", level: 75, color: "#10b981" },
  { name: "APIs", level: 90, color: "#f59e0b" },
  { name: "Debugging", level: 90, color: "#ef4444" },
];

export function SkillRadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);
      
      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimationProgress(eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 60;
    const levels = 5;

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw background circles
    ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
    ctx.lineWidth = 1;
    for (let i = 1; i <= levels; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (maxRadius / levels) * i, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw axes
    const angleStep = (Math.PI * 2) / skills.length;
    ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
    ctx.lineWidth = 1;

    skills.forEach((_, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    });

    // Draw skill polygon
    ctx.beginPath();
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius * animationProgress;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();

    // Fill
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.05)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // Stroke
    ctx.strokeStyle = "rgba(59, 130, 246, 0.8)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw points
    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius * animationProgress;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = skill.color;
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw labels
    ctx.fillStyle = "rgb(71, 85, 105)";
    ctx.font = "600 13px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    skills.forEach((skill, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const labelRadius = maxRadius + 35;
      const x = centerX + Math.cos(angle) * labelRadius;
      const y = centerY + Math.sin(angle) * labelRadius;

      // Draw skill name
      ctx.fillText(skill.name, x, y);
      
      // Draw percentage
      ctx.font = "500 11px Inter, sans-serif";
      ctx.fillStyle = "rgb(148, 163, 184)";
      ctx.fillText(`${Math.round(skill.level * animationProgress)}%`, x, y + 16);
      ctx.font = "600 13px Inter, sans-serif";
      ctx.fillStyle = "rgb(71, 85, 105)";
    });

  }, [animationProgress]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Technical Proficiency</h2>
          <p className="mt-2 text-muted-foreground">
            Skills developed through hands-on project work
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-border bg-background p-8">
            <canvas
              ref={canvasRef}
              className="w-full"
              style={{ height: "500px" }}
            />
          </div>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 rounded-lg border border-border bg-background p-3">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
                <div>
                  <p className="text-sm font-medium">{skill.name}</p>
                  <p className="text-xs text-muted-foreground">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
