
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`flex items-center gap-1 ${language === "es" ? "" : "border-gray-700 text-gray-300 bg-gray-900/30"}`}
      >
        🇪🇸 ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1 ${language === "en" ? "" : "border-gray-700 text-gray-300 bg-gray-900/30"}`}
      >
        🇬🇧 EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
