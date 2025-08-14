
import React, { useState, useRef, useEffect } from "react";
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
  Shuffle,
  ArrowUp,
  Search,
  Map,
  MessageSquare,
  // Nuevos iconos específicos de tecnología
  Cpu,
  GitBranch,
  Layers,
  Zap,
  Activity,
  TrendingUp,
  BarChart2,
  PieChart,
  Settings,
  Workflow,
  Network,
  Shield,
  Boxes,
  Wrench,
  Gauge,
  FlaskConical,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="bg-card rounded-xl shadow-md p-5 sm:p-6 transition-all hover:shadow-lg hover:scale-[1.02] hover:border-indigo-700 border border-gray-800 skill-card touch-manipulation">
    <div className="flex items-center mb-4 sm:mb-5">
      <div className="mr-3 sm:mr-4 text-indigo-400 skill-icon transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-hierarchy-3 text-high-contrast">{title}</h4>
    </div>
    <ul className="space-y-2 sm:space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-start">
          <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
          <span className="text-body-small text-medium-contrast">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showTechnical, setShowTechnical] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const technicalSkills = [
    {
      icon: <Globe size={24} />,
      title: t.languagesTitle,
      skills: t.languageSkills
    },
    {
      icon: <Cpu size={24} />,
      title: t.programmingTitle,
      skills: ["Python", "SQL", "Shell scripting (Zsh/Bash)"]
    },
    {
      icon: <Database size={24} />,
      title: t.dataTitle,
      skills: ["Pandas", "NumPy", "PySpark"]
    },
    {
      icon: <Bot size={24} />,
      title: t.mlTitle,
      skills: language === 'es' ? 
        ["Scikit-learn, PyTorch, Tensorflow", "Modelos Supervisados (Clasificación, Regresión)", "Modelos Predictivos y Embeddings"] : 
        ["Scikit-learn, PyTorch, Tensorflow", "Supervised Models (Classification, Regression)", "Predictive Models and Embeddings"]
    },
    {
      icon: <FlaskConical size={24} />,
      title: t.statsTitle,
      skills: language === 'es' ? 
        ["Pruebas de hipótesis (Scipy)", "Bootstrapping", "Validación cruzada"] : 
        ["Hypothesis Testing (Scipy)", "Bootstrapping", "Cross-validation"]
    },
    {
      icon: <BarChart2 size={24} />,
      title: t.visualizationTitle,
      skills: ["Matplotlib", "Seaborn"]
    },
    {
      icon: <GitBranch size={24} />,
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
      icon: <Search size={24} />,
      title: t.productDiscoveryTitle,
      skills: [t.productDiscoverySkill]
    },
    {
      icon: <Map size={24} />,
      title: t.roadmapTitle,
      skills: [t.roadmapSkill]
    },
    {
      icon: <Users size={24} />,
      title: t.stakeholderTitle,
      skills: [t.stakeholderSkill]
    },
    {
      icon: <Presentation size={24} />,
      title: t.communicationTitle,
      skills: [t.communicationSkill]
    },
    {
      icon: <Shield size={24} />,
      title: t.leadershipTitle,
      skills: [t.leadershipSkill]
    },
    {
      icon: <Brain size={24} />,
      title: t.analyticalTitle,
      skills: [t.analyticalSkill]
    },
    {
      icon: <PieChart size={24} />,
      title: t.storytellingTitle,
      skills: [t.storytellingSkill]
    },
    {
      icon: <Zap size={24} />,
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

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSwitchSkills = (technical: boolean) => {
    setShowTechnical(technical);
    setTimeout(scrollToTop, 100);
  };

  return (
    <section id="skills" ref={sectionRef} className="section-spacing-large dark-section-alt reveal-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">{t.skillsTitle}</h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <Button 
            variant={!showTechnical ? "default" : "outline"} 
            onClick={() => setShowTechnical(false)}
            className={`${showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""} w-full sm:min-w-[160px] sm:w-auto py-3 touch-manipulation`}
          >
            {t.professionalSkillsBtn}
          </Button>
          <Button 
            variant={showTechnical ? "default" : "outline"} 
            onClick={() => setShowTechnical(true)}
            className={`${!showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""} w-full sm:min-w-[160px] sm:w-auto py-3 touch-manipulation`}
          >
            {t.technicalSkillsBtn}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
          {displaySkills.map((category, index) => (
            <SkillCard 
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-16">
          <Button 
            variant={!showTechnical ? "default" : "outline"} 
            onClick={() => handleSwitchSkills(false)}
            className={`${showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""} min-w-[160px]`}
          >
            {t.professionalSkillsBtn}
          </Button>
          <Button 
            variant={showTechnical ? "default" : "outline"} 
            onClick={() => handleSwitchSkills(true)}
            className={`${!showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""} min-w-[160px]`}
          >
            {t.technicalSkillsBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
