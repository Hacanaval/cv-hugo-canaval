
import { LanguageType } from "@/contexts/LanguageContext";

export const commonTranslations: Record<LanguageType, {
  viewLinkedIn: string;
  viewGitHub: string;
  contactMe: string;
  downloadCV: string;
  linkCopied: string;
  contactTitle: string;
  contactText: string;
  footerText: string;
}> = {
  es: {
    viewLinkedIn: "Ver LinkedIn",
    viewGitHub: "Ver GitHub",
    contactMe: "Hablemos",
    downloadCV: "Descargar CV",
    linkCopied: "¡Enlace copiado!",
    contactTitle: "Contacto",
    contactText: "Me interesa conversar con equipos que estén construyendo productos de datos o inteligencia artificial y necesiten llevar una idea hasta una versión que pueda ponerse a prueba.",
    footerText: "Product Management · Data Science · AI Builder",
  },
  en: {
    viewLinkedIn: "View LinkedIn",
    viewGitHub: "View GitHub",
    contactMe: "Contact me",
    downloadCV: "Download CV",
    linkCopied: "Link copied!",
    contactTitle: "Contact",
    contactText: "I am interested in talking with teams that are building data or artificial intelligence products and need to take an idea to a version that can be tested.",
    footerText: "Product Management · Data Science · AI Builder",
  }
};
