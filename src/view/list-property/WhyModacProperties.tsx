import React from 'react';
import { Check } from 'lucide-react';

function WhyModacProperties() {
  const benefits = [
    "Most trusted real estate agency in the UAE",
    "Expert property valuation and marketing",
    "Wide network of potential buyers and tenants",
    "Professional photography and virtual tours",
    "Dedicated property consultant"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8 font-serif">
              Why Choose Modac Real Estate?
            </h2>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center">
              Get Started
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Content - Property Image */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl overflow-hidden">
              <img 
                src="/images/property-listing.jpg" 
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Elements */}
              <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
                <p className="text-orange-500 font-bold">Sell Faster</p>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold">Premium Listing</p>
                <p className="text-sm text-gray-600">Get maximum visibility for your property</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyModacProperties;
