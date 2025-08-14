
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import ProjectCard from "./ProjectCard";

const ProjectsList: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const projects = [
    {
      title: t.saasAgentTitle,
      description: t.saasAgentDesc,
      highlights: t.saasAgentHighlights,
      stack: t.saasAgentStack,
      githubUrl: "https://github.com/Hacanaval/agente_vendedor_backend"
    },
    {
      title: t.ageClassificationTitle,
      description: t.ageClassificationDesc,
      highlights: t.ageClassificationHighlights,
      stack: t.ageClassificationStack,
      githubUrl: "https://github.com/Hacanaval/cnn-image-based-age-verification"
    },
    {
      title: t.sentimentAnalysisTitle,
      description: t.sentimentAnalysisDesc,
      highlights: t.sentimentAnalysisHighlights,
      stack: t.sentimentAnalysisStack,
      githubUrl: "https://github.com/Hacanaval/nlp-sentiment-models-comparison"
    },
    {
      title: t.taxiDemandTitle,
      description: t.taxiDemandDesc,
      highlights: t.taxiDemandHighlights,
      stack: t.taxiDemandStack,
      githubUrl: "https://github.com/Hacanaval/ride-demand-timeseries"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={el => projectRefs.current[index] = el}
          className={`transition-all duration-700 ${
            visibleProjects[index] 
              ? index % 2 === 0 
                ? 'animate-slide-left opacity-100' 
                : 'animate-slide-right opacity-100'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            highlights={project.highlights}
            stack={project.stack}
            githubUrl={project.githubUrl}
            highlightsLabel={t.highlightsLabel}
            projectButton={t.projectButton}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
