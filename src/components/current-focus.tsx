import { Card } from "@/components/ui/card";
import { Sparkles, Target, BookOpen } from "lucide-react";

interface FocusItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const focusItems: FocusItem[] = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Current Work",
    description: "Building and maintaining Financio at ABSS - focusing on bug fixes, feature enhancements, and data patching in production.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Learning",
    description: "Deepening expertise in Laravel optimization, MySQL performance tuning, and scalable API design patterns.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Interests",
    description: "Exploring modern full-stack architectures, improving code maintainability, and building reliable production systems.",
  },
];

export function CurrentFocus() {
  return (
    <Card className="card-spacing bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <h3 className="mb-6 text-xl font-semibold">Current Focus</h3>
      <div className="space-y-4">
        {focusItems.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-lg border border-border/50 bg-background/50 p-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {item.icon}
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
