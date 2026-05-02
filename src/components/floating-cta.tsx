"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl",
            isOpen && "rotate-45"
          )}
          aria-label="Quick actions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>

        {/* Action Menu */}
        <div
          className={cn(
            "absolute bottom-20 left-0 space-y-3 transition-all",
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          )}
        >
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-background px-4 py-3 text-sm font-medium shadow-lg transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            <span>💬</span>
            <span>Let's Talk</span>
          </Link>

          <Link
            href="/resume"
            className="flex items-center gap-3 rounded-full bg-background px-4 py-3 text-sm font-medium shadow-lg transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            <span>📄</span>
            <span>Resume</span>
          </Link>

          <a
            href="https://github.com/iamirul2000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-background px-4 py-3 text-sm font-medium shadow-lg transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            <span>💻</span>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mirul-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-background px-4 py-3 text-sm font-medium shadow-lg transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
