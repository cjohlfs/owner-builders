import React, { useState } from 'react';

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
    setError(false);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (_) {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20 bg-orange-50 rounded-3xl border-2 border-orange-200">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center font-bold text-4xl mx-auto mb-6 text-white">✓</div>
        <h3 className="text-3xl font-bold mb-4 text-[#1B2A6B]">Request Received!</h3>
        <p className="text-slate-600 mb-6">Our consultant will reach out within 24 hours to schedule your free discovery call.</p>
        <button onClick={() => setSubmitted(false)} className="mt-2 text-orange-600 font-bold hover:underline">Send another inquiry</button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">Free Discovery Call</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2A6B] mb-6">Start Your Next Project</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Book your free discovery call. From flat-fee general contracting to owner-builder mentorship, we help you build without the markup.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B2A6B] rounded-2xl flex items-center justify-center shrink-0 text-xl">📍</div>
                <div>
                  <p className="font-bold text-slate-800">Service Area</p>
                  <p className="text-sm text-slate-500">National Flat-Fee Consulting</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B2A6B] rounded-2xl flex items-center justify-center shrink-0 text-xl">✉️</div>
                <div>
                  <p className="font-bold text-slate-800">Email Us Directly</p>
                  <a href="mailto:Chris@koi.build" className="text-sm text-orange-600 hover:underline font-medium">Chris@koi.build</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B2A6B] rounded-2xl flex items-center justify-center shrink-0 text-xl">💰</div>
                <div>
                  <p className="font-bold text-slate-800">Save Up to 30%</p>
                  <p className="text-sm text-slate-500">On your total construction costs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            <h3 className="text-2xl font-bold text-[#1B2A6B] mb-6">Schedule My Free Discovery Call</h3>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                Something went wrong. Please try emailing us directly at <a href="mailto:Chris@koi.build" className="underline font-medium">Chris@koi.build</a>
              </div>
            )}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden"><label>Don't fill: <input name="bot-field" /></label></p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                  <input required name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                  <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent">
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
                  <input name="sqft" type="text" value={formData.sqft} onChange={handleChange} placeholder="e.g. 2,000 sqft" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Desired Start</label>
                  <input name="startDate" type="text" value={formData.startDate} onChange={handleChange} placeholder="e.g. This Summer" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                <textarea name="details" rows={4} value={formData.details} onChange={handleChange} placeholder="Tell us about your project goals, location, and budget..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-orange-500 text-white rounded-xl text-lg font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all transform hover:-translate-y-0.5 active:scale-95">
                Schedule My Free Discovery Call →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
