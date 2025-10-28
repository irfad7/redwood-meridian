import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = "md", 
  variant = "default",
  className = "" 
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  const colorClasses = variant === "white" 
    ? "bg-white text-[#0e823e]" 
    : "bg-[#0e823e] text-white";

  const textColorClasses = variant === "white"
    ? "text-white"
    : "text-[#0e823e]";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} ${colorClasses} rounded-full flex items-center justify-center`}>
        <span className="font-bold">RM</span>
      </div>
      <span className={`${textColorClasses} font-bold ${textSizeClasses[size]}`}>
        Redwood Meridian
      </span>
    </div>
  );
};