import { api, handleApiError } from "@/src/lib/axios";
import { createProjectSlug } from "@/src/lib/utils";

export const getAllBuyProperties = async (query?: string) => {
  try {
    const res = await api.get(
      `/properties/get_properties_for_main_site?${query}`
    );
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Fetches a buy/rent property by matching the slug with the property title
 * @param slug - The URL slug (e.g., "luxury-apartment-dubai")
 * @returns Property data if found, otherwise null
 */
export const getAllBuyPropertiesBySlug = async (slug: string) => {
  try {
    // Fetch all properties
    const res = await api.get(`/properties/get_properties_for_main_site`);
    const properties = res.data?.properties || [];
    
    // Find property where slug matches the title
    const matchedProperty = properties.find((property: any) => {
      const propertySlug = createProjectSlug(property.title);
      return propertySlug === slug;
    });
    
    if (matchedProperty) {
      return { properties: [matchedProperty] };
    }
    
    // If not found, return empty result
    return { properties: [] };
  } catch (error) {
    throw handleApiError(error);
  }
};
