
import React from 'react';
import { useCMS } from '../context/CMSContext';
import EditableText from './EditableText';

const Hero: React.FC = () => {
  const { content, updateHero } = useCMS();

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <EditableText 
            element="span"
            value={content.hero.subtitle}
            onChange={(val) => updateHero({ subtitle: val })}
            className="inline-block text-amber-500 font-bold uppercase tracking-[0.3em] mb-4 text-sm"
          />
          <EditableText 
            element="h1"
            value={content.hero.title}
            onChange={(val) => updateHero({ title: val })}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase"
          />
          <EditableText 
            element="p"
            value={content.hero.description}
            onChange={(val) => updateHero({ description: val })}
            className="text-stone-300 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#portfolio" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-center transition-all hover:translate-y-[-2px] shadow-lg shadow-amber-500/20"
            >
              Our Portfolio
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white hover:bg-white hover:text-stone-900 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-center transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-around">
          <div className="text-center">
            <p className="text-white text-3xl font-bold">100+</p>
            <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">Projects Finished</p>
          </div>
          <div className="h-10 w-px bg-stone-700"></div>
          <div className="text-center">
            <p className="text-white text-3xl font-bold">15+</p>
            <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">Years Experience</p>
          </div>
          <div className="h-10 w-px bg-stone-700"></div>
          <div className="text-center">
            <p className="text-white text-3xl font-bold">10</p>
            <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">Active Sites</p>
          </div>
          <div className="h-10 w-px bg-stone-700"></div>
          <div className="text-center">
            <p className="text-white text-3xl font-bold">98%</p>
            <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">Safety Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
