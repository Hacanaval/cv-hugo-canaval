
import { LanguageType } from "@/contexts/LanguageContext";

export const commonTranslations: Record<LanguageType, {
  viewLinkedIn: string;
  viewGitHub: string;
  contactMe: string;
  downloadCV: string;
  linkCopied: string;
}> = {
  es: {
    viewLinkedIn: "Ver LinkedIn",
    viewGitHub: "Ver GitHub",
    contactMe: "Enviar un correo",
    downloadCV: "Descargar CV",
    linkCopied: "¡Enlace copiado!",
  },
  en: {
    viewLinkedIn: "View LinkedIn",
    viewGitHub: "View GitHub",
    contactMe: "Send an email",
    downloadCV: "Download CV",
    linkCopied: "Link copied!",
  }
};
