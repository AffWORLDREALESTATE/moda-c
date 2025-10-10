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
              About Conveyance with Modac Real Estate
            </h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Setting New Benchmarks in Industry Standards. Pioneering Excellence in Conveyancing.
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Focusing on Real Estate Transfer Services, we effortlessly partner with key participants in Dubai's property sector. Our group holds comprehensive deal-making experience and mastery in both mortgage and cash transactions, guaranteeing your real estate dealings are managed with exceptional professionalism and effectiveness.
              </p>
              
              <p>
                Understanding the complexities of Dubai's property laws, we have established a specialized transfer division to streamline the acquisition and disposal process, ensuring a seamless and stress-free journey.
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
                src="/images/building.jpg"
                alt="Professional conveyancing consultation"
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
