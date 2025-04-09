
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { GraduationCap } from "lucide-react";

interface TimelineItemProps {
  title: string;
  place: string;
  year: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, place, year }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot flex items-center justify-center">
        <GraduationCap size={16} className="text-indigo-400" />
      </div>
      <div className="bg-card p-5 rounded-lg shadow-md border border-gray-800">
        <h4 className="text-lg font-bold text-indigo-400">{title}</h4>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-300">{place}</p>
          <p className="text-indigo-400 font-semibold">{year}</p>
        </div>
      </div>
    </div>
  );
};

const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const educationItems = [
    {
      title: t.education1Title,
      place: t.education1Place,
      year: t.education1Year
    },
    {
      title: t.education2Title,
      place: t.education2Place,
      year: t.education2Year
    },
    {
      title: t.education3Title,
      place: t.education3Place,
      year: t.education3Year
    }
  ];

  return (
    <section id="education" className="py-24 dark-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">{t.educationTitle}</h2>
        
        <div className="max-w-3xl mx-auto timeline-container mt-12 px-4">
          {educationItems.map((item, index) => (
            <TimelineItem 
              key={index}
              title={item.title}
              place={item.place}
              year={item.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
