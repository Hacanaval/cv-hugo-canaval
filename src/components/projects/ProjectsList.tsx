import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import ProjectCard from "./ProjectCard";

const ProjectsList: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {t.projectCases.map((project, index) => (
        <ProjectCard key={project.title} {...project} index={index} resultsLabel={t.resultsLabel} technologiesLabel={t.technologiesLabel} />
      ))}
    </div>
  );
};

export default ProjectsList;
