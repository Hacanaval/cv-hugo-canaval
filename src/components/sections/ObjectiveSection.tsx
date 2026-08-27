import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const ObjectiveSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="objective" className="relative overflow-hidden bg-[var(--cobalt)] py-24 text-white reveal-section sm:py-32">
      <div className="section-frame">
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
          <div>
            <p className="section-kicker text-white/65">07 / {t.sectionLabels.direction}</p>
            <h2 className="section-heading text-white">{t.objectiveTitle}</h2>
          </div>
          <div className="body-copy space-y-7 border-t border-white/35 pt-8 text-xl leading-relaxed tracking-[-0.02em] text-white/88 sm:text-2xl">
            {t.objectiveParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full border-[70px] border-white/10" aria-hidden="true" />
    </section>
  );
};

export default ObjectiveSection;
