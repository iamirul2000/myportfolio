"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/data/portfolio-config";

interface ExperienceTimelineInteractiveProps {
  timeline: readonly TimelineEntry[];
}

export function ExperienceTimelineInteractive({
  timeline,
}: ExperienceTimelineInteractiveProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {timeline.map((entry, index) => {
        const isExpanded = expandedIndex === index;
        const isFirst = index === 0;

        return (
          <Card
            key={`${entry.period}-${entry.title}`}
            className={cn(
              "overflow-hidden transition-all duration-300",
              isExpanded && "ring-2 ring-primary/20"
            )}
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full text-left transition-colors hover:bg-muted/50 focus-ring"
            >
              <div className="flex items-start gap-4 p-6">
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors",
                    isExpanded
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <Briefcase className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold">{entry.title}</h3>
                      <p className="mt-1 text-sm text-primary">{entry.organization}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {isFirst && (
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
                          Current
                        </Badge>
                      )}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {entry.period}
                      </div>
                    </div>
                  </div>

                  {!isExpanded && (
                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                      {entry.summary}
                    </p>
                  )}
                </div>

                {/* Expand Icon */}
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="border-t border-border bg-muted/30 p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-sm leading-7 text-muted-foreground">
                  {entry.summary}
                </p>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
