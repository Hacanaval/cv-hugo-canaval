import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { GraduationCap } from "lucide-react";

interface TimelineItemProps {
  title: string;
  place: string;
  period: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, place, period, index }) => (
  <article className="grid gap-4 border-t border-white/20 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-start sm:gap-7">
    <span className="font-mono text-[10px] text-white/30">0{index + 1}</span>
    <div>
      <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-white/55">{place}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--signal)]">
      <GraduationCap size={17} />{period}
    </div>
  </article>
);

const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const educationItems = [
    { title: t.education3Title, place: t.education3Place, period: t.education3Period },
    { title: t.education1Title, place: t.education1Place, period: t.education1Period },
    { title: t.education2Title, place: t.education2Place, period: t.education2Period },
  ];

  return (
    <section id="education" className="ink-section section-spacing reveal-section">
      <div className="section-frame">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
          <div>
            <p className="section-kicker text-[var(--signal)]">05 / {t.sectionLabels.background}</p>
            <h2 className="section-heading text-white">{t.educationTitle}</h2>
          </div>
          <div className="lg:pt-8">
            {educationItems.map((item, index) => <TimelineItem key={item.title} {...item} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
