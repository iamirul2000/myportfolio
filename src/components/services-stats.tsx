import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";
import { Briefcase, Code, Layers, Award } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Code className="h-5 w-5" />,
    value: 8,
    suffix: "+",
    label: "Major Projects",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    value: 12,
    suffix: "+",
    label: "Technologies",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Award className="h-5 w-5" />,
    value: 4,
    suffix: "",
    label: "Companies Worked",
    color: "text-orange-600 dark:text-orange-400",
  },
];

export function ServicesStats() {
  return (
    <Card className="card-spacing bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold">Experience Overview</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Track record across production systems and product work
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-lg border border-border/50 bg-background/50 p-6 text-center transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className={`mb-3 ${stat.color}`}>{stat.icon}</div>
            <div className="mb-1 text-3xl font-bold">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
