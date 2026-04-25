import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AIConsultant } from './components/AIConsultant';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const HowItWorks: React.FC = () => (
  <section className="py-20 bg-[#1B2A6B] text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">Simple Process</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How Owner-Builder Consulting Works</h2>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">From your first call to your final walkthrough, we guide every step.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-orange-500/30"></div>
        {[
          { step: '01', title: 'Free Discovery Call', desc: 'We review your project, goals, and budget. You leave with a clear savings estimate and a path forward.' },
          { step: '02', title: 'Project Planning', desc: 'We build your permit package, subcontractor list, timeline, and cost audit. Your roadmap is set.' },
          { step: '03', title: 'Build Execution', desc: 'We manage your subs, inspect work stages, review invoices, and keep your project on track.' },
          { step: '04', title: 'Final Delivery', desc: 'Certificate of occupancy secured. You own a high-quality home — and kept 30%+ in your pocket.' }
        ].map((item) => (
          <div key={item.step} className="relative text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg shadow-orange-500/30">
              {item.step}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyOwnerBuilder: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">The Numbers Don't Lie</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B2A6B] mb-4">Owner-Builder vs. Traditional GC</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">See exactly where your money goes — and where it doesn't have to.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-red-700 mb-6">❌ Traditional GC Model</h3>
          <ul className="space-y-4">
            {[
              '15–25% GC markup on all labor & materials',
              'Incentivized to use expensive subs',
              'Limited visibility into actual costs',
              'No direct relationship with your trades',
              'Pay for inefficiency and overhead'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="text-red-400 font-bold mt-1">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-red-100 rounded-2xl text-center">
            <p className="text-red-800 font-bold text-lg">$500K build = $75–125K in GC fees</p>
          </div>
        </div>
        <div className="bg-[#1B2A6B] border-2 border-[#1B2A6B] rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-orange-400 mb-6">✅ Owner Builders Model</h3>
          <ul className="space-y-4">
            {[
              'Flat fee — $19/sqft, no percentage markup',
              'You hire subs directly at wholesale rates',
              'Full cost transparency on every invoice',
              'Build lasting relationships with your trades',
              'Our incentive = efficiency, quality, savings'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-blue-100">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-orange-500/20 rounded-2xl text-center">
            <p className="text-orange-300 font-bold text-lg">$500K build = save up to $125K+</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">Client Stories</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B2A6B] mb-4">What Our Clients Say</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real homeowners who took control of their builds — and their savings.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote: "We saved $87,000 on our new home build. The Owner Builders team guided us through every subcontractor bid, every permit, every inspection. Best decision we ever made.",
            name: "Mike & Sarah T.",
            project: "3,800 sqft Custom Home, Kirkland WA",
            savings: "$87K Saved"
          },
          {
            quote: "I was nervous about being my own GC. Chris and the team made it completely manageable. The flat fee model means they're always on your side — not padding the budget.",
            name: "James R.",
            project: "ADU + Main Home Remodel, Bellevue WA",
            savings: "$42K Saved"
          },
          {
            quote: "The permit navigation alone was worth the consulting fee. They knew exactly what the city needed and saved us 4 months of delays. Our build came in under budget.",
            name: "The Hendersons",
            project: "4,200 sqft New Construction, Redmond WA",
            savings: "$110K Saved"
          }
        ].map((t, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(s => <span key={s} className="text-orange-400 text-xl">★</span>)}
            </div>
            <p className="text-slate-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="border-t border-slate-100 pt-4">
              <p className="font-bold text-[#1B2A6B]">{t.name}</p>
              <p className="text-sm text-slate-500">{t.project}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-orange-50 text-orange-600 text-sm font-bold rounded-full">{t.savings}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <HowItWorks />

        <WhyOwnerBuilder />

        <section id="ai-expert" className="py-20 bg-[#1B2A6B]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">AI-Powered</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Your Project AI</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Get instant answers about your owner-builder journey. Our AI helps you estimate potential savings and understand the technical process.
              </p>
            </div>
            <AIConsultant />
          </div>
        </section>

        <section id="services" className="py-20">
          <Services />
        </section>

        <section id="pricing" className="py-20 bg-[#1B2A6B] text-white">
          <Pricing />
        </section>

        <Testimonials />

        <section id="faq" className="py-20 bg-slate-50">
          <FAQ />
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
