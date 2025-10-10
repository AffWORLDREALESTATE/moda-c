"use client";

import React from 'react';
import Image from 'next/image';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Professional mortgage consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 font-serif">
              Why Mortgages With Modac Real Estate?
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Elite Property Funding brings more than a decade of expertise across the United Arab Emirates.
              </p>
              
              <p>
                Whether you're an existing UAE property holder or considering funding for acquisitions or refinancing, you're in excellent hands! Our offerings provide thorough analysis and superior financial strategies customized to your specific requirements.
              </p>
              
              <p>
                Whether you're growing your real estate holdings or exploring funding alternatives for your existing assets, our professional guidance and outstanding financial solutions are crafted to simplify your property ventures. Elite Funding delivers personalized approaches from certified specialists along with access to favorable and competitive rates, clear mortgage procedures and availability to various Residential Loan Programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
