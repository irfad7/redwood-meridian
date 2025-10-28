import React from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "./checkbox";

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  className?: string;
}

export const TermsCheckbox: React.FC<TermsCheckboxProps> = ({
  checked,
  onChange,
  required = true,
  className = "",
}) => {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required={required}
        className="mt-1"
      />
      <label className="text-xs text-[#60606b] [font-family:'Playfair_Display',serif] leading-relaxed">
        By continuing, you agree to receive communications from Redwood Meridian and our{" "}
        <Link to="/terms-of-service" target="_blank" className="text-[#0e823e] hover:underline underline">
          Terms of Service
        </Link>
        {" "}and{" "}
        <Link to="/privacy-policy" target="_blank" className="text-[#0e823e] hover:underline underline">
          Privacy Policy
        </Link>
      </label>
    </div>
  );
};

