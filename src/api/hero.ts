import { api, handleApiError } from "@/src/lib/axios";

export interface HeroImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
  description?: string;
  order?: number;
}

export interface HeroImagesResponse {
  images: HeroImage[];
  total: number;
}

export const getBinghattiHillviewsImages = async (): Promise<HeroImagesResponse> => {
  try {
    // Try to fetch Binghatti Hillviews property images from off-plans API
    const res = await api.get("/properties/projects?search=Binghatti Hillviews");
    const projects = res.data?.projects || [];
    
    // Find Binghatti Hillviews project
    const binghattiProject = projects.find((project: any) => 
      project.name?.toLowerCase().includes('binghatti') && 
      project.name?.toLowerCase().includes('hillviews')
    );
    
    if (binghattiProject?.photos && binghattiProject.photos.length > 0) {
      return {
        images: binghattiProject.photos.map((photo: string, index: number) => ({
          id: `binghatti-${index}`,
          url: photo,
          alt: `Binghatti Hillviews - Image ${index + 1}`,
          title: "Binghatti Hillviews",
          description: "Premium residential development in Dubai"
        })),
        total: binghattiProject.photos.length
      };
    }
    
    throw new Error("Binghatti Hillviews project not found");
  } catch (error) {
    console.warn("Failed to fetch Binghatti Hillviews images, using fallback images");
    // Fallback to static images if API fails
    return {
      images: [
        {
          id: "1",
          url: "/images/bgImage.webp",
          alt: "Luxury Living in Dubai",
          title: "Luxury Living",
          description: "Experience the finest properties in Dubai"
        },
        {
          id: "2", 
          url: "/images/Dubai-Creek-Harbour.webp",
          alt: "Dubai Creek Harbour",
          title: "Dubai Creek Harbour",
          description: "Modern waterfront living"
        },
        {
          id: "3",
          url: "/images/Dubai-Hills-Estate.webp", 
          alt: "Dubai Hills Estate",
          title: "Dubai Hills Estate",
          description: "Premium residential community"
        },
        {
          id: "4",
          url: "/images/dubai-marina.webp",
          alt: "Dubai Marina",
          title: "Dubai Marina", 
          description: "Iconic waterfront lifestyle"
        },
        {
          id: "5",
          url: "/images/Palm-Jumeirah.webp",
          alt: "Palm Jumeirah",
          title: "Palm Jumeirah",
          description: "The world's most iconic island"
        }
      ],
      total: 5
    };
  }
};

export const getHeroImages = async (): Promise<HeroImagesResponse> => {
  try {
    const res = await api.get("/hero/images");
    return res.data;
  } catch (error) {
    // Fallback to static images if API fails
    console.warn("Failed to fetch hero images from API, using fallback images");
    return {
      images: [
        {
          id: "1",
          url: "/images/bgImage.webp",
          alt: "Luxury Living in Dubai",
          title: "Luxury Living",
          description: "Experience the finest properties in Dubai"
        },
        {
          id: "2", 
          url: "/images/Dubai-Creek-Harbour.webp",
          alt: "Dubai Creek Harbour",
          title: "Dubai Creek Harbour",
          description: "Modern waterfront living"
        },
        {
          id: "3",
          url: "/images/Dubai-Hills-Estate.webp", 
          alt: "Dubai Hills Estate",
          title: "Dubai Hills Estate",
          description: "Premium residential community"
        },
        {
          id: "4",
          url: "/images/dubai-marina.webp",
          alt: "Dubai Marina",
          title: "Dubai Marina", 
          description: "Iconic waterfront lifestyle"
        },
        {
          id: "5",
          url: "/images/Palm-Jumeirah.webp",
          alt: "Palm Jumeirah",
          title: "Palm Jumeirah",
          description: "The world's most iconic island"
        }
      ],
      total: 5
    };
  }
};
