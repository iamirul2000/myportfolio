"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ResumeDownloadCTA() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative space-y-4 text-center">
        <div className="text-4xl">📄</div>
        <h3 className="text-2xl font-bold">Download My Resume</h3>
        <p className="text-sm text-muted-foreground">
          Get a comprehensive overview of my experience, skills, and projects
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/resume/amirul-resume-ats.pdf"
            download
            onClick={handleDownload}
          >
            <Button size="lg" className="w-full sm:w-auto">
              {downloaded ? "✓ Downloaded!" : "Download PDF"}
            </Button>
          </a>
          <a href="/resume">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Online
            </Button>
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>📧 amirul.iman698@gmail.com</span>
          <span>•</span>
          <span>📍 Malaysia</span>
        </div>
      </div>
    </Card>
  );
}
