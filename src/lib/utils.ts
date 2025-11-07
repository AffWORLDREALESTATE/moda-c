import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Normalizes location/area names by replacing specific variations
 * @param locationName - The location name to normalize
 * @returns The normalized location name with replacements applied
 */
export function normalizeLocationName(locationName: string | undefined | null): string {
  if (!locationName) return "";
  
  let normalized = String(locationName).trim();
  
  // Replace "Ain Ajman" with "Dubai Island" (case-insensitive, with word boundaries)
  normalized = normalized.replace(/\bAin\s+Ajman\b/gi, "Dubai Island");
  
  // Replace standalone "Ajman" with "Dubai Island" (case-insensitive)
  normalized = normalized.replace(/\bAjman\b/gi, "Dubai Island");
  
  // Replace "Deira" with "Dubai Island" (case-insensitive)
  normalized = normalized.replace(/\bDeira\b/gi, "Dubai Island");
  
  return normalized;
}