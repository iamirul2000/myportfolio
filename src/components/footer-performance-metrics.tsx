"use client";

import { useEffect, useState } from "react";
import { Zap, Activity, Eye, Clock } from "lucide-react";

interface Metric {
  label: string;
  value: number;
  icon: React.ReactNode;
  iconBg: string;
}

export function FooterPerformanceMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    const measure = () => {
      if (typeof window === "undefined" || !window.performance) return;

      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (!navigation) return;

      const firstPaint = performance.getEntriesByType("paint").find(
        (entry) => entry.name === "first-contentful-paint"
      );

      setMetrics([
        {
          label: "Page Load",
          value: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          icon: <Zap className="h-4 w-4" />,
          iconBg: "bg-blue-500/10 text-blue-400",
        },
        {
          label: "DOM Ready",
          value: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
          icon: <Activity className="h-4 w-4" />,
          iconBg: "bg-green-500/10 text-green-400",
        },
        {
          label: "First Paint",
          value: firstPaint ? Math.round(firstPaint.startTime) : 0,
          icon: <Eye className="h-4 w-4" />,
          iconBg: "bg-purple-500/10 text-purple-400",
        },
        {
          label: "Interactive",
          value: Math.round(navigation.domInteractive - navigation.fetchStart),
          icon: <Clock className="h-4 w-4" />,
          iconBg: "bg-amber-500/10 text-amber-400",
        },
      ]);
    };

    // Wait for load event to complete before measuring
    if (document.readyState === "complete") {
      setTimeout(measure, 100);
    } else {
      window.addEventListener("load", () => setTimeout(measure, 100));
    }
  }, []);

  return (
    <div>
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Performance Metrics</p>
        <p className="text-xs text-slate-500 mt-1">Real-time page performance indicators</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${metric.iconBg}`}>
              {metric.icon}
            </div>
            <div>
              <p className="text-xs text-slate-400">{metric.label}</p>
              <p className="text-base font-bold">
                {metric.value}
                <span className="text-xs font-normal text-slate-500 ml-1">ms</span>
              </p>
            </div>
          </div>
        ))}
        {metrics.length === 0 && (
          <>
            {["Page Load", "DOM Ready", "First Paint", "Interactive"].map((label) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800">
                  <div className="h-4 w-4 rounded bg-slate-700 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="text-base font-bold text-slate-600">—</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Measured using Navigation Timing API
      </p>
    </div>
  );
}
