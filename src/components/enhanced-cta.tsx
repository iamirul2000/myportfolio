import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
}

export function EnhancedCTA({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className,
}: EnhancedCTAProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-ring";
  
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-100",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
