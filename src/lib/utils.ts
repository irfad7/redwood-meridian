import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats currency values with consistent comma styling
 * @param value - The currency value (e.g., "$2,700,000" or "$685")
 * @returns Formatted currency string with styled commas
 */
export function formatCurrency(value: string): string {
  // Check if the value contains commas (indicating it's a formatted currency)
  if (value.includes(',')) {
    return value.replace(/,/g, '<span class="comma-styled">,</span>');
  }
  return value;
}
