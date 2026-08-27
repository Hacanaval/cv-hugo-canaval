import React from "react";
import { ArrowUpRight, Bot, Camera, Landmark, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string[];
  results: string[];
  stack: string[];
  resultsLabel: string;
  technologiesLabel: string;
  index: number;
}

const icons = [TrendingUp, Bot, Landmark, Camera];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, results, stack, resultsLabel, technologiesLabel, index }) => {
  const Icon = icons[index] ?? TrendingUp;

  return (
    <article className="grid gap-8 border-t border-[var(--line)] py-10 first:pt-0 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:py-14">
      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-7 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cobalt)]">Caso 0{index + 1}</span>
            <Icon size={21} className="text-[var(--cobalt)]" />
          </div>
          <h3 className="max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl">{title}</h3>
        </div>
        <ArrowUpRight className="mt-8 hidden text-black/25 lg:block" size={34} />
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <div className="body-copy space-y-4 text-body-small text-black/65">
            {description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mb-3 mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-black/40">{technologiesLabel}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {stack.map((tech) => <span key={tech} className="border-b border-[var(--cobalt)] pb-0.5 text-xs font-medium">{tech}</span>)}
          </div>
        </div>

        <div className="bg-[var(--cobalt)] p-6 text-white sm:p-7">
          <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">{resultsLabel}</h4>
          <ul className="space-y-5">
            {results.map((result) => (
              <li key={result} className="border-t border-white/30 pt-4 text-sm leading-relaxed sm:text-[15px]">{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
