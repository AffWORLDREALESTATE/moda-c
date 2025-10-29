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
  
  // Replace "Deira" with "Dubai Island" (case-insensitive)
  return locationName.replace(/\bDeira\b/gi, "Dubai Island");
}