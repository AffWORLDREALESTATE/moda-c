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
  // normalized = normalized.replace(/\bAin\s+Ajman\b/gi, "Dubai Island");
  
  // Replace standalone "Ajman" with "Dubai Island" (case-insensitive)
  // normalized = normalized.replace(/\bAjman\b/gi, "Dubai Island");
  
  // Replace "Deira" with "Dubai Island" (case-insensitive)
  normalized = normalized.replace(/\bDeira\b/gi, "Dubai Island");
  
  return normalized;
}

/**
 * Creates a URL-friendly slug from a project or property name
 * @param name - The project/property name to convert to a slug
 * @returns A URL-friendly slug (e.g., "Nadine Residences" -> "nadine-residences")
 */
export function createProjectSlug(name: string | undefined | null): string {
  if (!name) return "";
  
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}