"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Copy, FileDown, Linkedin, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactActionsEnhancedProps {
  email: string;
  resumeFile?: string;
}

export function ContactActionsEnhanced({ email, resumeFile }: ContactActionsEnhancedProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Best ways to reach me</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Email is the fastest way to connect. I respond to all genuine inquiries about roles, projects, or collaboration.
        </p>
      </div>

      <div className="space-y-3">
        {/* Primary Actions */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Button asChild size="lg" className="w-full">
            <a href={`mailto:${email}`}>
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button
            onClick={copyEmail}
            size="lg"
            variant="secondary"
            className="w-full"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Email
              </>
            )}
          </Button>
        </div>

        {/* Secondary Actions */}
        <div className="grid gap-3 sm:grid-cols-2">
          {resumeFile && (
            <Button asChild size="lg" variant="outline" className="w-full">
              <a href={resumeFile} download>
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          )}
          <Button asChild size="lg" variant="outline" className="w-full">
            <a href="https://www.linkedin.com/in/mirul-/" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
        <p className="text-sm font-medium text-foreground mb-2">For hiring inquiries:</p>
        <p className="text-sm text-muted-foreground mb-3">
          Include the role, team size, tech stack, and whether it's remote, hybrid, or on-site. A short intro is enough to start the conversation.
        </p>
        <p className="text-xs text-muted-foreground italic">
          💡 Copy Email is best for job opportunities and project discussions.
        </p>
      </div>

      {/* Toast notification */}
      {copied && (
        <div className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-2">
          <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-400 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Email copied to clipboard
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
