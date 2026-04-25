
import React from 'react';
// Navbar inline in App
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AIConsultant } from './components/AIConsultant';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav style={{position:'fixed',top:0,width:'100%',zIndex:50,background:'white',padding:'8px 24px',boxShadow:'0 1px 4px rgba(0,0,0,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}><img src="/logo.png" alt="Owner Builders Consulting Firm" style={{height:'64px',width:'auto'}} /></nav>
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="consultant" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Project AI</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Get instant answers about your owner-builder journey. Our AI helps you estimate potential savings and understand the technical process.
              </p>
            </div>
            <AIConsultant />
          </div>
        </section>

        <section id="services" className="py-20">
          <Services />
        </section>

        <section id="pricing" className="py-20 bg-slate-900 text-white">
          <Pricing />
        </section>

        <section id="faq" className="py-20 bg-slate-50">
          <FAQ />
        </section>

        <section id="contact" className="py-20">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
