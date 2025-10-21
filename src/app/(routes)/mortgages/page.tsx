"use client";

import React from 'react';
import HeroSection from '@/src/view/mortgages/HeroSection';
import MainContent from '@/src/view/mortgages/MainContent';
import MortgageCalculator from '@/src/view/mortgages/MortgageCalculator';
import WhyWorkWithUs from '@/src/view/mortgages/WhyWorkWithUs';
import OurServices from '@/src/view/mortgages/OurServices';
import FAQSection from '@/src/view/mortgages/FAQSection';
import NewsletterSection from '@/src/view/mortgages/NewsletterSection';
import ContactForm from '@/src/view/mortgages/ContactForm';
import ClientTestimonials from '@/src/view/mortgages/ClientTestimonials';

export default function MortgagesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <MainContent />
      <MortgageCalculator />
      <WhyWorkWithUs />
      <OurServices />
      <ClientTestimonials />
      <FAQSection />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
