
import { LanguageType } from "@/contexts/LanguageContext";
import { navigationTranslations } from "./navigation";
import { commonTranslations } from "./common";
import { heroTranslations } from "./hero";
import { aboutTranslations } from "./about";
import { skillsTranslations } from "./skills";
import { projectsTranslations } from "./projects";
import { educationTranslations } from "./education";
import { objectiveTranslations } from "./objective";

type TranslationType = 
  & typeof navigationTranslations[LanguageType]
  & typeof commonTranslations[LanguageType]
  & typeof heroTranslations[LanguageType]
  & typeof aboutTranslations[LanguageType]
  & typeof skillsTranslations[LanguageType]
  & typeof projectsTranslations[LanguageType]
  & typeof educationTranslations[LanguageType]
  & typeof objectiveTranslations[LanguageType];

export const translations: Record<LanguageType, TranslationType> = {
  es: {
    ...navigationTranslations.es,
    ...commonTranslations.es,
    ...heroTranslations.es,
    ...aboutTranslations.es,
    ...skillsTranslations.es,
    ...projectsTranslations.es,
    ...educationTranslations.es,
    ...objectiveTranslations.es,
  },
  en: {
    ...navigationTranslations.en,
    ...commonTranslations.en,
    ...heroTranslations.en,
    ...aboutTranslations.en,
    ...skillsTranslations.en,
    ...projectsTranslations.en,
    ...educationTranslations.en,
    ...objectiveTranslations.en,
  }
};
