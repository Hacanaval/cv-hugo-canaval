
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`flex items-center gap-1 ${language === "es" ? "bg-verde-menta text-verde-bosque" : "border-verde-oscuro/50 text-verde-pastel bg-verde-bosque/30"}`}
      >
        🇪🇸 ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1 ${language === "en" ? "bg-verde-menta text-verde-bosque" : "border-verde-oscuro/50 text-verde-pastel bg-verde-bosque/30"}`}
      >
        🇬🇧 EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
