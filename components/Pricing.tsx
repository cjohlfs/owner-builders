
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Transparent Pricing, Zero Bloat</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Traditional GCs charge 15-25% of the total build cost. We charge a flat rate so our only incentive is to build your project efficiently and correctly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Tier 1 */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 transition-transform hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Consulting Kickstart</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold">$4,995</span>
            <span className="ml-1 text-slate-400">/one-time</span>
          </div>
          <p className="text-slate-400 mb-8 text-sm">Perfect for establishing your owner-builder foundation and securing initial permits.</p>
          <ul className="space-y-4 mb-8">
            {['Project Feasibility Study', 'Permit Navigation Help', 'Standard Contract Templates', 'Subcontractor Vetting Kit', 'Initial Budget Estimate'].map((f, i) => (
              <li key={i} className="flex items-center text-sm text-slate-300">
                <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                {f}
              </li>
            ))}
          </ul>
          <a href="#contact" className="block text-center py-3 border border-slate-600 rounded-xl hover:bg-slate-700 transition-colors">Get Started</a>
        </div>

        {/* Tier 2 - Featured */}
        <div className="bg-white text-slate-900 p-10 rounded-2xl border-4 border-orange-500 shadow-2xl relative z-10 scale-110">
          <div className="absolute top-0 right-0 koi-accent text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">Turnkey Flat-Fee</div>
          <h3 className="text-2xl font-bold mb-2">Flat-Fee General Contracting</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-5xl font-bold">$19.00</span>
            <span className="ml-1 text-slate-500">/sqft</span>
          </div>
          <p className="text-slate-600 mb-8">The traditional GC experience without the percentage markup. Full management, fixed cost.</p>
          <ul className="space-y-4 mb-10">
            {['Full Project Management', 'On-Site Supervision', 'Material Procurement Ovesight', 'Zero Builder Margins on Subs', 'Weekly Milestone Reports', 'Lien Waiver Management'].map((f, i) => (
              <li key={i} className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                {f}
              </li>
            ))}
          </ul>
          <a href="#contact" className="block text-center py-4 koi-accent text-white rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all">Start Build Discovery</a>
        </div>

        {/* Tier 3 */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 transition-transform hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Custom Projects</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold">Custom</span>
          </div>
          <p className="text-slate-400 mb-8 text-sm">For complex remodels, additions, or high-density ADU projects that need a custom quote.</p>
          <ul className="space-y-4 mb-8">
            {['Additions & Pop-tops', 'Kitchen/Bath Remodels', 'Multi-Unit ADU Strategy', 'Feasibility Consulting'].map((f, i) => (
              <li key={i} className="flex items-center text-sm text-slate-300">
                <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                {f}
              </li>
            ))}
          </ul>
          <a href="#contact" className="block text-center py-3 border border-slate-600 rounded-xl hover:bg-slate-700 transition-colors">Request Quote</a>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center">
        <p className="text-slate-400 text-sm max-w-3xl mx-auto">
          * Flat-fee GC rates ($19/sqft) are for single-family ground-up construction. Remodels, ADUs, and additions are quoted flat based on project scope. 
          By removing the percentage-based model, we eliminate the incentive to use more expensive materials or subcontractors just to increase build cost.
        </p>
      </div>
    </div>
  );
};
