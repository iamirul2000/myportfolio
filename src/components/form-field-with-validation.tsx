import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  success?: boolean;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
}

export function FormFieldWithValidation({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  success,
  required,
  placeholder,
  helperText,
}: FormFieldProps) {
  const hasError = !!error;
  const showSuccess = success && !hasError && value.length > 0;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      
      <div className="relative">
        {type === "textarea" ? (
          <Textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={cn(
              "focus-ring transition-smooth",
              hasError && "border-red-500 focus:ring-red-500",
              showSuccess && "border-green-500 focus:ring-green-500"
            )}
          />
        ) : (
          <Input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={cn(
              "focus-ring transition-smooth",
              hasError && "border-red-500 focus:ring-red-500",
              showSuccess && "border-green-500 focus:ring-green-500"
            )}
          />
        )}
        
        {showSuccess && (
          <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-green-500" />
        )}
        
        {hasError && (
          <AlertCircle className="absolute right-3 top-3 h-5 w-5 text-red-500" />
        )}
      </div>

      {helperText && !error && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}

      {error && (
        <p className="flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}
