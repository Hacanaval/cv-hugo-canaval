
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const ObjectiveSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-indigo-900/70 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.objectiveTitle}</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {t.objectiveText.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
