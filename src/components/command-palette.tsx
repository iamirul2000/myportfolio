"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, User, Briefcase, Mail, Home, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Command {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const commands: Command[] = [
    {
      id: "home",
      label: "Go to Home",
      icon: <Home className="h-4 w-4" />,
      action: () => router.push("/"),
      keywords: ["home", "main", "index"],
    },
    {
      id: "projects",
      label: "View Projects",
      icon: <Briefcase className="h-4 w-4" />,
      action: () => router.push("/projects"),
      keywords: ["projects", "work", "portfolio"],
    },
    {
      id: "about",
      label: "About Me",
      icon: <User className="h-4 w-4" />,
      action: () => router.push("/about"),
      keywords: ["about", "bio", "profile"],
    },
    {
      id: "resume",
      label: "View Resume",
      icon: <FileText className="h-4 w-4" />,
      action: () => router.push("/resume"),
      keywords: ["resume", "cv", "experience"],
    },
    {
      id: "contact",
      label: "Contact Me",
      icon: <Mail className="h-4 w-4" />,
      action: () => router.push("/contact"),
      keywords: ["contact", "email", "message"],
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.keywords.some((k) => k.includes(search.toLowerCase()))
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCommand = (command: Command) => {
    command.action();
    setIsOpen(false);
    setSearch("");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Command Palette */}
      <div className="fixed left-1/2 top-[20%] z-50 w-full max-w-2xl -translate-x-1/2 p-4">
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Type a command or search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 hover:bg-muted focus-ring"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-[400px] overflow-y-auto p-2">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No commands found
              </div>
            ) : (
              filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  onClick={() => handleCommand(command)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors focus-ring",
                    "hover:bg-muted"
                  )}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {command.icon}
                  </div>
                  <span className="flex-1 text-sm font-medium">
                    {command.label}
                  </span>
                  {index === 0 && (
                    <kbd className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
                      ↵
                    </kbd>
                  )}
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-muted px-1.5 py-0.5">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-muted px-1.5 py-0.5">↵</kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-muted px-1.5 py-0.5">Esc</kbd>
                Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
