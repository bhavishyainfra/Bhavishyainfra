
import { SiteContent, Project, Service } from '../types';
import { PROJECTS, SERVICES } from '../constants';

const STORAGE_KEY = 'bhavishya_infra_content_v4';

const INITIAL_CONTENT: SiteContent = {
  hero: {
    title: "Building Excellence Beyond Limits.",
    subtitle: "Bhavishya Infra | Building Constructions",
    description: "Bhavishya Infra transforms complex visions into architectural landmarks. From heavy infrastructure to sustainable residential projects, we deliver precision at scale."
  },
  services: SERVICES,
  projects: PROJECTS
};

export const getSiteContent = (): SiteContent => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_CONTENT;
    }
  }
  return INITIAL_CONTENT;
};

export const saveSiteContent = (content: SiteContent) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
};

export const resetSiteContent = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};
