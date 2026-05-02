import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  title?: string;
  message: string;
  retry?: () => void;
  className?: string;
}

export function ErrorMessage({
  title = "Something went wrong",
  message,
  retry,
  className,
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/20",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 font-semibold text-red-900 dark:text-red-200">
            {title}
          </h3>
          <p className="text-sm text-red-700 dark:text-red-300">{message}</p>
          {retry && (
            <Button
              onClick={retry}
              variant="outline"
              size="sm"
              className="mt-4 border-red-300 text-red-700 hover:bg-red-100 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900/30"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
