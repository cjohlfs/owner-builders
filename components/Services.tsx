
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon }) => (
  <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-50 transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center text-sm text-slate-700">
          <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: "Flat-Fee General Contracting",
      description: "The traditional full-service GC experience, but with a transparent flat fee. No percentage-based markups means we never have an incentive to bloat your budget.",
      icon: "🏗️",
      features: ["Turnkey Construction", "Fixed Management Fee", "Full Site Supervision", "Zero Cost Bloating"]
    },
    {
      title: "Remodels & Additions",
      description: "Expert transformations for the spaces that matter most. We handle everything from high-end kitchens and baths to seamless home additions.",
      icon: "🔨",
      features: ["Kitchen & Bath Design", "Master Suite Additions", "Second Story Pop-tops", "Structural Renovations"]
    },
    {
      title: "ADU & DADU Specialists",
      description: "Navigate the complex requirements for Accessory Dwelling Units. We build and consult on detached and attached units for rental or family use.",
      icon: "🏠",
      features: ["Backyard Cottages", "Garage Conversions", "Permit Package Prep", "Max Utility Design"]
    },
    {
      title: "Owner-Builder Consulting",
      description: "Keep the control and the savings. We act as your professional mentor and project guide, helping you manage the build without the GC price tag.",
      icon: "💡",
      features: ["Mentorship & Strategy", "Sub-contractor Lists", "Timeline Management", "Cost Auditing"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Comprehensive Services</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          From full-service construction to expert mentorship, we provide a cleaner, more transparent way to build.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
};
