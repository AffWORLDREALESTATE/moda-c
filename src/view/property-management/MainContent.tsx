"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight font-serif">
              Do you need Property Management Services?
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Managing a profitable rental asset demands substantial time investment, specialized skills, and industry knowledge. Allow Modac Real Estate to relieve the stress and complexity involved with property administration.
              </p>
              
              <p>
                As a premier property administration firm in Dubai, we deliver thorough, expert solutions, managing every facet of rental asset oversight.
              </p>
              
              <p>
                We safeguard your assets, security deposits, and residents for Dubai rentals, managing rent collection, inspection reports, and upkeep supervision. Our partnership methodology guarantees quicker, superior service, and enhanced clarity, distinguishing us from competitors.
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Learn more →
            </Button>

            <div className="pt-8">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                Explore what we do as your trusted property manager
              </h3>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/team-consultation.jpg"
                alt="Property Management Team Consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
