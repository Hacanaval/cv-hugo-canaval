import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { contactLinks } from "@/utils/contact";
import ContactOrbit from "@/components/visual/ContactOrbit";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer id="contact" className="ink-section relative py-24 text-white reveal-section sm:py-32">
      <div className="section-frame">
        <p className="section-kicker text-[var(--signal)]">08 / {t.sectionLabels.contact}</p>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="contact-heading max-w-5xl">{t.contactTitle}</h2>
            <p className="body-copy mt-8 max-w-2xl text-lg text-white/62 sm:text-xl">{t.contactText}</p>
          </div>

          <div className="border-t border-white/20 pt-7">
            <div className="mb-3">
              <ContactOrbit emphasis="signal" fullWidth label={t.contactMe} />
            </div>
            <Button
              variant="outline"
              className="focus-ring h-auto w-full justify-between rounded-none border-white/25 bg-transparent px-5 py-5 text-white hover:bg-white hover:text-[var(--ink)]"
              onClick={() => window.open(contactLinks.cvDrive, "_blank")}
            >
              <span className="flex items-center"><FileDown className="mr-2" size={19} />{t.downloadCV}</span><span>↓</span>
            </Button>
          </div>
        </div>

        <div className="mt-20 flex justify-end border-t border-white/20 pt-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">© {new Date().getFullYear()} · {t.footerText}</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
