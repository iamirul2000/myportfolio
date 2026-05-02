import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

interface ProjectMetricsProps {
  metrics?: Metric[];
}

const defaultMetrics: Metric[] = [
  {
    label: "Impact",
    value: "High",
    icon: <TrendingUp className="h-5 w-5" />,
    trend: "+25%",
  },
  {
    label: "Team Size",
    value: "3-5",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Duration",
    value: "6 months",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    label: "Status",
    value: "Live",
    icon: <Star className="h-5 w-5" />,
  },
];

export function ProjectMetrics({ metrics = defaultMetrics }: ProjectMetricsProps) {
  return (
    <Card className="card-spacing">
      <h3 className="mb-4 text-xl font-semibold">Project Metrics</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {metric.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-lg font-semibold">{metric.value}</p>
                {metric.trend && (
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">
                    {metric.trend}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
