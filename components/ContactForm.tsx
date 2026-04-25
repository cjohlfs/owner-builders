import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    serviceType: 'Owner-Builder Consulting (Self Managed)',
    sqft: '', startDate: '', details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
    } catch (_) {}
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20 bg-orange-50 rounded-3xl border-2 border-orange-200">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">✓</div>
        <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
        <p className="text-slate-600">Our consultant will reach out within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="mt-8 text-orange-600 font-bold hover:underline">Send another inquiry</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-slate-100">
      <div>
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Start Your Next Project</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Book your free discovery call. From flat-fee general contracting to owner-builder mentorship, we help you build without the markup.
        </p>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">📍</div>
            <div>
              <p className="font-bold text-slate-800">Service Area</p>
              <p className="text-sm text-slate-500">National Flat-Fee Consulting</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">✉️</div>
            <div>
              <p className="font-bold text-slate-800">Email Us Directly</p>
              <a href="mailto:Chris@koi.build" className="text-sm text-orange-600 hover:underline font-medium">Chris@koi.build</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">💰</div>
            <div>
              <p className="font-bold text-slate-800">Save Up to 30%</p>
              <p className="text-sm text-slate-500">On your total construction costs</p>
            </div>
          </div>
        </div>
      </div>

      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden"><label>Don't fill: <input name="bot-field" /></label></p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="John Smith" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
            <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="(555) 000-0000" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
          <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all">
            <option>Owner-Builder Consulting (Self Managed)</option>
            <option>Flat-Fee General Contracting (Traditional)</option>
            <option>Kitchen/Bathroom Remodel</option>
            <option>ADU / DADU Project</option>
            <option>Home Addition</option>
            <option>New Custom Home Build</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Approximate Sqft</label>
            <input name="sqft" type="text" value={formData.sqft} onChange={handleChange} placeholder="e.g. 2,000 sqft" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Desired Start</label>
            <input name="startDate" type="text" value={formData.startDate} onChange={handleChange} placeholder="e.g. This Summer" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
          <textarea name="details" rows={4} value={formData.details} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Tell us about your project goals and budget..."></textarea>
        </div>
        <button type="submit" className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all transform hover:scale-[1.02]">
          Schedule My Free Discovery Call →
        </button>
      </form>
    </div>
  );
};
