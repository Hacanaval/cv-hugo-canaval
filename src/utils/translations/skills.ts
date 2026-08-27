import { LanguageType } from "@/contexts/LanguageContext";

type SkillGroup = { title: string; description: string };

export const skillsTranslations: Record<LanguageType, {
  skillsTitle: string;
  productSkillsBtn: string;
  technicalSkillsBtn: string;
  productSkills: SkillGroup[];
  technicalSkills: SkillGroup[];
}> = {
  es: {
    skillsTitle: "Habilidades y herramientas",
    productSkillsBtn: "Producto",
    technicalSkillsBtn: "Capacidades técnicas",
    productSkills: [
      { title: "Descubrimiento de producto", description: "Conversaciones con usuarios, observación del proceso y revisión de datos para entender qué decisión necesita apoyo." },
      { title: "Definición de problemas", description: "Convierto una necesidad amplia en una pregunta concreta, una hipótesis y una condición de éxito." },
      { title: "MVP y priorización", description: "Defino qué debe entrar en la primera versión y qué puede esperar. Comparo impacto, esfuerzo, dependencias y riesgo." },
      { title: "Requerimientos y criterios de aceptación", description: "Documento reglas, flujos, excepciones y condiciones de prueba antes de implementar." },
      { title: "Métricas de producto", description: "Elijo métricas que muestran si el producto cambió una decisión, redujo errores o liberó capacidad." },
      { title: "Trabajo con usuarios y perfiles técnicos", description: "Aclaro con cada parte el problema, las restricciones y qué significa que una solución esté lista." },
      { title: "Experimentación e iteración", description: "Pruebo con datos y usuarios reales, reviso fallas y ajusto a partir de la evidencia." },
      { title: "Documentación y continuidad", description: "Dejo registradas las decisiones, la arquitectura, la operación y los pendientes para que el sistema pueda mantenerse." }
    ],
    technicalSkills: [
      { title: "Datos y SQL", description: "BigQuery, SQL, Python y Pandas para consultar, preparar y conectar datos con productos." },
      { title: "Machine Learning aplicado", description: "Modelos supervisados, feature engineering, validación temporal, calibración y matrices de costo." },
      { title: "IA generativa", description: "Gemini para texto e imagen, extracción estructurada, clasificación y prompts versionados." },
      { title: "Agentes", description: "Function calling, sesiones persistentes, bots conversacionales y orquestación de tareas con IA." },
      { title: "Cloud y despliegue", description: "Cloud Run Services y Jobs, Workflows, Scheduler, Cloud Storage y Secret Manager." },
      { title: "APIs e integraciones", description: "FastAPI, JWT, Firestore, webhooks, Google Sheets, Telegram y conexiones con sistemas internos." },
      { title: "Operación de sistemas", description: "Idempotencia, permisos, auditoría, manejo de excepciones, logging y seguimiento de ejecuciones." },
      { title: "Desarrollo asistido por IA", description: "Trabajo con agentes a partir de especificaciones y criterios de validación. Configuro y manejo el agent harness mediante instrucciones, skills, herramientas, contexto y controles." }
    ]
  },
  en: {
    skillsTitle: "Skills and tools",
    productSkillsBtn: "Product",
    technicalSkillsBtn: "Technical skills",
    productSkills: [
      { title: "Product discovery", description: "Conversations with users, process observation, and data review to understand which decision needs support." },
      { title: "Problem definition", description: "I turn a broad need into a clear question, a hypothesis, and a success condition." },
      { title: "MVP and prioritization", description: "I define what must be part of the first version and what can wait. I compare impact, effort, dependencies, and risk." },
      { title: "Requirements and acceptance criteria", description: "I document rules, flows, exceptions, and test conditions before implementation." },
      { title: "Product metrics", description: "I choose metrics that show if the product changed a decision, reduced errors, or released capacity." },
      { title: "Working with users and technical teams", description: "I clarify the problem, the limits, and what it means for a solution to be ready." },
      { title: "Testing and iteration", description: "I test with real users and data, review failures, and adjust based on evidence." },
      { title: "Documentation and continuity", description: "I document decisions, architecture, operations, and pending work so the system can be maintained." }
    ],
    technicalSkills: [
      { title: "Data and SQL", description: "BigQuery, SQL, Python, and Pandas to query, prepare, and connect data to products." },
      { title: "Applied Machine Learning", description: "Supervised models, feature engineering, time-based validation, calibration, and cost matrices." },
      { title: "Generative AI", description: "Gemini for text and images, structured extraction, classification, and versioned prompts." },
      { title: "Agents", description: "Function calling, persistent sessions, conversational bots, and AI task orchestration." },
      { title: "Cloud and deployment", description: "Cloud Run Services and Jobs, Workflows, Scheduler, Cloud Storage, and Secret Manager." },
      { title: "APIs and integrations", description: "FastAPI, JWT, Firestore, webhooks, Google Sheets, Telegram, and connections with internal systems." },
      { title: "System operations", description: "Idempotency, permissions, audit trails, exception handling, logging, and execution monitoring." },
      { title: "AI-assisted development", description: "I work with agents using specifications and validation criteria. I configure and manage the agent harness through instructions, skills, tools, context, and controls." }
    ]
  }
};
