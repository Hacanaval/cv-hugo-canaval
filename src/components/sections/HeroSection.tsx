import React from "react";
import { ArrowDown, BriefcaseBusiness, FileDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import LiquidSignal from "@/components/visual/LiquidSignal";
import ContactOrbit from "@/components/visual/ContactOrbit";

const CV_URL = "https://drive.google.com/drive/folders/12Qbaw-A-fZOzItcqYn17MQ4J7KdkGrQ7?usp=sharing";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="ink-section relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="section-frame relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="section-kicker text-[var(--signal)]">Portfolio / 2026</p>
            <h1 className="text-hierarchy-1 max-w-5xl text-white">{t.welcomeTitle}</h1>
            <h2 className="mt-6 max-w-3xl text-xl font-medium tracking-[-0.025em] text-[var(--cobalt-soft)] sm:text-2xl">{t.welcomeSubtitle}</h2>
          </div>

          <div className="relative border-t border-white/20 pt-7 lg:mt-36">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">01 / {t.sectionLabels.profile}</span>
            <div className="body-copy mt-8 space-y-6 text-base leading-relaxed text-white/72 sm:text-lg">
              {t.welcomeText.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-y border-white/20 sm:grid-cols-3">
          {t.valueProps.map((item) => (
            <div key={item} className="border-b border-white/20 px-0 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <span className="text-body-small text-white/75">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={() => scrollTo("projects")} className="focus-ring min-h-[52px] rounded-none bg-[var(--signal)] px-6 text-[var(--ink)] hover:bg-white">
            <BriefcaseBusiness className="mr-2 h-5 w-5" />{t.ctaViewCases}
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open(CV_URL, "_blank")} className="focus-ring min-h-[52px] rounded-none border-white/25 bg-transparent px-6 text-white hover:bg-white hover:text-[var(--ink)]">
            <FileDown className="mr-2 h-5 w-5" />{t.ctaDownloadCV}
          </Button>
          <ContactOrbit />
        </div>

        <LiquidSignal inverse className="absolute -right-28 -top-14 -z-10 h-72 w-72 opacity-35 sm:h-[26rem] sm:w-[26rem] lg:-right-24 lg:-top-10" />

        <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-8 lg:right-14">
          <button type="button" onClick={() => scrollTo("about")} aria-label={t.about} className="focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/65 transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]">
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
