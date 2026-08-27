import { LanguageType } from "@/contexts/LanguageContext";

type DifferenceItem = { title: string; description: string };

export const aboutTranslations: Record<LanguageType, {
  aboutTitle: string;
  aboutParagraphs: string[];
  differenceTitle: string;
  differenceItems: DifferenceItem[];
}> = {
  es: {
    aboutTitle: "Sobre mí",
    aboutParagraphs: [
      "Me gusta trabajar en problemas donde hay que entender la operación y la tecnología. Antes de pensar en un modelo o una herramienta, busco saber quién toma la decisión, qué información tiene y dónde se está perdiendo tiempo o calidad.",
      "Soy economista, tengo un posgrado en Analítica de Datos y me formé en Data Science. Esa base me ha servido para construir modelos predictivos, agentes con IA, APIs y automatizaciones. Suelo participar desde las primeras conversaciones hasta la validación de una versión que ya puede usarse.",
      "Una solución empieza a parecerme un producto cuando tiene usuarios, reglas, métricas y excepciones. Por eso me interesa seguir cerca después del despliegue, ver qué falló y decidir qué vale la pena cambiar."
    ],
    differenceTitle: "Lo que me diferencia",
    differenceItems: [
      { title: "Empiezo por el problema", description: "Hablo con las personas que conocen el proceso y reviso cómo toman decisiones antes de proponer una solución." },
      { title: "Convierto ideas en algo que se puede probar", description: "Defino una primera versión, una métrica y las condiciones necesarias para probarla con usuarios y datos reales." },
      { title: "Me mantengo cerca de la ejecución técnica", description: "Puedo discutir un modelo, una API o un pipeline y entender cómo cada decisión afecta el producto." },
      { title: "Elijo la herramienta según el caso", description: "He resuelto problemas con modelos, LLM y reglas deterministas. La elección depende de la variabilidad del proceso, el riesgo y el costo de equivocarse." },
      { title: "Pienso en lo que ocurre después del despliegue", description: "Tengo en cuenta horarios, permisos, excepciones y seguimiento. Después del despliegue reviso errores, casos límite, uso y cambios en el proceso." },
      { title: "Mido lo que cambió", description: "Uso fallos evitados, tiempo ahorrado, adopción o capacidad liberada. La métrica tiene que responder a la decisión que originó el proyecto." }
    ]
  },
  en: {
    aboutTitle: "About me",
    aboutParagraphs: [
      "I like working on problems that require understanding both operations and technology. Before thinking about a model or a tool, I try to understand who makes the decision, what information they have, and where time or quality is being lost.",
      "I am an economist, I have a postgraduate degree in Data Analytics, and I trained in Data Science. This background has helped me build predictive models, AI agents, APIs, and automations. I usually take part from the first conversations until we validate a version that people can use.",
      "A solution starts to feel like a product when it has users, rules, metrics, and exceptions. This is why I like to stay close after deployment, see what failed, and decide what is worth changing."
    ],
    differenceTitle: "What makes me different",
    differenceItems: [
      { title: "I start with the problem", description: "I speak with the people who know the process and review how they make decisions before I propose a solution." },
      { title: "I turn ideas into something we can test", description: "I define a first version, a metric, and the conditions needed to test it with real users and data." },
      { title: "I stay close to the technical work", description: "I can discuss a model, an API, or a pipeline and understand how each decision affects the product." },
      { title: "I choose the tool based on the case", description: "I have solved problems with models, LLMs, and deterministic rules. The choice depends on how variable the process is, the risk, and the cost of making a mistake." },
      { title: "I think about what happens after deployment", description: "I consider schedules, permissions, exceptions, and monitoring. After deployment, I review errors, edge cases, usage, and changes in the process." },
      { title: "I measure what changed", description: "I measure avoided failures, time saved, adoption, or available capacity. The metric must be connected to the decision that led to the project." }
    ]
  }
};
