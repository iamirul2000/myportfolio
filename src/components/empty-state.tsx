import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon = "🔍",
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted/30 p-12 text-center",
        className
      )}
    >
      <div className="mb-4 text-6xl opacity-50">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
      {action && (
        <Button
          onClick={action.onClick}
          variant="outline"
          className="focus-ring"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
