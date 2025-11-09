export interface ProjectItem {
  src: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  items: ProjectItem[];
  accent?: string;
}
