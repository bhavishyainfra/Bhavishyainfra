
import React, { useState, useRef } from 'react';
import { useCMS } from '../context/CMSContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { isAdmin, content, addProject, deleteProject } = useCMS();
  const [filter, setFilter] = useState('All');
  const [isAdding, setIsAdding] = useState(false);
  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure'] as const;
  
  const [newProject, setNewProject] = useState<Partial<Project>>({
    category: 'Commercial',
    year: new Date().getFullYear().toString()
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredProjects = filter === 'All' 
    ? content.projects 
    : content.projects.filter(p => p.category === filter);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.image) return;
    
    addProject({
      ...newProject,
      id: Date.now().toString(),
    } as Project);
    
    setIsAdding(false);
    setNewProject({ category: 'Commercial', year: new Date().getFullYear().toString() });
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Signature Projects</h2>
          </div>
          <div className="mt-8 md:mt-0 flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'text-stone-500 hover:text-stone-900'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Admin: Add New Project UI */}
          {isAdmin && (
            <div className="border-4 border-dashed border-stone-200 aspect-[16/10] flex items-center justify-center p-8 text-center hover:border-amber-500 transition-colors">
              {!isAdding ? (
                <button 
                  onClick={() => setIsAdding(true)}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-2xl text-stone-400 group-hover:bg-amber-500 group-hover:text-white transition-all mb-4">
                    <i className="fas fa-plus"></i>
                  </div>
                  <span className="font-bold uppercase tracking-widest text-stone-500 group-hover:text-stone-900">Add New Project</span>
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" placeholder="Project Title" required
                      className="w-full p-2 border border-stone-300 text-sm"
                      value={newProject.title || ''}
                      onChange={e => setNewProject(p => ({...p, title: e.target.value}))}
                    />
                    <select 
                      className="w-full p-2 border border-stone-300 text-sm"
                      value={newProject.category}
                      onChange={e => setNewProject(p => ({...p, category: e.target.value as any}))}
                    >
                      {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" placeholder="Location" required
                      className="w-full p-2 border border-stone-300 text-sm"
                      value={newProject.location || ''}
                      onChange={e => setNewProject(p => ({...p, location: e.target.value}))}
                    />
                    <input 
                      type="text" placeholder="Year" required
                      className="w-full p-2 border border-stone-300 text-sm"
                      value={newProject.year || ''}
                      onChange={e => setNewProject(p => ({...p, year: e.target.value}))}
                    />
                  </div>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-stone-300 p-4 cursor-pointer hover:bg-stone-50 overflow-hidden relative"
                  >
                    {newProject.image ? (
                      <img src={newProject.image} className="h-20 w-full object-cover mx-auto" />
                    ) : (
                      <span className="text-xs text-stone-400 uppercase font-bold">Click to upload photo</span>
                    )}
                    <input 
                      type="file" hidden ref={fileInputRef} accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setIsAdding(false)} className="flex-1 py-2 text-xs font-bold uppercase border border-stone-300">Cancel</button>
                    <button type="submit" className="flex-1 py-2 text-xs font-bold uppercase bg-stone-900 text-white">Save</button>
                  </div>
                </form>
              )}
            </div>
          )}

          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-stone-900 aspect-[16/10]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              {isAdmin && (
                <button 
                  onClick={() => deleteProject(project.id)}
                  className="absolute top-4 left-4 z-20 bg-red-500 text-white p-2 text-xs font-bold uppercase hover:bg-red-600 transition-colors"
                >
                  <i className="fas fa-trash mr-1"></i> Delete
                </button>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-white text-3xl font-bold uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <div className="flex items-center text-stone-300 text-sm space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span><i className="fas fa-map-marker-alt mr-2 text-amber-500"></i>{project.location}</span>
                  <span><i className="fas fa-calendar-alt mr-2 text-amber-500"></i>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
