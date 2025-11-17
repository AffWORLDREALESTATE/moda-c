"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { sendContactEmail } from "@/src/utils/email";
import { Loader2, CheckCircle2 } from "lucide-react";

function EnquireForm({ type }: { type: string }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    telephone: '',
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
          name: `${formData.name} ${formData.surname}`,
          email: formData.email,
          phone: formData.telephone,
          message: formData.message,
          subject: `Enquiry Form - ${type}`
        },
        'info@modacrealestate.com'
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        surname: '',
        email: '',
        telephone: '',
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder={t('form.name')}
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
          required
        />
        <Input
          type="text"
          placeholder={t('form.surname')}
          value={formData.surname}
          onChange={(e) => setFormData(prev => ({ ...prev, surname: e.target.value }))}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="email"
          placeholder={t('form.email')}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
          required
        />
        <Input
          type="tel"
          placeholder={t('form.telephone')}
          value={formData.telephone}
          onChange={(e) => setFormData(prev => ({ ...prev, telephone: e.target.value }))}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
          required
        />
      </div>
      {type !== "offPlan" && (
        <Textarea
          placeholder={t('form.message')}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="bg-white min-h-[150px] p-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold resize-y font-mono"
        />
      )}

      <p className="text-xs text-gray-500 mt-4 font-mono">
        {t('form.privacyText')}{" "}
        <a href="/privacy-policy" className="text-brand-gold hover:underline font-mono">
          {t('form.privacyPolicy')}
        </a>{" "}
        {t('form.andConsent')}{" "}
        <a href="/cookie-policy" className="text-brand-gold hover:underline font-mono">
          {t('form.cookies')}
        </a>{" "}
        {t('form.beingStored')}
      </p>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-none md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase tracking-wider transition-colors font-mono disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
            {t('form.submit')}...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <CheckCircle2 className="w-4 h-4 mr-2 inline" />
            Sent!
          </>
        ) : submitStatus === 'error' ? (
          'Error - Try Again'
        ) : (
          t('form.submit')
        )}
      </Button>
      
      {submitStatus === 'success' && (
        <p className="text-sm text-green-600 text-center font-mono">
          Thank you! We'll get back to you soon.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-sm text-red-600 text-center font-mono">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default EnquireForm;
