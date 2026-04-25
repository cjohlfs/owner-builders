
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20 bg-orange-50 rounded-3xl border-2 border-orange-200">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">✓</div>
        <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
        <p className="text-slate-600">One of our expert consultants will call you within 24 hours to discuss your project.</p>
        <button onClick={() => setSubmitted(false)} className="mt-8 text-orange-600 font-bold hover:underline">Send another inquiry</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-slate-100">
      <div>
        <h2 className="text-4xl font-bold mb-6">Start Your Next Project</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Book your free discovery call today. From traditional flat-fee general contracting to owner-builder mentorship, we provide the path to your dream home without the markup.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">📍</div>
            <div>
              <p className="font-bold">Headquarters</p>
              <p className="text-sm text-slate-500">National Flat-Fee Consulting</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">✉️</div>
            <div>
              <p className="font-bold">Email Us</p>
              <p className="text-sm text-slate-500">hello@koi.build</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all">
            <option>Flat-Fee General Contracting (Traditional)</option>
            <option>Owner-Builder Consulting (Self Managed)</option>
            <option>Kitchen/Bathroom Remodel</option>
            <option>ADU / DADU Project</option>
            <option>Home Addition</option>
            <option>Commercial/Custom Build</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Approximate Sqft</label>
            <input type="text" placeholder="e.g. 1500 sqft" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Desired Start</label>
            <input type="text" placeholder="e.g. Next Month" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
          <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="What are your goals for this build?"></textarea>
        </div>
        <button type="submit" className="w-full py-4 koi-accent text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all transform hover:scale-[1.02]">
          Schedule My Discovery Call
        </button>
      </form>
    </div>
  );
};
