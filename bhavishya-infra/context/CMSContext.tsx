
import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, Project, Service } from '../types';
import { getSiteContent, saveSiteContent } from '../services/storageService';

interface CMSContextType {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  content: SiteContent;
  updateHero: (data: Partial<SiteContent['hero']>) => void;
  updateServices: (services: Service[]) => void;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  saveChanges: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [content, setContent] = useState<SiteContent>(getSiteContent());

  const updateHero = (data: Partial<SiteContent['hero']>) => {
    setContent(prev => ({ ...prev, hero: { ...prev.hero, ...data } }));
  };

  const updateServices = (services: Service[]) => {
    setContent(prev => ({ ...prev, services }));
  };

  const addProject = (project: Project) => {
    setContent(prev => ({ ...prev, projects: [project, ...prev.projects] }));
  };

  const deleteProject = (id: string) => {
    setContent(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
  };

  const saveChanges = () => {
    saveSiteContent(content);
    alert('Site changes saved successfully!');
  };

  return (
    <CMSContext.Provider value={{ 
      isAdmin, setIsAdmin, content, updateHero, updateServices, addProject, deleteProject, saveChanges 
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within a CMSProvider');
  return context;
};
