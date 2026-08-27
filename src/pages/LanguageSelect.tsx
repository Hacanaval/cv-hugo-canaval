
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LiquidSignal from "@/components/visual/LiquidSignal";

const LanguageSelect: React.FC = () => {
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();
  const handleLanguageSelect = (lang: "es" | "en") => {
    setLanguage(lang);
    navigate("/home");
  };

  return (
    <main className="ink-section relative min-h-screen overflow-hidden">
      <div className="section-frame flex min-h-screen flex-col justify-between py-7 sm:py-10">
        <div className="flex items-center justify-between border-b border-white/15 pb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
          <span>Portfolio / 2026</span>
          <span>Cali, Colombia</span>
        </div>

        <div className="relative grid items-end gap-14 py-16 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
          <div className="relative z-10">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-[var(--signal)]">Producto · Datos · IA</p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.84] tracking-[-0.07em] text-white sm:text-8xl lg:text-[9rem]">
              Hugo<br />Canaval
            </h1>
          </div>

          <div className="relative z-10 border-t border-white/25 pt-7 lg:pb-3">
            <p className="max-w-md text-xl leading-snug tracking-[-0.025em] text-white/80 sm:text-2xl">
              Product Management · Data Science · AI Builder
            </p>
            <p className="mb-5 mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Selecciona tu idioma</p>
            <div className="grid gap-3 sm:grid-cols-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleLanguageSelect("es")}
                className="focus-ring h-auto justify-between rounded-none border-white/25 bg-transparent px-5 py-5 text-base text-white hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
                <span>Español</span><span aria-hidden="true">ES ↗</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleLanguageSelect("en")}
                className="focus-ring h-auto justify-between rounded-none border-white/25 bg-transparent px-5 py-5 text-base text-white hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
                <span>English</span><span aria-hidden="true">EN ↗</span>
          </Button>
            </div>
          </div>

          <LiquidSignal className="absolute -right-20 -top-10 h-72 w-72 opacity-90 sm:h-[28rem] sm:w-[28rem] lg:right-[20%] lg:top-[-22%]" />
        </div>

        <div className="flex items-center justify-between border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
          <span>Problemas reales → sistemas operables</span>
          <span>ES / EN</span>
        </div>
      </div>
    </main>
  );
};

export default LanguageSelect;
