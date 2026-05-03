"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface ReadingProgressProps {
  content: string;
  wordsPerMinute?: number;
}

export function ReadingProgress({ content, wordsPerMinute = 200 }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setProgress(Math.min(progress, 100));
      
      const remaining = Math.ceil(readingTime * (1 - progress / 100));
      setTimeLeft(remaining);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, [readingTime]);

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {progress < 100 ? `${timeLeft} min left` : "Completed"}
            </span>
          </div>
          <div className="text-sm font-medium text-muted-foreground">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-muted/30">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
