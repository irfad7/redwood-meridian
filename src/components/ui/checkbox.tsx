import React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            {...props}
          />
          <div className={cn(
            "h-4 w-4 rounded-sm border-2 border-[#d5d5d5] bg-white transition-all",
            "peer-checked:border-[#0e823e] peer-checked:bg-[#0e823e]",
            "peer-focus:ring-2 peer-focus:ring-[#0e823e] peer-focus:ring-offset-1",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}>
            <Check className={cn(
              "h-3 w-3 text-white opacity-0 transition-opacity",
              "peer-checked:opacity-100"
            )} />
          </div>
          {label && (
            <span className="ml-2 text-sm [font-family:'Playfair_Display',serif] text-[#4d5256]">
              {label}
            </span>
          )}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

