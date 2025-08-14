
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
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  skillLevels?: number[]; // Optional progress levels (0-100)
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, skillLevels }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-card rounded-xl shadow-md p-5 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] hover:border-indigo-700 border border-gray-800 skill-card group"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 text-indigo-400 skill-icon transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <h4 className="font-semibold text-lg text-gray-200 group-hover:text-indigo-300 transition-colors duration-300">{title}</h4>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{skill}</span>
              </div>
              {skillLevels && skillLevels[index] && (
                <span className="text-xs text-indigo-400 font-medium">{skillLevels[index]}%</span>
              )}
            </div>
            {skillLevels && skillLevels[index] && (
              <div className="ml-4">
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skillLevels[index]}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showTechnical, setShowTechnical] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const technicalSkills = [
    {
      icon: <Globe size={24} />,
      title: t.languagesTitle,
      skills: t.languageSkills,
      skillLevels: [95, 100] // Spanish, English
    },
    {
      icon: <Terminal size={24} />,
      title: t.programmingTitle,
      skills: ["Python", "SQL", "Shell scripting (Zsh/Bash)"],
      skillLevels: [90, 85, 75]
    },
    {
      icon: <Database size={24} />,
      title: t.dataTitle,
      skills: ["Pandas", "NumPy", "PySpark"],
      skillLevels: [90, 85, 70]
    },
    {
      icon: <BrainCircuit size={24} />,
      title: t.mlTitle,
      skills: language === 'es' ? 
        ["Scikit-learn, PyTorch, Tensorflow", "Modelos Supervisados (Clasificación, Regresión)", "Modelos Predictivos y Embeddings"] : 
        ["Scikit-learn, PyTorch, Tensorflow", "Supervised Models (Classification, Regression)", "Predictive Models and Embeddings"],
      skillLevels: [85, 80, 75]
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
      icon: <MessageSquare size={24} />,
      title: t.stakeholderTitle,
      skills: [t.stakeholderSkill]
    },
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

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSwitchSkills = (technical: boolean) => {
    setShowTechnical(technical);
    setTimeout(scrollToTop, 100);
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 dark-section-alt reveal-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-6">{t.skillsTitle}</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={!showTechnical ? "default" : "outline"} 
            onClick={() => setShowTechnical(false)}
            className={`${showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""} min-w-[160px]`}
          >
            {t.professionalSkillsBtn}
          </Button>
          <Button 
            variant={showTechnical ? "default" : "outline"} 
            onClick={() => setShowTechnical(true)}
            className={`${!showTechnical ? "border-gray-700 bg-gray-900/30 text-gray-300" : ""} min-w-[160px]`}
          >
            {t.technicalSkillsBtn}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displaySkills.map((category, index) => (
            <SkillCard 
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              skillLevels={category.skillLevels}
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
