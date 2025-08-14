import { LanguageType } from "@/contexts/LanguageContext";

export const aboutTranslations: Record<LanguageType, {
  aboutTitle: string;
  aboutHtml: string;
  differenceTitle: string;
  differenceItem1: string;
  differenceItem2: string;
  differenceItem3: string;
  differenceItem4: string;
  differenceItem5: string;
  differenceItem6: string;
}> = {
  es: {
    aboutTitle: "¿Quién soy?",
    aboutHtml:
      "Soy economista, científico de datos y tengo un posgrado en Analítica de Datos. Cuento con más de seis años de experiencia en multinacionales, donde lideré:<br><br>" +
      "• Proyectos de pricing y estrategia comercial<br>" +
      "• Iniciativas de trade marketing y automatización de procesos<br>" +
      "• Procesos de analítica para la toma de decisiones<br><br>" +
      "Usando datos como base, alcancé resultados de alto impacto. Con el tiempo descubrí que mi vocación está en crear soluciones que unan negocio y tecnología.<br><br>" +
      "Hoy me desarrollo como profesional híbrido en ciencia de datos y gestión de producto, con formación intensiva en:<br><br>" +
      "• Estadística, programación y aprendizaje automático<br>" +
      "• Diseño y desarrollo de productos digitales basados en datos<br>" +
      "• Un enfoque técnico con visión estratégica de negocio<br><br>" +
      "<span class='text-indigo-400 font-semibold'>Mi diferencial:</span> Conozco el negocio desde dentro, lidero equipos y domino las herramientas para transformar procesos y productos desde la tecnología.",
    differenceTitle: "Lo que me diferencia",
    differenceItem1: "6+ años impulsando decisiones comerciales con datos en empresas líderes",
    differenceItem2: "Visión de negocio, habilidades analíticas y liderazgo para alinear equipos",
    differenceItem3: "Formación sólida en Ciencia de Datos, Machine Learning e IA",
    differenceItem4: "Capacidad para traducir necesidades del cliente en soluciones accionables",
    differenceItem5: "Proyectos con métricas claras y foco en impacto real del negocio",
    differenceItem6: "Adaptabilidad en entornos ágiles y orientación a producto y resultados",
  },
  en: {
    aboutTitle: "Who am I?",
    aboutHtml:
      "I am an economist and data scientist with a postgraduate degree in Data Analytics. I have more than six years of experience in multinational companies, where I led:<br><br>" +
      "• Pricing and commercial strategy projects<br>" +
      "• Trade marketing initiatives and process automation<br>" +
      "• Analytics processes for decision-making<br><br>" +
      "Using data as a foundation, I achieved high-impact results. Over time, I realized my path is to create solutions that connect business and technology.<br><br>" +
      "Today I work as a hybrid professional in data science and product management, with intensive training in:<br><br>" +
      "• Statistics, programming, and machine learning<br>" +
      "• Designing and developing data-driven digital products<br>" +
      "• A technical approach with a strategic business view<br><br>" +
      "<span class='text-indigo-400 font-semibold'>My value:</span> I know business from the inside, I lead teams, and I master the tools to transform processes and products through technology.",
    differenceTitle: "What makes me different",
    differenceItem1: "6+ years driving data-informed business decisions in leading companies",
    differenceItem2: "Business vision, analytical skills, and leadership to align teams",
    differenceItem3: "Solid training in Data Science, Machine Learning, and AI",
    differenceItem4: "Ability to translate customer needs into actionable solutions",
    differenceItem5: "Projects with clear metrics and real business impact",
    differenceItem6: "Adaptability in agile environments with a product and results mindset",
  }
};
