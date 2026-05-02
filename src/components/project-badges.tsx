import { cn } from "@/lib/utils";

interface ProjectBadgesProps {
  featured?: boolean;
  isPersonal?: boolean;
  isLatest?: boolean;
  className?: string;
}

export function ProjectBadges({
  featured,
  isPersonal,
  isLatest,
  className,
}: ProjectBadgesProps) {
  if (!featured && !isPersonal && !isLatest) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {featured && (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
          ⭐ Featured
        </span>
      )}
      {isPersonal && (
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
          🚀 Personal
        </span>
      )}
      {isLatest && (
        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400">
          ✨ Latest
        </span>
      )}
    </div>
  );
}
