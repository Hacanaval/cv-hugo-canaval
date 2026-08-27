
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex border border-white/15 bg-black/10 p-1 backdrop-blur-md">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`h-7 rounded-none border-0 px-2.5 font-mono text-[10px] tracking-wider ${language === "es" ? "bg-[var(--signal)] text-[var(--ink)] hover:bg-[var(--signal)]" : "bg-transparent text-white/55 hover:bg-white/10 hover:text-white"}`}
      >
        ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`h-7 rounded-none border-0 px-2.5 font-mono text-[10px] tracking-wider ${language === "en" ? "bg-[var(--signal)] text-[var(--ink)] hover:bg-[var(--signal)]" : "bg-transparent text-white/55 hover:bg-white/10 hover:text-white"}`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
