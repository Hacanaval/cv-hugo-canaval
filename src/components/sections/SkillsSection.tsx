
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { 
  Code, 
  Database, 
  BarChart, 
  FileSpreadsheet, 
  Github,
  Globe
} from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="bg-card rounded-xl shadow-md p-5 transition-all hover:shadow-lg hover:scale-[1.02] border border-gray-800">
    <div className="flex items-center mb-4">
      <div className="mr-3 text-indigo-400">
        {icon}
      </div>
      <h4 className="font-semibold text-lg text-gray-200">{title}</h4>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></span>
          <span className="text-gray-300">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: t.programmingTitle,
      skills: ["Python", "SQL", "Shell scripting"]
    },
    {
      icon: <Database size={24} />,
      title: t.dataTitle,
      skills: ["Scikit-learn", "Pandas", "NumPy", "PySpark"]
    },
    {
      icon: <BarChart size={24} />,
      title: t.visualizationTitle,
      skills: ["Matplotlib", "Seaborn", "Plotly"]
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: t.otherTitle,
      skills: ["Excel + VBA", "Git/GitHub"]
    },
    {
      icon: <Globe size={24} />,
      title: t.languagesTitle,
      skills: ["English (B2)", "German (Conversational)", "Spanish (Native)"]
    }
  ];

  return (
    <section id="skills" className="py-24 dark-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-10">{t.skillsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
