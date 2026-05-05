import { Code2, Database, Wrench, Smartphone, Bug, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const focusAreas = [
  {
    icon: Code2,
    label: "Backend Systems",
    description: "Laravel, PHP, MySQL"
  },
  {
    icon: Database,
    label: "API Development",
    description: "REST APIs, Integration"
  },
  {
    icon: Wrench,
    label: "Production Support",
    description: "Bug fixing, Maintenance"
  },
  {
    icon: Smartphone,
    label: "Mobile Development",
    description: "Flutter, Swift, Android"
  },
  {
    icon: Bug,
    label: "Testing & QA",
    description: "Debugging, Quality Assurance"
  },
  {
    icon: Layers,
    label: "Full Stack",
    description: "Angular, TypeScript, Frontend"
  }
];

export function FocusAreasCompact() {
  return (
    <Card className="surface-strong p-6 space-y-4">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Core Focus</p>
        <h3 className="mt-2 text-xl font-semibold">Technical Areas</h3>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {focusAreas.map((area) => {
          const Icon = area.icon;
          return (
            <div key={area.label} className="flex items-start gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm leading-tight">{area.label}</p>
                <p className="text-xs text-muted-foreground leading-tight mt-0.5">{area.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
