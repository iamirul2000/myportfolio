import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Coffee,
  MapPin,
  Calendar
} from "lucide-react";

interface QuickFact {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const facts: QuickFact[] = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Current Role",
    value: "Full Stack Engineer at ABSS",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "Experience",
    value: "3+ Years in Production Systems",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    label: "Specialization",
    value: "Backend-Heavy Full Stack",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Based In",
    value: "Malaysia",
  },
  {
    icon: <Coffee className="h-5 w-5" />,
    label: "Work Style",
    value: "Remote & On-site",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    label: "Focus",
    value: "Laravel, PHP, MySQL, APIs",
  },
];

export function QuickFacts() {
  return (
    <Card className="card-spacing">
      <h3 className="mb-6 text-xl font-semibold">Quick Facts</h3>
      <div className="space-y-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-3 transition-colors hover:border-primary/50"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {fact.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-semibold leading-tight">{fact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
