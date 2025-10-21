"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Stay Updated with Property Management Insights
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get the latest property management tips, market updates, and expert advice delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:ring-white/50 focus:border-white/50"
                required
              />
            </div>
            <Button
              type="submit"
              className="h-12 px-8 bg-white text-blue-900 hover:bg-blue-50 font-semibold transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
