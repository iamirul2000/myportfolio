"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Maximize2, X } from "lucide-react";

interface ProjectDemoEmbedProps {
  demoUrl: string;
  title: string;
}

export function ProjectDemoEmbed({ demoUrl, title }: ProjectDemoEmbedProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden">
        <div className="border-b border-border bg-muted/30 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-sm font-medium text-muted-foreground">
                Live Demo - {title}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(true)}
                className="gap-2"
              >
                <Maximize2 className="h-4 w-4" />
                Fullscreen
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative aspect-video bg-slate-950">
          <iframe
            src={demoUrl}
            className="h-full w-full"
            title={`${title} Demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>

        <div className="border-t border-border bg-muted/30 px-4 py-2">
          <p className="text-xs text-muted-foreground">
            💡 This is a live, interactive demo. Try clicking around to explore the features!
          </p>
        </div>
      </Card>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsFullscreen(false)}
          />
          <div className="fixed inset-4 z-50 overflow-hidden rounded-lg border border-border bg-background shadow-2xl md:inset-8">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {title} - Fullscreen Demo
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFullscreen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Iframe */}
              <div className="flex-1 bg-slate-950">
                <iframe
                  src={demoUrl}
                  className="h-full w-full"
                  title={`${title} Fullscreen Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
