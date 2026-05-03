"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrintButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function PrintButton({
  variant = "outline",
  size = "lg",
  className,
}: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handlePrint}
      className={className}
    >
      <Printer className="mr-2 h-4 w-4" />
      Print Resume
    </Button>
  );
}
