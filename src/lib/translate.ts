/**
 * Frontend Translation Service for API Data
 * Translates English API responses to user's selected language
 */

// Translation cache to avoid re-translating same content
const translationCache: Record<string, Record<string, string>> = {};

/**
 * Translate text using Google Translate API (free tier)
 */
async function translateWithGoogle(text: string, targetLang: string): Promise<string> {
  // Convert to string and check if valid
  const textStr = String(text || '');
  if (!textStr || textStr.trim() === '') return textStr;
  
  // Check cache first
  const cacheKey = `${textStr}_${targetLang}`;
  if (translationCache[targetLang]?.[textStr]) {
    return translationCache[targetLang][textStr];
  }

  try {
    // Using Google Translate free API via MyMemory
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textStr)}&langpair=en|${targetLang}`
    );
    const data = await response.json();
    
    const translatedText = data.responseData?.translatedText || textStr;
    
    // Cache the translation
    if (!translationCache[targetLang]) {
      translationCache[targetLang] = {};
    }
    translationCache[targetLang][textStr] = translatedText;
    
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return textStr; // Return original text on error
  }
}

/**
 * Batch translate multiple texts at once for better performance
 */
async function batchTranslate(texts: string[], targetLang: string): Promise<string[]> {
  // For English, return as-is
  if (targetLang === 'en') return texts;

  // Ensure all texts are strings
  const safeTexts = texts.map(text => String(text || ''));

  const results = await Promise.all(
    safeTexts.map(text => translateWithGoogle(text, targetLang))
  );
  
  return results;
}

/**
 * Translate property object fields
 */
export async function translateProperty(property: any, targetLang: string): Promise<any> {
  if (!property || targetLang === 'en') return property;

  try {
    // Fields to translate - ensure they are strings
    const fieldsToTranslate = [
      property.title,
      property.name,
      property.description,
      property.location,
      property.community,
      property.sub_community,
    ]
      .filter(field => field != null && field !== '') // Filter out null, undefined, and empty strings
      .map(field => String(field)); // Convert to string

    const translated = await batchTranslate(fieldsToTranslate, targetLang);
    let index = 0;

    return {
      ...property,
      title: property.title ? translated[index++] : property.title,
      name: property.name ? translated[index++] : property.name,
      description: property.description ? translated[index++] : property.description,
      location: property.location ? translated[index++] : property.location,
      community: property.community ? translated[index++] : property.community,
      sub_community: property.sub_community ? translated[index++] : property.sub_community,
      // Keep original values as backup
      _original: {
        title: property.title,
        name: property.name,
        description: property.description,
        location: property.location,
        community: property.community,
        sub_community: property.sub_community,
      }
    };
  } catch (error) {
    console.error('Error translating property:', error);
    return property;
  }
}

/**
 * Translate array of properties
 */
export async function translateProperties(properties: any[], targetLang: string): Promise<any[]> {
  if (!properties || properties.length === 0 || targetLang === 'en') {
    return properties;
  }

  try {
    // Translate properties in parallel with a limit to avoid rate limits
    const batchSize = 5;
    const results: any[] = [];
    
    for (let i = 0; i < properties.length; i += batchSize) {
      const batch = properties.slice(i, i + batchSize);
      const translatedBatch = await Promise.all(
        batch.map(property => translateProperty(property, targetLang))
      );
      results.push(...translatedBatch);
      
      // Small delay to avoid rate limiting
      if (i + batchSize < properties.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    return results;
  } catch (error) {
    console.error('Error translating properties:', error);
    return properties;
  }
}

/**
 * Translate community object
 */
export async function translateCommunity(community: any, targetLang: string): Promise<any> {
  if (!community || targetLang === 'en') return community;

  try {
    const fieldsToTranslate = [
      community.name,
      community.description,
      community.city,
    ]
      .filter(field => field != null && field !== '')
      .map(field => String(field));

    const translated = await batchTranslate(fieldsToTranslate, targetLang);
    let index = 0;

    return {
      ...community,
      name: community.name ? translated[index++] : community.name,
      description: community.description ? translated[index++] : community.description,
      city: community.city ? translated[index++] : community.city,
      _original: {
        name: community.name,
        description: community.description,
        city: community.city,
      }
    };
  } catch (error) {
    console.error('Error translating community:', error);
    return community;
  }
}

/**
 * Translate array of communities
 */
export async function translateCommunities(communities: any[], targetLang: string): Promise<any[]> {
  if (!communities || communities.length === 0 || targetLang === 'en') {
    return communities;
  }

  try {
    const batchSize = 5;
    const results: any[] = [];
    
    for (let i = 0; i < communities.length; i += batchSize) {
      const batch = communities.slice(i, i + batchSize);
      const translatedBatch = await Promise.all(
        batch.map(community => translateCommunity(community, targetLang))
      );
      results.push(...translatedBatch);
      
      if (i + batchSize < communities.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    return results;
  } catch (error) {
    console.error('Error translating communities:', error);
    return communities;
  }
}

/**
 * Clear translation cache (useful when switching languages)
 */
export function clearTranslationCache() {
  Object.keys(translationCache).forEach(key => {
    delete translationCache[key];
  });
}

/**
 * Get translation cache size (for debugging)
 */
export function getTranslationCacheSize(): number {
  let total = 0;
  Object.values(translationCache).forEach(cache => {
    total += Object.keys(cache).length;
  });
  return total;
}

