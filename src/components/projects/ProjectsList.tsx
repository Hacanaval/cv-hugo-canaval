
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import ProjectCard from "./ProjectCard";

const ProjectsList: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          highlights={project.highlights}
          stack={project.stack}
          githubUrl={project.githubUrl}
          highlightsLabel={t.highlightsLabel}
          projectButton={t.projectButton}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
