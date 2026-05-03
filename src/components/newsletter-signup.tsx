"use client";

import { useState } from "react";
import { Mail, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Simulate API call - replace with actual newsletter service
    setTimeout(() => {
      setStatus("success");
      setMessage("Thanks for subscribing! Check your email to confirm.");
      setEmail("");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <Card className="card-spacing bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Stay Updated</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Get notified about new projects, articles, and updates
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-600 dark:text-green-400">
            <Check className="h-5 w-5" />
            <p className="text-sm font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="text-center"
            />
            <Button
              type="submit"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
            {status === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">{message}</p>
            )}
          </form>
        )}
      </div>
    </Card>
  );
}
