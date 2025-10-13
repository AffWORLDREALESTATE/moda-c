"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/analysis.webp"
          alt="Conveyancing services in Dubai"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-white text-sm">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Services</span>
              <span className="mx-2">/</span>
              <span className="underline">Conveyancing</span>
            </nav>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-left font-serif">
            Seamless Conveyancing, Start To Finish
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl leading-relaxed text-left">
            Contracts, compliance, and coordination handled expertly—so you can move with confidence.
          </p>

          {/* CTA Button */}
          <div className="text-left">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Speak to a specialist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
