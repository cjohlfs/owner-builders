import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Decorative background elements for premium feel */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">
            The New Standard in Residential Building
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight text-slate-900">
            Master Your Build. <br />
            <span className="text-orange-500">Eliminate the Markup.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Ditch the 20% "Contractor Tax" and build for <strong>30% less</strong>. Our professional residential consulting provides the expert roadmap you need to build at wholesale costs. 
            <span className="block mt-4 font-semibold text-slate-800">Elite project oversight. Fixed flat fees. Zero bloat.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-10 py-5 koi-accent text-white rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Get Your Project Savings Strategy
            </a>
            <a 
              href="#pricing" 
              className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              View Flat-Fee Plans
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-100">
            <div>
              <p className="text-4xl font-extrabold text-slate-900">30%</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Average Build Savings</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">Fixed</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Zero Percentage Markup</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">Elite</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Consulting & Oversight</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">ADU</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Permit & Build Pros</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* High-Impact Hero Image - Construction Consulting Specific */}
      <div className="mt-20 max-w-6xl mx-auto px-4">
        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] aspect-[21/9] relative group">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2400&auto=format&fit=crop" 
            alt="Expert residential construction consultant reviewing architectural blueprints on a modern home building site" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end md:items-center text-white">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-orange-400">Consulting Integrity</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Blueprint to a Better Build.</h2>
            </div>
            <div className="hidden md:block text-right">
              <div className="flex -space-x-4 mb-3 justify-end">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white/20 bg-slate-200 overflow-hidden backdrop-blur-sm">
                    <img src={`https://i.pravatar.cc/150?u=koi${i}`} alt="Verified Client" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-block border border-white/20">
                ⭐ Trusted by 500+ Local Homeowners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};