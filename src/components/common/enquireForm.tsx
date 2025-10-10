import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useLanguage } from "@/src/contexts/LanguageContext";

function EnquireForm({ type }: { type: string }) {
  const { t } = useLanguage();
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder={t('form.name')}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
        />
        <Input
          type="text"
          placeholder={t('form.surname')}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="email"
          placeholder={t('form.email')}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
        />
        <Input
          type="tel"
          placeholder={t('form.telephone')}
          className="bg-white h-12 px-4 border border-gray-300 focus:border-brand-gold focus:ring-brand-gold font-mono rounded-none"
        />
      </div>
      {type !== "offPlan" && (
        <Textarea
          placeholder={t('form.message')}
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
        className="w-full rounded-none md:w-auto px-8 py-3 bg-brand-gold text-white font-semibold uppercase tracking-wider hover:bg-brand-gold/90 transition-colors bg-primary font-mono"
      >
        {t('form.submit')}
      </Button>
    </form>
  );
}

export default EnquireForm;
