"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === "en" ? "hi" : "en";
    setLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      className="text-sm font-medium hover:text-primary transition-colors"
      title={`Switch to ${language === "en" ? "Hindi" : "English"}`}
    >
      {language === "en" ? "हिंदी" : "English"}
    </Button>
  );
}
