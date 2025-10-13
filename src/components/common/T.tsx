"use client";

import { useLanguage } from "@/src/contexts/LanguageContext";

type TProps = {
  k: string;
  fallback?: string;
  className?: string;
};

export function T({ k, fallback = "", className }: TProps) {
  const { t } = useLanguage();
  return <span className={className}>{t(k) || fallback}</span>;
}


