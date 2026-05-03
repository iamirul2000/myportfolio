import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Reliability First",
    description: "I prioritize stable, maintainable code that works consistently in production environments.",
  },
  {
    title: "Practical Solutions",
    description: "Focus on solving real problems with straightforward, well-tested implementations.",
  },
  {
    title: "Continuous Learning",
    description: "Always improving through hands-on work, debugging challenges, and team collaboration.",
  },
  {
    title: "Clear Communication",
    description: "Keeping stakeholders informed and documentation up-to-date for long-term maintainability.",
  },
];

export function WorkPhilosophy() {
  return (
    <Card className="card-spacing">
      <h3 className="mb-6 text-xl font-semibold">Work Philosophy</h3>
      <div className="space-y-4">
        {values.map((value) => (
          <div key={value.title} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
