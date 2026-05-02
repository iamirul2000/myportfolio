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
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm dark:bg-amber-500/80">
          ⭐ Featured
        </span>
      )}
      {isPersonal && (
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm dark:bg-blue-500/80">
          🚀 Personal
        </span>
      )}
      {isLatest && (
        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm dark:bg-green-500/80">
          ✨ Latest
        </span>
      )}
    </div>
  );
}
