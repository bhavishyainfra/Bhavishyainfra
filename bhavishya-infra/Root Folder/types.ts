
export interface Project {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Industrial' | 'Infrastructure';
  image: string;
  location: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EstimationResult {
  summary: string;
  suggestedMaterials: string[];
  estimatedTimeline: string;
  potentialChallenges: string[];
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: Service[];
  projects: Project[];
}
