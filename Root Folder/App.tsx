
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AdminToggle from './components/AdminToggle';
import AIConsultant from './components/AIConsultant';
import { CMSProvider } from './context/CMSContext';

const App: React.FC = () => {
  return (
    <CMSProvider>
      <div className="min-h-screen bg-stone-50 selection:bg-amber-500 selection:text-white relative">
        <Navbar />
        <main>
          <Hero />
          
          <section className="py-12 bg-white border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <i className="fab fa-aws text-4xl"></i>
              <i className="fab fa-google text-4xl"></i>
              <i className="fab fa-microsoft text-4xl"></i>
              <i className="fab fa-salesforce text-4xl"></i>
              <i className="fab fa-slack text-4xl"></i>
            </div>
          </section>

          <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000" 
                    alt="Construction Quality" 
                    className="rounded-sm shadow-2xl relative z-10"
                  />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500 -z-0"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-stone-200 -z-0"></div>
                </div>
                <div>
                  <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">Why BHAVISHYA INFRA</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8 uppercase leading-tight">
                    Building Constructions <br /> with Precision.
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-stone-900 text-amber-500 p-3 rounded-sm mr-4 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg uppercase">Unmatched Safety Standards</h4>
                        <p className="text-stone-600 text-sm">Bhavishya Infra maintains one of the best safety records in the industry, ensuring every site is a secure environment.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-stone-900 text-amber-500 p-3 rounded-sm mr-4 mt-1">
                        <i className="fas fa-microchip"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg uppercase">Tech-Driven Planning</h4>
                        <p className="text-stone-600 text-sm">Using BIM and advanced AI modeling to predict issues before we even break ground.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-stone-900 text-amber-500 p-3 rounded-sm mr-4 mt-1">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg uppercase">Transparent Partnership</h4>
                        <p className="text-stone-600 text-sm">Real-time project tracking for clients, ensuring complete visibility on budget and timeline.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AIConsultant />
          <Services />
          <Projects />

          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <i className="fas fa-quote-right text-5xl text-amber-500 mb-8 opacity-20"></i>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase italic tracking-wide">
                "Bhavishya Infra delivered our corporate headquarters <br /> ahead of schedule and under budget. Their precision is legendary."
              </h2>
              <div className="flex items-center justify-center">
                <img 
                  src="https://picsum.photos/seed/person1/100/100" 
                  alt="Client" 
                  className="w-16 h-16 rounded-full grayscale mr-4"
                />
                <div className="text-left">
                  <p className="font-bold uppercase tracking-widest text-sm">Jonathan Reiss</p>
                  <p className="text-stone-500 text-xs uppercase font-bold tracking-widest">CEO, Obsidian Ventures</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <AdminToggle />
      </div>
    </CMSProvider>
  );
};

export default App;
