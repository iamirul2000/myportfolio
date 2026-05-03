"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentSelector?: string;
}

export function TableOfContents({ contentSelector = "article" }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const content = document.querySelector(contentSelector);
    if (!content) return;

    const headings = content.querySelectorAll("h2, h3, h4");
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      items.push({
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      });
    });

    setToc(items);
  }, [contentSelector]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden focus-ring"
      >
        <List className="h-5 w-5" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* TOC */}
      <nav
        className={cn(
          "fixed right-4 top-24 z-40 w-64 rounded-lg border border-border bg-background p-4 shadow-lg transition-transform md:sticky md:translate-x-0",
          isOpen ? "translate-x-0" : "translate-x-[calc(100%+2rem)] md:translate-x-0"
        )}
      >
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
          <List className="h-4 w-4" />
          Table of Contents
        </h3>
        <ul className="space-y-2 text-sm">
          {toc.map((item) => (
            <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
              <button
                onClick={() => handleClick(item.id)}
                className={cn(
                  "w-full text-left transition-colors hover:text-primary focus-ring rounded px-2 py-1",
                  activeId === item.id
                    ? "font-medium text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
