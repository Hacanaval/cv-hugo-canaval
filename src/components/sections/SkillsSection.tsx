import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { 
  Code, 
  Database, 
  BarChart, 
  FileSpreadsheet, 
  Globe,
  BrainCircuit,
  LineChart,
  Terminal,
  Server,
  Users,
  Presentation,
  BarChart3,
  Brain,
  Target,
  Shuffle
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [showTechnical, setShowTechnical] = useState(true);
  
  const technicalSkills = [
    {
      icon: <Globe size={24} />,
      title: t.languagesTitle,
      skills: t.languageSkills
    },
    {
      icon: <Terminal size={24} />,
      title: t.programmingTitle,
      skills: language === 'es' ? 
        ["Python", "SQL", "Shell scripting (Zsh/Bash)"] : 
        ["Python", "SQL", "Shell scripting (Zsh/Bash)"]
    },
    {
      icon: <Database size={24} />,
      title: t.dataTitle,
      skills: ["Pandas", "NumPy", "PySpark"]
    },
    {
      icon: <BrainCircuit size={24} />,
      title: t.mlTitle,
      skills: language === 'es' ? 
        ["Scikit-learn", "Modelos Supervisados", "Clasificación y Regresión"] : 
        ["Scikit-learn", "Supervised Models", "Classification & Regression"]
    },
    {
      icon: <LineChart size={24} />,
      title: t.statsTitle,
      skills: language === 'es' ? 
        ["Pruebas de hipótesis (Scipy)", "Bootstrapping", "Validación cruzada"] : 
        ["Hypothesis Testing (Scipy)", "Bootstrapping", "Cross-validation"]
    },
    {
      icon: <BarChart size={24} />,
      title: t.visualizationTitle,
      skills: ["Matplotlib", "Seaborn"]
    },
    {
      icon: <Server size={24} />,
      title: t.versionControlTitle,
      skills: ["Git", "GitHub"]
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: t.officeTitle,
      skills: language === 'es' ? 
        ["Excel avanzado", "Macros (VBA)", "Dashboards"] : 
        ["Advanced Excel", "Macros (VBA)", "Dashboards"]
    }
  ];

  const professionalSkills = [
    {
      icon: <Presentation size={24} />,
      title: t.communicationTitle,
      skills: [t.communicationSkill]
    },
    {
      icon: <Users size={24} />,
      title: t.leadershipTitle,
      skills: [t.leadershipSkill]
    },
    {
      icon: <Brain size={24} />,
      title: t.analyticalTitle,
      skills: [t.analyticalSkill]
    },
    {
      icon: <BarChart3 size={24} />,
      title: t.storytellingTitle,
      skills: [t.storytellingSkill]
    },
    {
      icon: <Shuffle size={24} />,
      title: t.adaptabilityTitle,
      skills: [t.adaptabilitySkill]
    },
    {
      icon: <Target size={24} />,
      title: t.resultsTitle,
      skills: [t.resultsSkill]
    }
  ];

  const displaySkills = showTechnical ? technicalSkills : professionalSkills;

  return (
    <section id="skills" className="py-24 dark-section-alt">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-6">{t.skillsTitle}</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={showTechnical ? "default" : "outline"} 
            onClick={() => setShowTechnical(true)}
            className={`${!showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""}`}
          >
            {t.technicalSkillsBtn}
          </Button>
          <Button 
            variant={!showTechnical ? "default" : "outline"} 
            onClick={() => setShowTechnical(false)}
            className={`${showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""}`}
          >
            {t.professionalSkillsBtn}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displaySkills.map((category, index) => (
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
