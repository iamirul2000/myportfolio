import { CheckCircle2, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const bestFitAreas = [
  "Backend-leaning full stack roles",
  "Laravel, PHP, MySQL development",
  "Production support and bug fixing",
  "REST API design and integration",
  "Web and mobile product support",
  "Database optimization work",
];

export function AvailabilityCard() {
  return (
    <Card className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
          <Briefcase className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Availability & Best Fit</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Open to engineering conversations
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">I'm a good fit for:</p>
        <div className="space-y-2">
          {bestFitAreas.map((area) => (
            <div key={area} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
              <span className="text-sm text-muted-foreground">{area}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-green-700 dark:text-green-400">Currently open to opportunities.</span>
          {" "}I respond to all genuine inquiries within 24-48 hours.
        </p>
      </div>
    </Card>
  );
}
