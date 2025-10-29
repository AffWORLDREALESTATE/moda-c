import { api, handleApiError } from "@/src/lib/axios"
import axios from "axios";

export const getAllCommunities = async (page: number = 1, size: number = 50) => {
   try {
     console.log('Making API call to:', `/locations/communities/ordered?page=${page}&size=${size}&include_unordered=true`);
     const res = await api.get(`/locations/communities/ordered?page=${page}&size=${size}&include_unordered=true`)
     console.log('API call successful, response:', res.data);
     return res.data
   } catch (error) {
    console.error('API call failed:', error);
    throw handleApiError(error)
   }
}

export const getCommunityArticles = async (communityName: string) => {
  try {
    const encodedName = encodeURIComponent(communityName);
    const response = await axios.get(
      `https://jna-properties-api.propfusion.io/locations/communities/${encodedName}/articles`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching community articles:', error);
    throw error;
  }
};
