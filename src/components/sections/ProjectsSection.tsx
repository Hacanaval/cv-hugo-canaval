
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import ProjectsList from "@/components/projects/ProjectsList";

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="projects" className="py-24 dark-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-10">{t.projectsTitle}</h2>
        
        <ProjectsList />

        {/* Call to action text before the button */}
        <div className="text-center mt-12 mb-6">
          <p className="text-gray-300 max-w-4xl mx-auto text-lg">
            {t.githubInvitation}
          </p>
        </div>

        <div className="flex justify-center">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
            onClick={() => window.open("https://github.com/Hacanaval", "_blank")}
          >
            <Github size={20} />
            <span>{t.viewAllProjects}</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
