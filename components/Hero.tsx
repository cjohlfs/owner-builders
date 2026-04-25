import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">
            The New Standard in Owner-Builder Consulting
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight text-slate-900">
            Master Your Build. <br />
            <span className="text-orange-500">Eliminate the Markup.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Save up to 30% on construction costs by cutting out the general contractor middleman. Our flat-fee consulting gives you professional oversight, wholesale pricing access, and complete control.
            <span className="block mt-4 font-semibold text-slate-800">Expert guidance. Fixed flat fees. Zero markup.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-10 py-5 bg-orange-500 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-all transform hover:-translate-y-1 active:scale-95">
              Get Your Free Savings Strategy
            </a>
            <a href="#pricing" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-sm">
              View Flat-Fee Plans
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-100">
            <div>
              <p className="text-4xl font-extrabold text-orange-500">30%</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Average Build Savings</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">$0</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Percentage Markup</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">500+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Homeowners Served</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-slate-900">ADU</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Permit & Build Experts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto px-4">
        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] aspect-[21/9] relative group bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2400&q=80&auto=format&fit=crop"
            alt="Residential home construction framing with Owner Builders Consulting Firm"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
            loading="eager"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end md:items-center text-white">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-orange-400">Owner Builder Advantage</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Build Smarter. Save More. Own It.</h2>
            </div>
            <div className="hidden md:block text-right mt-4 md:mt-0">
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
