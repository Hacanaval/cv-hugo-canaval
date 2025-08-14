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
    welcomeTitle: "¡Hola! Soy Hugo Canaval.",
    welcomeSubtitle: "Del mundo comercial al mundo IT. Transformando negocios con datos, visión y tecnología.",
    welcomeText: "Durante más de seis años trabajé en multinacionales como Nielsen, Mondelēz, Bavaria (AB InBev) y British American Tobacco. Lideré equipos, gestioné cuentas complejas y alcancé objetivos exigentes usando datos con criterio.\n\nDi un paso más. Pasé de usar los datos a crear soluciones con ellos. Me formé a tiempo completo en ciencia de datos, machine learning e inteligencia artificial y empecé a construir productos y herramientas que resuelven problemas reales.\n\nMi propuesta es simple y directa. Combino capacidades técnicas en datos con visión estratégica de negocio para traducir necesidades en soluciones claras y accionables. Puedo hablar con el cliente, priorizar, definir métricas y ejecutar con equipos técnicos",
    valueProps: [
      "6+ años liderando equipos y cuentas enterprise",
      "Productos con IA desplegados en producción",
      "Traductor entre negocio y equipos técnicos"
    ],
    ctaViewCases: "Ver casos de estudio",
    ctaDownloadCV: "Descargar CV",
    ctaContact: "Contactar"
  },
  en: {
    welcomeTitle: "Hi! I'm Hugo Canaval.",
    welcomeSubtitle: "From the commercial world to IT. Transforming businesses with data, vision, and technology.",
    welcomeText: "For more than six years I worked in multinational companies like Nielsen, Mondelēz, Bavaria (AB InBev) and British American Tobacco. I led teams, managed complex accounts and reached ambitious goals by using data with purpose.\n\nThen I took the next step. I moved from only using data to creating solutions with it. I studied full-time in data science, machine learning and artificial intelligence, and started building products and tools that solve real problems.\n\nMy value is the mix of technical skills in data with a strategic business view. I can speak with clients, define priorities, set metrics and work with technical teams to deliver solutions that make an impact",
    valueProps: [
      "6+ years leading teams and enterprise accounts",
      "AI products deployed in production",
      "Translator between business and tech teams"
    ],
    ctaViewCases: "View case studies",
    ctaDownloadCV: "Download CV",
    ctaContact: "Get in touch"
  }
};
