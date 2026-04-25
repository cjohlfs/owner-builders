
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="Owner Builders Consulting Firm" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering homeowners to take control of their construction projects through expert consulting and transparent pricing.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-orange-500">Owner Builder Consulting</a></li>
              <li><a href="#" className="hover:text-orange-500">Flat Fee Management</a></li>
              <li><a href="#" className="hover:text-orange-500">Project Estimating</a></li>
              <li><a href="#" className="hover:text-orange-500">Safety &amp; Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Success Stories</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">LI</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Owner Builders Consulting Firm. All rights reserved. Professional consulting, not a licensed general contractor in all jurisdictions. Check local laws for owner-builder requirements.</p>
        </div>
      </div>
    </footer>
  );
};
