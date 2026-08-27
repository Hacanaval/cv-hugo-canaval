import React, { useState } from "react";
import { Blocks, Bot, BrainCircuit, Cloud, Code2, Database, FileCheck2, Gauge, GitBranch, ListChecks, Repeat2, Search, Target, Users, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";

const productIcons = [Search, Target, ListChecks, FileCheck2, Gauge, Users, Repeat2, Workflow];
const technicalIcons = [Database, BrainCircuit, Bot, Blocks, Cloud, Code2, Gauge, GitBranch];

interface SkillsToggleProps {
  technical: boolean;
  productLabel: string;
  technicalLabel: string;
  onSelect: (technical: boolean) => void;
  className?: string;
}

const SkillsToggle: React.FC<SkillsToggleProps> = ({ technical, productLabel, technicalLabel, onSelect, className = "" }) => (
  <div className={`grid grid-cols-2 border border-white/20 p-1 ${className}`}>
    <Button
      variant="ghost"
      onClick={() => onSelect(false)}
      className={`h-auto rounded-none px-4 py-4 text-xs ${!technical ? "bg-[var(--signal)] text-[var(--ink)] hover:bg-[var(--signal)]" : "text-white/55 hover:bg-white/10 hover:text-white"}`}
    >
      {productLabel}
    </Button>
    <Button
      variant="ghost"
      onClick={() => onSelect(true)}
      className={`h-auto rounded-none px-4 py-4 text-xs ${technical ? "bg-[var(--signal)] text-[var(--ink)] hover:bg-[var(--signal)]" : "text-white/55 hover:bg-white/10 hover:text-white"}`}
    >
      {technicalLabel}
    </Button>
  </div>
);

const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [technical, setTechnical] = useState(false);
  const skills = technical ? t.technicalSkills : t.productSkills;
  const icons = technical ? technicalIcons : productIcons;

  const selectFromBottom = (nextTechnical: boolean) => {
    setTechnical(nextTechnical);
    requestAnimationFrame(() => {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="skills" className="ink-section section-spacing-large reveal-section">
      <div className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="section-kicker text-[var(--signal)]">03 / Capacidades</p>
            <h2 className="section-heading text-white">{t.skillsTitle}</h2>
            <SkillsToggle
              technical={technical}
              productLabel={t.productSkillsBtn}
              technicalLabel={t.technicalSkillsBtn}
              onSelect={setTechnical}
              className="mt-10"
            />
          </div>

          <div className="border-t border-white/20">
            {skills.map((skill, index) => {
              const Icon = icons[index];
              return (
                <article key={skill.title} className="group grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[42px_0.7fr_1.3fr] sm:items-start sm:gap-6">
                  <span className="font-mono text-[10px] text-white/30">0{index + 1}</span>
                  <div className="flex items-center gap-3">
                    <Icon size={19} className="text-[var(--signal)]" />
                    <h3 className="font-semibold tracking-[-0.02em] text-white">{skill.title}</h3>
                  </div>
                  <p className="text-body-small text-white/62">{skill.description}</p>
                </article>
              );
            })}

            <SkillsToggle
              technical={technical}
              productLabel={t.productSkillsBtn}
              technicalLabel={t.technicalSkillsBtn}
              onSelect={selectFromBottom}
              className="mt-8 lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
