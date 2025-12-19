
import React, { useState } from 'react';
import { getProjectConsultation } from '../services/geminiService';
import { EstimationResult } from '../types';

const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EstimationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await getProjectConsultation(prompt);
      setResult(data);
    } catch (err: any) {
      if (err.message === "AI_NOT_CONFIGURED") {
        setError("AI Consultant is currently in maintenance mode. Please contact the administrator to enable this feature.");
      } else {
        setError(err.message || "Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultant" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Powered by AI</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Instant Design & <br />Planning Consultant
            </h2>
            <p className="text-stone-600 text-lg mb-8">
              Tell our AI about your construction goals. Whether it's a home renovation, a new commercial building, or a sustainable park, get instant insights on materials, timelines, and potential challenges.
            </p>
            
            <form onSubmit={handleConsult} className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: I want to build a modern 3-bedroom sustainable home..."
                className="w-full h-40 p-4 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-stone-800 placeholder:text-stone-400"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 bg-stone-900 text-white font-bold uppercase tracking-widest rounded-sm transition-all flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-600'}`}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Consulting Gemini AI...
                  </>
                ) : (
                  'Start Consultation'
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-sm">
                <p className="font-bold uppercase tracking-widest text-xs mb-1">Notice</p>
                <p>{error}</p>
                {error.includes("maintenance") && (
                  <p className="mt-2 text-[10px] opacity-70">Tip: Add the API_KEY to your hosting provider's environment variables to enable this.</p>
                )}
              </div>
            )}
          </div>

          <div className="bg-white p-8 md:p-12 shadow-xl min-h-[500px] border-t-8 border-amber-500 rounded-sm transition-all">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center text-stone-400">
                <i className="fas fa-robot text-6xl mb-6 opacity-20"></i>
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-widest">Consultant Ready</h3>
                <p className="max-w-xs mt-2">Submit your project details to see the analysis appear here.</p>
              </div>
            )}

            {loading && (
              <div className="space-y-8 animate-pulse">
                <div className="h-6 bg-stone-100 rounded w-3/4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-stone-100 rounded"></div>
                  <div className="h-4 bg-stone-100 rounded"></div>
                  <div className="h-4 bg-stone-100 rounded w-5/6"></div>
                </div>
              </div>
            )}

            {result && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div>
                  <h3 className="text-amber-600 text-xs font-black uppercase tracking-widest mb-2">Project Summary</h3>
                  <p className="text-stone-800 leading-relaxed italic">"{result.summary}"</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-amber-600 text-xs font-black uppercase tracking-widest mb-3 flex items-center">
                      <i className="fas fa-tools mr-2"></i> Materials
                    </h3>
                    <ul className="space-y-2">
                      {result.suggestedMaterials.map((item, idx) => (
                        <li key={idx} className="text-stone-600 text-sm flex items-start">
                          <span className="text-amber-500 mr-2">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-amber-600 text-xs font-black uppercase tracking-widest mb-3 flex items-center">
                      <i className="fas fa-calendar-alt mr-2"></i> Timeline
                    </h3>
                    <p className="text-stone-800 font-bold">{result.estimatedTimeline}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-amber-600 text-xs font-black uppercase tracking-widest mb-3 flex items-center">
                    <i className="fas fa-exclamation-triangle mr-2"></i> Key Considerations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.potentialChallenges.map((challenge, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-700 px-3 py-1 text-xs rounded-full border border-stone-200">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
