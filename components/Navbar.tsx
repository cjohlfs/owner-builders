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
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button className="flex items-center" onClick={() => window.scrollTo(0,0)}>
          <img src="/logo.png" alt="Owner Builders Consulting Firm" className="h-16 w-auto hover:scale-105 transition-transform" />
        </button>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-orange-500 text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-lg">
            Start Saving Now
          </a>
        </div>
      </div>
    </nav>
  );
};
