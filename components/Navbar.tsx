
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'AI Expert', href: '#consultant' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img 
            src="/logo.png" 
            alt="Owner Builders Consulting Firm" 
            className="h-14 w-auto group-hover:scale-105 transition-transform"
          />
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="koi-accent text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 transform hover:scale-105 active:scale-95"
          >
            Start Saving Now
          </a>
        </div>
      </div>
    </nav>
  );
};
