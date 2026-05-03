"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  Code2, 
  Smartphone, 
  Database, 
  Zap,
  CheckCircle2,
  TrendingUp,
  Award
} from "lucide-react";

const workHighlights = [
  {
    icon: Briefcase,
    title: "Production Systems",
    value: "6+",
    description: "Live products maintained",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Code2,
    title: "Bug Fixes",
    value: "150+",
    description: "Issues resolved",
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Zap,
    title: "Features",
    value: "40+",
    description: "Enhancements delivered",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Database,
    title: "Backend Work",
    value: "60%",
    description: "Primary focus area",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const keyAchievements = [
  "Built and maintained Laravel-based business systems",
  "Developed Flutter mobile apps with payment integrations",
  "Maintained iOS applications in Swift",
  "Delivered REST APIs for cross-platform products",
  "Handled production bug fixes and data patching",
  "Supported live business software at ABSS"
];

export function WorkHighlightsHero() {
  return (
    <AnimatedSection className="py-12">
      <div className="container space-y-8">
        {/* Main Highlights Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 transition-opacity`}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="relative space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="rounded-lg bg-muted/60 p-2 transition-all group-hover:bg-primary/10">
                        <Icon className="h-5 w-5 transition-colors group-hover:text-primary" />
                      </div>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{highlight.value}</div>
                      <div className="mt-1 text-sm font-semibold">{highlight.title}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{highlight.description}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Key Achievements */}
        <Card className="bg-gradient-to-br from-background/50 to-muted/30">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Key Achievements</h3>
                <p className="text-xs text-muted-foreground">Highlights from recent work</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>

        {/* Experience Summary */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Years Experience", value: "3+", icon: Briefcase },
            { label: "Technologies", value: "12+", icon: Code2 },
            { label: "Companies", value: "3", icon: Smartphone }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="mx-auto mb-2 w-fit rounded-full bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
