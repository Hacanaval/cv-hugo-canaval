
import { LanguageType } from "@/contexts/LanguageContext";

export const navigationTranslations: Record<LanguageType, {
  home: string;
  about: string;
  skills: string;
  projects: string;
  education: string;
  objective: string;
  contact: string;
}> = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Formación",
    objective: "Qué busco",
    contact: "Contacto",
  },
  en: {
    home: "Home",
    about: "About me",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    objective: "What I am looking for",
    contact: "Contact",
  }
};
