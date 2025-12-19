
import React from 'react';
import { useCMS } from '../context/CMSContext';
import EditableText from './EditableText';

const Services: React.FC = () => {
  const { content, updateServices } = useCMS();

  const handleUpdateService = (id: string, field: 'title' | 'description', value: string) => {
    const updated = content.services.map(s => s.id === id ? { ...s, [field]: value } : s);
    updateServices(updated);
  };

  return (
    <section id="services" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <i className="fas fa-building text-[20rem]"></i>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight uppercase">
            Comprehensive <br /> Construction Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => (
            <div 
              key={service.id} 
              className="group p-8 border border-stone-800 bg-stone-800/50 hover:bg-stone-800 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="text-amber-500 text-4xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <EditableText
                element="h3"
                value={service.title}
                onChange={(val) => handleUpdateService(service.id, 'title', val)}
                className="text-xl font-bold mb-4 uppercase tracking-wide group-hover:text-amber-500 transition-colors"
              />
              <EditableText
                element="p"
                value={service.description}
                onChange={(val) => handleUpdateService(service.id, 'description', val)}
                className="text-stone-400 text-sm leading-relaxed mb-6"
              />
              <div className="h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></div>
              <div className="absolute -bottom-4 -right-4 text-white/5 text-6xl font-black italic">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 bg-amber-500">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-stone-900 uppercase">Need a customized solution?</h3>
            <p className="text-stone-800">Our team is ready to tackle projects of any scale or complexity.</p>
          </div>
          <button className="bg-stone-900 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">
            Consult Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
