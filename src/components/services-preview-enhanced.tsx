"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getActivePersona } from "@/data/portfolio-config";
import {
  Bug,
  Sparkles,
  Globe,
  Smartphone,
  CreditCard,
  TestTube2,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target
} from "lucide-react";

const serviceIcons = {
  "Bug Fixing and Production Support": Bug,
  "Feature Enhancements": Sparkles,
  "Web App Maintenance": Globe,
  "Mobile App Support": Smartphone,
  "Payment and Terminal Integration": CreditCard,
  "Testing and Release Support": TestTube2
};

const serviceColors = {
  "Bug Fixing and Production Support": "from-red-500/20 to-orange-500/20",
  "Feature Enhancements": "from-purple-500/20 to-pink-500/20",
  "Web App Maintenance": "from-blue-500/20 to-cyan-500/20",
  "Mobile App Support": "from-green-500/20 to-emerald-500/20",
  "Payment and Terminal Integration": "from-yellow-500/20 to-amber-500/20",
  "Testing and Release Support": "from-indigo-500/20 to-violet-500/20"
};

const contributionMetrics = [
  { label: "Production Bugs Fixed", value: "40+", icon: Bug },
  { label: "Features Delivered", value: "10+", icon: Sparkles },
  { label: "Systems Maintained", value: "1", icon: Globe }
];

export function ServicesPreviewEnhanced() {
  const persona = getActivePersona();
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Contribution Areas"
            title="How I usually contribute"
            description="The engineering work I contribute most often across backend support, feature delivery, debugging, and product maintenance."
          />

          {/* Contribution Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {contributionMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center">
                    <div className="mx-auto mb-2 w-fit rounded-full bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{metric.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {persona.services.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || Target;
            const colorGradient = serviceColors[service.title as keyof typeof serviceColors] || "from-gray-500/20 to-gray-600/20";
            const isExpanded = expandedService === service.title;
            const isHovered = hoveredService === service.title;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card className="group relative h-full overflow-hidden transition-all hover:shadow-xl">
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-0 transition-opacity`}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  />

                  <div className="relative flex h-full flex-col justify-between gap-6">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="rounded-xl bg-muted/60 p-3 transition-all group-hover:bg-primary/10">
                          <Icon className="h-6 w-6 transition-colors group-hover:text-primary" />
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setExpandedService(isExpanded ? null : service.title)}
                          className="rounded-full bg-muted/60 p-2 transition-all hover:bg-primary/10"
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </motion.button>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <TrendingUp className="h-3 w-3" />
                        Key Deliverables
                      </div>
                      <AnimatePresence>
                        <div className="space-y-2">
                          {service.deliverables.slice(0, isExpanded ? undefined : 3).map((item, idx) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </AnimatePresence>

                      {service.deliverables.length > 3 && !isExpanded && (
                        <button
                          onClick={() => setExpandedService(service.title)}
                          className="text-xs text-primary hover:underline"
                        >
                          +{service.deliverables.length - 3} more
                        </button>
                      )}
                    </div>

                    {/* Hover Effect Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: isHovered ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contribution Breakdown */}
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Contribution Breakdown</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              How my engineering work is typically distributed
            </p>
          </div>
          <div className="space-y-4">
            {[
              { area: "Bug Fixing & Production Support", percentage: 40, color: "bg-red-500" },
              { area: "Feature Enhancements", percentage: 30, color: "bg-purple-500" },
              { area: "System Maintenance", percentage: 20, color: "bg-blue-500" },
              { area: "Testing & Release Support", percentage: 10, color: "bg-green-500" }
            ].map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.area}</span>
                  <span className="text-muted-foreground">{item.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Want to learn more about my engineering approach and experience?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="default" size="lg">
              <Link href="/about#focus-areas">
                View All Focus Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
