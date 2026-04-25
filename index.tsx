import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

/**
 * GEMINI API INTEGRATION
 */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getAIConsultation = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the Koi Build AI Consultant. You help homeowners save 30% on construction by explaining the Owner-Builder and Flat-Fee GC models. 
        Focus on eliminating the "Contractor Tax" (percentage markups). 
        You are professional, authoritative, and encouraging. 
        Encourage booking a 'Discovery Call' for projects like ADUs, Kitchens, or Custom Homes.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    return "I'm having trouble connecting to my blueprints. Please use our contact form for immediate help!";
  }
};

/**
 * COMPONENTS
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-4 ${isScrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-10 h-10 koi-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/20">K</div>
          <span className="text-2xl font-black tracking-tighter">KOI<span className="text-orange-500">BUILD</span></span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {['Services', 'Pricing', 'FAQ', 'AI Expert'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors uppercase tracking-widest">{item}</a>
          ))}
          <a href="#contact" className="koi-accent text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">Start Saving</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">The Blueprint to a Better Build</span>
      <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tighter text-slate-900">
        Master Your Build.<br />
        <span className="text-orange-500">Eliminate the Markup.</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
        Ditch the 20% "Contractor Tax" and build for <strong>30% less</strong>. Professional residential consulting for homeowners who want elite results at wholesale costs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contact" className="px-10 py-5 koi-accent text-white rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-all transform hover:-translate-y-1">Get Your Savings Strategy</a>
        <a href="#pricing" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all">View Flat-Fee Plans</a>
      </div>
      
      <div className="mt-20 max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[21/9]">
        <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2400&auto=format&fit=crop" alt="Residential Construction Consultant" className="w-full h-full object-cover" />
      </div>
    </div>
  </header>
);

const Services = () => {
  const list = [
    { title: "Flat-Fee Management", icon: "🏗️", desc: "Full-service GC experience for a fixed fee. No incentives to bloat your budget." },
    { title: "Owner-Builder Consulting", icon: "💡", desc: "Keep control and the savings. We act as your professional project mentor." },
    { title: "ADU & DADU Pros", icon: "🏠", desc: "Specialized expertise in backyard cottages and detached rental units." },
    { title: "Remodel Strategy", icon: "🔨", desc: "High-end kitchen and bath transformations without the retail markups." }
  ];
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">The Cleaner Way to Build</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIConsultant = () => {
  const [msg, setMsg] = useState([{r:'b', t: "Hi! I'm your project AI. How much do you want to save on your build today?"}]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    if (!input.trim() || loading) return;
    const current = input; setInput('');
    setMsg(p => [...p, {r:'u', t:current}]);
    setLoading(true);
    const res = await getAIConsultation(current);
    setMsg(p => [...p, {r:'b', t:res}]);
    setLoading(false);
  };

  return (
    <section id="aiexpert" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Project AI Consultant</h2>
          <p className="text-slate-500">Instant expert advice on construction costs and strategy.</p>
        </div>
        <div className="bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[500px]">
          <div className="p-4 border-b border-white/10 flex items-center gap-3 text-white">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-xs font-bold uppercase tracking-widest">Live System</span>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-800">
            {msg.map((m, i) => (
              <div key={i} className={`flex ${m.r === 'u' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.r === 'u' ? 'bg-orange-500 text-white' : 'bg-slate-700 text-slate-100'}`}>
                  {m.t}
                </div>
              </div>
            ))}
            {loading && <div className="text-slate-400 text-xs animate-pulse">Consulting blueprints...</div>}
          </div>
          <div className="p-4 bg-slate-900 border-t border-white/10 flex gap-2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask anything..." className="flex-1 bg-slate-800 text-white rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
            <button onClick={send} className="koi-accent text-white p-2 rounded-xl">Go</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-16">Transparent Flat Fees</h2>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        <div className="p-10 rounded-3xl bg-slate-800 border border-slate-700 text-left">
          <h3 className="text-xl font-bold mb-2">Kickstart</h3>
          <p className="text-4xl font-black mb-6">$4,995<span className="text-sm font-normal text-slate-400">/fixed</span></p>
          <ul className="space-y-3 text-sm text-slate-300 mb-8">
            <li>✓ Feasibility Study</li>
            <li>✓ Permit Roadmap</li>
            <li>✓ Subcontractor Vetting</li>
          </ul>
          <a href="#contact" className="block text-center py-3 border border-slate-600 rounded-xl hover:bg-slate-700">Get Started</a>
        </div>
        <div className="p-10 rounded-[2.5rem] bg-white text-slate-900 border-4 border-orange-500 scale-105 shadow-2xl text-left relative">
           <span className="absolute -top-4 left-1/2 -translate-x-1/2 koi-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Best Value</span>
          <h3 className="text-2xl font-bold mb-2">Turnkey Build</h3>
          <p className="text-5xl font-black mb-6">$19<span className="text-sm font-normal text-slate-500">/sqft</span></p>
          <ul className="space-y-3 text-slate-700 mb-10">
            <li>✓ Full Project Management</li>
            <li>✓ On-Site Supervision</li>
            <li>✓ Zero Builder Margins on Subs</li>
            <li>✓ Weekly Milestone Reports</li>
          </ul>
          <a href="#contact" className="block text-center py-4 koi-accent text-white rounded-xl font-bold shadow-lg shadow-orange-500/30">Start Discovery</a>
        </div>
        <div className="p-10 rounded-3xl bg-slate-800 border border-slate-700 text-left">
          <h3 className="text-xl font-bold mb-2">Custom Remodel</h3>
          <p className="text-4xl font-black mb-6">Quote</p>
          <ul className="space-y-3 text-sm text-slate-300 mb-8">
            <li>✓ Additions & Pop-tops</li>
            <li>✓ High-end Kitchen/Bath</li>
            <li>✓ Structural Consulting</li>
          </ul>
          <a href="#contact" className="block text-center py-3 border border-slate-600 rounded-xl hover:bg-slate-700">Inquire</a>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const qas = [
    { q: "What is an Owner-Builder?", a: "You act as your own general contractor. We provide the expertise and roadmap to ensure you build safely and correctly while saving the 20% GC markup." },
    { q: "Why Flat Fees?", a: "Traditional GCs earn more when you spend more. Our flat fee ensures we are always aligned with your budget goals." }
  ];
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Building Smarter FAQ</h2>
        <div className="space-y-4">
          {qas.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold mb-2">{f.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">Let's Blueprint Your Savings.</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">Book a 15-minute discovery call to see how our flat-fee model fits your project.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm font-bold">📍 National Remote Consulting</div>
          <div className="flex items-center gap-4 text-sm font-bold">✉️ hello@koi.build</div>
        </div>
      </div>
      <form className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-xl" onSubmit={e => e.preventDefault()}>
        <input placeholder="Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" />
        <input placeholder="Email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" />
        <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500">
           <option>New Custom Home</option>
           <option>ADU/DADU Project</option>
           <option>Major Remodel</option>
        </select>
        <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500"></textarea>
        <button className="w-full py-4 koi-accent text-white font-bold rounded-xl shadow-lg shadow-orange-500/20">Send Inquiry</button>
      </form>
    </div>
  </section>
);

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <AIConsultant />
    <Services />
    <Pricing />
    <FAQ />
    <ContactForm />
    <footer className="py-12 bg-slate-900 text-white text-center text-xs opacity-50">
      © {new Date().getFullYear()} Koi Build Consulting. Licensed Consulting & Management Experts.
    </footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);