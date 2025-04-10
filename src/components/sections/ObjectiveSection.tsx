
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const ObjectiveSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="objective" className="py-20 bg-indigo-900/70 text-white reveal-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t.objectiveTitle}</h2>
        <div className="max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: t.objectiveHtml }} />
      </div>
    </section>
  );
};

export default ObjectiveSection;
