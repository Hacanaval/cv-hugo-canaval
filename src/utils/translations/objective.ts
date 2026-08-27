import { LanguageType } from "@/contexts/LanguageContext";

export const objectiveTranslations: Record<LanguageType, {
  objectiveTitle: string;
  objectiveParagraphs: string[];
}> = {
  es: {
    objectiveTitle: "Qué busco ahora",
    objectiveParagraphs: [
      "Quiero seguir construyendo productos de datos e inteligencia artificial que lleguen a usuarios reales. Me interesa participar en las decisiones de producto y mantenerme cerca de la implementación.",
      "Me interesa trabajar con equipos distribuidos en distintos países y con proyectos de mayor alcance. Quiero tener espacio para tomar decisiones y conocer otras formas de construir. Los sistemas que todavía no conozco también me atraen. Buena parte de lo que sé lo aprendí resolviendo problemas reales."
    ]
  },
  en: {
    objectiveTitle: "What I am looking for now",
    objectiveParagraphs: [
      "I want to continue building data and artificial intelligence products that reach real users. I want to take part in product decisions and stay close to the implementation.",
      "I am interested in working with distributed teams across different countries and on projects with a bigger scope. I want the freedom to make decisions and learn different ways of building. I am also interested in systems that are new to me. Much of what I know comes from solving real problems."
    ]
  }
};
