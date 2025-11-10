"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { sendContactEmail } from '../../utils/email';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactEmail(
        {
          name: 'Newsletter Subscriber',
          email: email,
          subject: 'Newsletter Subscription - Short-Term Rental'
        },
        'info@modacrealestate.com'
      );
      
      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Stay Updated with Short-Term Rental Insights
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get the latest short-term rental tips, market updates, and expert advice delivered to your inbox.
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
              disabled={isSubmitting}
              className="h-12 px-8 bg-white text-blue-900 hover:bg-blue-50 font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : submitStatus === 'success' ? (
                <CheckCircle2 className="w-5 h-5 mr-2" />
              ) : (
                <Mail className="w-5 h-5 mr-2" />
              )}
              {isSubmitting ? 'Subscribing...' : submitStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
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
