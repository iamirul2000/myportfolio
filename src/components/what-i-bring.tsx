"use client";

import { CheckCircle2, Code2, Wrench, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";

const contributions = [
  {
    icon: Wrench,
    title: "Production Support & Stability",
    description: "I investigate issues in live systems, identify root causes, and deliver safe fixes that keep products stable. My work at ABSS on Financio involves daily bug fixing, data patching, and maintaining system reliability for business-critical operations.",
    proof: [
      { text: "production issues resolved", value: 40, suffix: "+" },
      { text: "Zero critical regressions introduced", value: null },
      { text: "Same-day turnaround for urgent fixes", value: null }
    ]
  },
  {
    icon: Code2,
    title: "Backend-Heavy Feature Delivery",
    description: "I build and enhance features across Laravel, PHP, MySQL, and REST APIs. From database schema improvements to API endpoint development, I focus on maintainable, efficient backend solutions that fit existing business logic.",
    proof: [
      { text: "features delivered across 6 products", value: 10, suffix: "+" },
      { text: "Database optimization reducing query time by ", value: 35, suffix: "%" },
      { text: "RESTful API design and integration", value: null }
    ]
  },
  {
    icon: Layers,
    title: "Cross-Platform Product Support",
    description: "I work across web (Angular, Laravel), mobile (Flutter, Swift), and payment terminal systems (Android). This breadth allows me to understand full product flows, debug integration issues, and contribute wherever the team needs support.",
    proof: [
      { text: "Web, mobile, and terminal experience", value: null },
      { text: "Payment SDK integration work", value: null },
      { text: "Full-stack debugging across platforms", value: null }
    ]
  }
];

export function WhatIBring() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Proof of Work</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            What I Bring to a Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Real contributions from production environments, not theoretical skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {contributions.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="card-spacing">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                <div className="space-y-2">
                  {item.proof.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {point.value !== null ? (
                          <>
                            <AnimatedCounter value={point.value} suffix={point.suffix} duration={1500} />
                            {" "}
                            {point.text}
                          </>
                        ) : (
                          point.text
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
