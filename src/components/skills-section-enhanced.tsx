"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { getActivePersona } from "@/data/portfolio-config";
import { motion } from "framer-motion";
import { Code2, Database, Wrench, Smartphone, TrendingUp, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    name: "Backend",
    icon: Database,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs"]
  },
  {
    name: "Frontend",
    icon: Code2,
    color: "from-purple-500/20 to-pink-500/20",
    skills: ["Angular", "TypeScript", "JavaScript", "Vue.js"]
  },
  {
    name: "Mobile",
    icon: Smartphone,
    color: "from-green-500/20 to-emerald-500/20",
    skills: ["Flutter", "Swift", "Ionic"]
  },
  {
    name: "Operations",
    icon: Wrench,
    color: "from-orange-500/20 to-amber-500/20",
    skills: ["Bug Fixing", "Testing", "Production Support"]
  }
];

const proficiencyLevels = {
  "Laravel": 90,
  "PHP": 90,
  "MySQL": 85,
  "Angular": 80,
  "TypeScript": 80,
  "JavaScript": 85,
  "Flutter": 75,
  "Swift": 70,
  "REST APIs": 85,
  "Bug Fixing": 95,
  "Testing": 90,
  "Production Support": 95
};

export function SkillsSectionEnhanced() {
  const persona = getActivePersona();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <AnimatedSection className="py-16">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Expertise"
          title="What I work with"
          description="I work across backend development, web applications, APIs, databases, and mobile product support, with day-to-day experience in Laravel, PHP, MySQL, Angular, TypeScript, JavaScript, Flutter, and Swift."
        />

        {/* Skills Grid with Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-muted/60 p-2">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {category.name}
                      </p>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-sm"
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Bars */}
        <Card>
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Proficiency Levels</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(proficiencyLevels).map(([skill, level]) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{skill}</span>
                  <span className="text-muted-foreground">{level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Tools & Stack */}
        <Card>
          <p className="mb-5 text-sm uppercase tracking-[0.18em] text-muted-foreground">Tools & Stack</p>
          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            {persona.tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-2xl bg-gradient-to-br from-muted/60 to-muted/40 px-4 py-3 text-center font-medium shadow-sm transition-all hover:shadow-md"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Years Experience", value: "3+", icon: TrendingUp },
            { label: "Technologies", value: persona.skills.length.toString(), icon: Code2 },
            { label: "Product Environments", value: "4", icon: Wrench }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="mx-auto mb-3 w-fit rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
