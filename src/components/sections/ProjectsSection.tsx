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
    <section id="projects" className="paper-section-alt section-spacing reveal-section">
      <div className="section-frame">
        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="section-kicker text-[var(--cobalt)]">04 / {t.sectionLabels.evidence}</p>
            <h2 className="section-heading mb-0">{t.projectsTitle}</h2>
          </div>
          <p className="body-copy text-body border-t border-[var(--line)] pt-6 text-black/65">{t.projectsIntro}</p>
        </div>

        <ProjectsList />

        <div className="mt-16 grid gap-8 border-t border-[var(--line)] pt-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em]">{t.githubTitle}</h3>
            <p className="body-copy text-body max-w-3xl text-black/60">{t.githubInvitation}</p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="focus-ring h-auto rounded-none border-black bg-transparent px-6 py-4 text-black hover:bg-black hover:text-white"
            onClick={() => window.open("https://github.com/Hacanaval", "_blank")}
          >
            <Github size={19} />
            <span>{t.viewAllProjects}</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
