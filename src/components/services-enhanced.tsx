import { Card } from "@/components/ui/card";
import { 
  Bug, 
  Sparkles, 
  Code, 
  Smartphone, 
  CreditCard, 
  TestTube,
  CheckCircle2
} from "lucide-react";
import type { Service } from "@/data/portfolio-config";

interface ServicesEnhancedProps {
  services: readonly {
    title: string;
    description: string;
    deliverables: readonly string[];
  }[];
}

const iconMap: Record<string, React.ReactNode> = {
  "Bug Fixing and Production Support": <Bug className="h-6 w-6" />,
  "Feature Enhancements": <Sparkles className="h-6 w-6" />,
  "Web App Maintenance": <Code className="h-6 w-6" />,
  "Mobile App Support": <Smartphone className="h-6 w-6" />,
  "Payment and Terminal Integration": <CreditCard className="h-6 w-6" />,
  "Testing and Release Support": <TestTube className="h-6 w-6" />,
};

export function ServicesEnhanced({ services }: ServicesEnhancedProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const icon = iconMap[service.title] || <Code className="h-6 w-6" />;
        
        return (
          <Card
            key={service.title}
            className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative space-y-5">
              {/* Icon & Title */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  {icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                    {service.title}
                  </h2>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Service {index + 1} of {services.length}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Deliverables
                </h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
