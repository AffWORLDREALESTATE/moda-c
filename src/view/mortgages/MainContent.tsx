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
                src="/images/marketprofiling.webp"
                alt="Mortgage experts discussing financing options"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 font-serif">
              Why Choose Modac For Your Mortgage?
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our advisors bring deep UAE market knowledge and bank relationships to secure better terms—often faster and with less paperwork.
              </p>

              <p>
                First purchase or refinancing? Resident or non‑resident? We tailor a strategy around your goals, eligibility, and timeline.
              </p>

              <p>
                Expect transparent options, competitive rates, and a guided process from pre‑approval to handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
