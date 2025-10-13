"use client";

import React from 'react';
import { 
  Home, 
  Camera, 
  TrendingUp, 
  Check, 
  BarChart3, 
  FileCheck 
} from 'lucide-react';

export default function WhyWorkWithUs() {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "End‑to‑End Guidance",
      description: "From pre‑approval to handover, we manage paperwork, timelines, and bank coordination so you can focus on the move."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Tailored Strategies",
      description: "Resident or non‑resident, first‑time or investor—we structure options that match your goals and eligibility."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "UAE Market Expertise",
      description: "A decade of on‑ground experience and strong lender relationships help unlock better terms and faster approvals."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Independent Advice",
      description: "Unbiased recommendations. We compare multiple banks and products, putting your interests first."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Competitive Rates",
      description: "Access preferential rates and fee structures negotiated through our lender network."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Wider Product Choice",
      description: "Fixed, variable, buy‑out, equity release, and more—choose confidently from a wide range of products."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
            Why Work With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work with a mortgage partner who simplifies decisions and speeds up outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
