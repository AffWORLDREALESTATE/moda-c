"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 font-serif">
              About Our Conveyancing
            </h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Setting New Benchmarks in Industry Standards. Pioneering Excellence in Conveyancing.
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We coordinate transfers with developers, banks, and government entities—covering contracts, settlement statements, NOCs, and registration—so your sale or purchase stays on track.
              </p>

              <p>
                Our specialists pre‑check documents, flag risks early, and keep you informed at every step to make the process clear, compliant, and stress‑free.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-primary hover:bg-primary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
                Enquire now →
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/third.webp"
                alt="Conveyancing consultation in Dubai"
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
