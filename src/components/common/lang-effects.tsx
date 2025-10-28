"use client";

import { useEffect } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function LanguageEffects() {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const lang = currentLanguage?.code || "en";
    // Keep everything LTR regardless of language for consistent layout
    const dir = "ltr";

    // Set on <html>
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);

    // Remove RTL class if it exists
    document.body.classList.remove("rtl");
  }, [currentLanguage]);

  return null;
}
