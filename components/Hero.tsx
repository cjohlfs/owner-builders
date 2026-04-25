import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#1B2A6B]">
      {/* Deep navy blue hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A6B] via-[#1B3080] to-[#0f1d4d]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-300/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">
            The New Standard in Owner-Builder Consulting
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-white">
            Master Your Build. <br />
            <span className="text-orange-500">Eliminate the Markup.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Save up to 30% on construction costs by cutting out the general contractor middleman. Our flat-fee consulting gives you professional oversight, wholesale pricing access, and complete control.
            <span className="block mt-4 font-semibold text-white">Expert guidance. Fixed flat fees. Zero markup.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-10 py-5 bg-orange-500 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/30 hover:bg-orange-600 transition-all transform hover:-translate-y-1 active:scale-95">
              Get Your Free Savings Strategy
            </a>
            <a href="#pricing" className="px-10 py-5 bg-white/10 border-2 border-white/30 text-white rounded-2xl text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
              View Flat-Fee Plans
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            <div>
              <p className="text-4xl font-extrabold text-orange-400">30%</p>
              <p className="text-sm font-medium text-blue-200 uppercase tracking-wider">Average Build Savings</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">$0</p>
              <p className="text-sm font-medium text-blue-200 uppercase tracking-wider">Percentage Markup</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">500+</p>
              <p className="text-sm font-medium text-blue-200 uppercase tracking-wider">Homeowners Served</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">ADU</p>
              <p className="text-sm font-medium text-blue-200 uppercase tracking-wider">Permit & Build Experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* PNW Luxury Home Hero Image */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] aspect-[16/7] relative group">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&q=85&auto=format&fit=crop"
            alt="Pacific Northwest luxury residential home with deck - Owner Builders Consulting Firm"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="eager"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end md:items-center text-white">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2 text-orange-400">Owner Builder Advantage</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Build Smarter. Save More. Own It.</h2>
            </div>
            <div className="hidden md:block mt-4 md:mt-0">
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
