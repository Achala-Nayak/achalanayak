import { projects, Project } from '@/data/projects';

// Utility functions for working with projects
export const ProjectUtils = {
  // Get all projects
  getAllProjects: (): Project[] => projects,

  // Get featured projects only
  getFeaturedProjects: (): Project[] => 
    projects.filter(project => project.featured),

  // Get projects by category
  getProjectsByCategory: (category: string): Project[] => 
    projects.filter(project => project.category === category),

  // Get projects by tech stack
  getProjectsByTech: (tech: string): Project[] => 
    projects.filter(project => 
      project.techStack.some(stack => 
        stack.toLowerCase().includes(tech.toLowerCase())
      )
    ),

  // Get unique categories
  getCategories: (): string[] => 
    [...new Set(projects.map(project => project.category).filter(cat => cat !== undefined) as string[])],

  // Get unique tech stack items
  getTechStack: (): string[] => 
    [...new Set(projects.flatMap(project => project.techStack))],

  // Search projects by title or description
  searchProjects: (query: string): Project[] => 
    projects.filter(project => 
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase())
    ),
};

export default ProjectUtils;
