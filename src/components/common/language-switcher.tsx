"use client";

import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { currentLanguage, setCurrentLanguage, languages } = useLanguage();

  const handleLanguageChange = (language: typeof languages[0]) => {
    setCurrentLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="flex items-center space-x-2 text-gray-600 hover:text-[#314355] transition-colors duration-200"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLanguage.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`flex items-center space-x-3 cursor-pointer ${
              currentLanguage.code === language.code 
                ? 'bg-[#0a4b6f]/10 text-[#0a4b6f]' 
                : 'hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
            {currentLanguage.code === language.code && (
              <span className="ml-auto text-[#0a4b6f]">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}