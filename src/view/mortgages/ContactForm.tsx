"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { MessageCircle, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { sendContactEmail } from '../../utils/email';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'English',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactEmail(
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          language: formData.language,
          message: formData.message,
          subject: 'Mortgage Consultation Request'
        },
        'info@modacrealestate.com'
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        language: 'English',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6 font-serif">
              Get Your Mortgage Consultation
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to secure your dream home? Our mortgage experts are here to guide you through the process.
            </p>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-200">
                    Click to WhatsApp
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+971 4 892 5831</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a href="mailto:info@modacproperties.com" className="text-primary hover:text-primary/80 transition-colors duration-200">
                    info@modacproperties.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <div className="flex">
                  <Select defaultValue="+971">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+971">🇦🇪 +971</SelectItem>
                      <SelectItem value="+91">🇮🇳 +91</SelectItem>
                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 ml-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language
                </label>
                <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Arabic">Arabic</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Urdu">Urdu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your mortgage requirements"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary text-white py-4 text-lg font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  'Error - Please Try Again'
                ) : (
                  'Get Mortgage Consultation'
                )}
              </Button>
              
              {submitStatus === 'success' && (
                <p className="text-sm text-green-600 text-center">
                  Thank you! We'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-600 text-center">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}

              <p className="text-sm text-gray-500 text-center">
                By clicking Submit, you agree to our{' '}
                <a href="#" className="text-primary underline hover:text-primary/80">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary underline hover:text-primary/80">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
