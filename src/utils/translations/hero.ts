import { LanguageType } from "@/contexts/LanguageContext";

export const heroTranslations: Record<LanguageType, {
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeText: string;
  valueProps: string[];
  ctaViewCases: string;
  ctaDownloadCV: string;
  ctaContact: string;
}> = {
  es: {
    welcomeTitle: "Hola, soy Hugo Canaval.",
    welcomeSubtitle: "Product Management · Data Science · AI Builder",
    welcomeText: "Trabajo en producto, datos e inteligencia artificial. He construido sistemas que ya se usan en procesos operativos de alto volumen. Uno predice el riesgo de una entrega antes del despacho y analiza más de 200.000 casos al día. Otro automatiza cerca de 3.000 conciliaciones diarias. También he desarrollado agentes con IA, herramientas para validar imágenes, APIs y automatizaciones desplegadas en GCP.\n\nMe gusta entender el proceso antes de definir qué construir. Hablo con las personas que lo conocen, reviso los datos disponibles y busco una primera versión que pueda ponerse a prueba. Después me mantengo cerca de la ejecución técnica hasta que la solución se puede usar y medir.",
    valueProps: ["Producto desde el problema hasta la validación.", "Datos e IA aplicados a procesos reales.", "Sistemas desplegados en GCP."],
    ctaViewCases: "Ver proyectos",
    ctaDownloadCV: "Descargar CV",
    ctaContact: "Contactar"
  },
  en: {
    welcomeTitle: "Hi, I am Hugo Canaval.",
    welcomeSubtitle: "Product Management · Data Science · AI Builder",
    welcomeText: "I work in product, data, and artificial intelligence. I have built systems that are already used in high-volume operational processes. One predicts the risk of a delivery before dispatch and analyzes more than 200,000 cases every day. Another automates around 3,000 reconciliations per day. I have also developed AI agents, tools for image validation, APIs, and automations deployed on GCP.\n\nI like to understand the process before deciding what to build. I speak with the people who know it, review the available data, and look for a first version we can test. Then I stay close to the technical work until the solution can be used and measured.",
    valueProps: ["From the problem to product validation.", "Data and AI applied to real processes.", "Systems deployed on GCP."],
    ctaViewCases: "View projects",
    ctaDownloadCV: "Download CV",
    ctaContact: "Contact me"
  }
};
