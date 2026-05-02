"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickContactModal({ isOpen, onClose }: QuickContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with actual API call)
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4">
        <Card className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>

          {status === "sent" ? (
            <div className="py-12 text-center">
              <div className="text-6xl">✓</div>
              <h3 className="mt-4 text-2xl font-bold">Message Sent!</h3>
              <p className="mt-2 text-muted-foreground">
                I'll get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold">Quick Contact</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Send me a message and I'll respond as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or inquiry..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  Or reach out directly:
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  <a
                    href="mailto:amirul.iman698@gmail.com"
                    className="block text-primary hover:underline"
                  >
                    📧 amirul.iman698@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mirul-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline"
                  >
                    💼 LinkedIn Profile
                  </a>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  );
}
