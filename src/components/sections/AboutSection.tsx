import React, { useEffect, useRef, useState } from "react";
import { Award, Lightbulb, Target, TrendingUp, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const icons = [TrendingUp, Users, Target, Zap, Award, Lightbulb];

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const photoRef = useRef<HTMLImageElement>(null);
  const [grayscale, setGrayscale] = useState(100);

  useEffect(() => {
    let frame = 0;

    const updateGrayscale = () => {
      frame = 0;
      const el = photoRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const photoCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const maxDistance = window.innerHeight / 2 + rect.height / 2;
      const ratio = Math.min(Math.abs(photoCenter - viewportCenter) / maxDistance, 1);

      setGrayscale(Math.round(ratio * 100));
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateGrayscale);
    };

    updateGrayscale();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section id="about" className="paper-section section-spacing reveal-section">
      <div className="section-frame">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_1fr] lg:gap-20">
          <div>
            <p className="section-kicker text-[var(--cobalt)]">02 / {t.sectionLabels.profile}</p>
            <h2 className="section-heading">{t.aboutTitle}</h2>
            <div className="relative mt-12 max-w-md lg:mt-24">
              <div className="absolute -bottom-5 -right-5 h-full w-full bg-[var(--cobalt)]" />
              <img
                ref={photoRef}
                src="/lovable-uploads/hugo-profile-2024.png"
                alt="Hugo Canaval"
                className="relative aspect-[4/5] w-full object-cover transition-[filter] duration-300 ease-out"
                style={{ filter: `grayscale(${grayscale}%)` }}
              />
            </div>
          </div>

          <div className="lg:pt-28">
            <div className="body-copy space-y-7 border-t border-[var(--line)] pt-8 text-lg leading-relaxed sm:text-xl">
              {t.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="mt-20">
              <h3 className="section-subheading max-w-xl">{t.differenceTitle}</h3>
              <div className="grid border-t border-[var(--line)] sm:grid-cols-2">
                {t.differenceItems.map((item, index) => {
                  const Icon = icons[index];
                  return (
                    <article key={item.title} className="group border-b border-[var(--line)] py-7 sm:px-6 sm:odd:border-r sm:odd:pl-0">
                      <div className="mb-4 flex items-center justify-between">
                        <Icon size={19} className="text-[var(--cobalt)]" />
                        <span className="font-mono text-[10px] text-black/35">0{index + 1}</span>
                      </div>
                      <h4 className="mb-3 text-lg font-semibold tracking-[-0.02em]">{item.title}</h4>
                      <p className="text-body-small text-black/65">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
