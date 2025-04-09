
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const ObjectiveSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-indigo-900/70 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.objectiveTitle}</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          {t.objectiveText}
        </p>
      </div>
    </section>
  );
};

export default ObjectiveSection;
