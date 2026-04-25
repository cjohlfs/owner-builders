
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-bold text-slate-800">{question}</h3>
        <span className={`text-orange-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`mt-4 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        {answer}
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What exactly is an 'Owner-Builder'?",
      answer: "An owner-builder is a property owner who acts as their own general contractor. This allows you to hire subcontractors directly, avoiding the 15-25% markup traditional contractors charge on top of labor and materials."
    },
    {
      question: "How does Owner Builders save me money?",
      answer: "Traditional contractors have a financial incentive for your project to cost MORE (since they take a percentage). We charge a FIXED flat fee. Our only incentive is to help you build as efficiently as possible while maintaining elite quality."
    },
    {
      question: "Do I need a construction background?",
      answer: "Not with us. We provide the 'brain' for the project. We help you vet subcontractors, review bids, manage the timeline, and ensure everything passes inspection. You make the final decisions; we provide the professional roadmap."
    },
    {
      question: "What is Flat-Fee General Contracting?",
      answer: "If you don't want to be an owner-builder, we can act as your traditional GC. However, unlike others, we charge a fixed $19/sqft fee rather than a percentage of the total build. This removes all conflicts of interest."
    },
    {
      question: "Can you help with ADUs and DADUs?",
      answer: "Yes, we are specialists in Accessory Dwelling Units. We understand the specific zoning, permitting, and utility requirements to get these projects completed without the typical head-aches."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
        <p className="text-slate-600">Everything you need to know about building smarter and saving bigger.</p>
      </div>
      <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100">
        {faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>
    </div>
  );
};
