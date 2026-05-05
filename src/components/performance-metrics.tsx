"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Activity, Zap, Clock, Eye } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

interface PerformanceMetric {
  label: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

export function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);

  useEffect(() => {
    // Get performance metrics
    if (typeof window !== "undefined" && window.performance) {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      
      const loadTime = Math.round(navigation.loadEventEnd - navigation.fetchStart);
      const domContentLoaded = Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart);
      const firstPaint = performance.getEntriesByType("paint").find(entry => entry.name === "first-contentful-paint");
      const fcp = firstPaint ? Math.round(firstPaint.startTime) : 0;

      setMetrics([
        {
          label: "Page Load",
          value: loadTime,
          unit: "ms",
          icon: <Zap className="h-5 w-5" />,
          color: "text-blue-600 dark:text-blue-400",
        },
        {
          label: "DOM Ready",
          value: domContentLoaded,
          unit: "ms",
          icon: <Activity className="h-5 w-5" />,
          color: "text-green-600 dark:text-green-400",
        },
        {
          label: "First Paint",
          value: fcp,
          unit: "ms",
          icon: <Eye className="h-5 w-5" />,
          color: "text-purple-600 dark:text-purple-400",
        },
        {
          label: "Time to Interactive",
          value: Math.round(navigation.domInteractive - navigation.fetchStart),
          unit: "ms",
          icon: <Clock className="h-5 w-5" />,
          color: "text-orange-600 dark:text-orange-400",
        },
      ]);
    }
  }, []);

  if (metrics.length === 0) return null;

  return (
    <Card className="card-spacing">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Performance Metrics</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Real-time page performance indicators
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-border/50 bg-muted/30 p-4"
          >
            <div className="flex items-center justify-between">
              <div className={metric.color}>{metric.icon}</div>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    value={metric.value}
                    className="text-2xl font-bold"
                  />
                  <span className="text-xs text-muted-foreground">
                    {metric.unit}
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-muted-foreground">
        <p>
          Performance metrics are measured using the Navigation Timing API.
          Lower values indicate better performance.
        </p>
      </div>
    </Card>
  );
}
