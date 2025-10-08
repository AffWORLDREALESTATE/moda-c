"use client";
import React from 'react';
import HeroSection from '@/src/view/list-property/HeroSection';
import WhyModacProperties from '@/src/view/list-property/WhyModacProperties';
import HowItWorks from '@/src/view/list-property/HowItWorks';
import ClientTestimonials from '@/src/view/list-property/ClientTestimonials';
import ContactForm from '@/src/view/list-property/ContactForm';
import NewsletterSection from '@/src/view/list-property/NewsletterSection';

export default function ListYourPropertyPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyModacProperties />
      <HowItWorks />
      <ClientTestimonials />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
