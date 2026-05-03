"use client";

import { useState } from "react";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendlyWidgetProps {
  calendlyUrl?: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
  buttonSize?: "default" | "sm" | "lg";
}

export function CalendlyWidget({
  calendlyUrl = "https://calendly.com/your-username",
  buttonText = "Schedule a Meeting",
  buttonVariant = "default",
  buttonSize = "default",
}: CalendlyWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        size={buttonSize}
        onClick={handleOpen}
        className="gap-2"
      >
        <Calendar className="h-4 w-4" />
        {buttonText}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="fixed inset-4 z-50 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl md:inset-auto md:left-1/2 md:top-1/2 md:h-[80vh] md:w-full md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="text-lg font-semibold">Schedule a Meeting</h2>
              <button
                onClick={handleClose}
                className="rounded-lg p-2 transition-colors hover:bg-muted focus-ring"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[calc(100%-4rem)]">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Scheduling"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
