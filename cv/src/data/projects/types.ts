export interface Project {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
  category?: 'AI/ML' | 'Web Development' | 'Data Processing' | 'Full Stack' | 'Other';
  status?: 'Completed' | 'In Progress' | 'Planned';
  featured?: boolean;
}

export interface ProjectCategory {
  name: string;
  description: string;
  projects: Project[];
}
