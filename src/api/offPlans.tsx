import { api, handleApiError } from "@/src/lib/axios"
import { createProjectSlug } from "@/src/lib/utils"

export const getAllProperties = async (querry?:string) => {
   try {
     const res = await api.get(`/properties/projects?${querry}` )
     return res.data
   } catch (error) {
    throw handleApiError(error)
   }
}

/**
 * Fetches a property by matching the slug with the project name
 * @param slug - The URL slug (e.g., "nadine-residences")
 * @returns Property data if found, otherwise null
 */
export const getPropertyBySlug = async (slug: string) => {
   try {
     // Fetch all projects
     const res = await api.get(`/properties/projects`)
     const projects = res.data?.projects || []
     
     // Find project where slug matches the name
     const matchedProject = projects.find((project: any) => {
       const projectSlug = createProjectSlug(project.name)
       return projectSlug === slug
     })
     
     if (matchedProject) {
       return { projects: [matchedProject] }
     }
     
     // If not found, return empty result
     return { projects: [] }
   } catch (error) {
    throw handleApiError(error)
   }
}
