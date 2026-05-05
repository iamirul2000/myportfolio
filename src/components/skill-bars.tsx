"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Laravel", level: 90, category: "Backend" },
  { name: "PHP", level: 90, category: "Backend" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Angular", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Flutter", level: 75, category: "Mobile" },
  { name: "Swift", level: 70, category: "Mobile" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Debugging", level: 90, category: "Skills" },
];

export function SkillBars() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Technical Proficiency</h2>
          <p className="mt-2 text-muted-foreground">
            Skills developed through hands-on project work
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category) => (
            <Card key={category}>
              <h3 className="mb-4 text-lg font-semibold">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          <AnimatedCounter value={skill.level} suffix="%" duration={1500} />
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
