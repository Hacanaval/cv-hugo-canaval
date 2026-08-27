import { LanguageType } from "@/contexts/LanguageContext";

type Project = {
  title: string;
  description: string[];
  results: string[];
  stack: string[];
};

export const projectsTranslations: Record<LanguageType, {
  projectsTitle: string;
  projectsIntro: string;
  resultsLabel: string;
  technologiesLabel: string;
  projectCases: Project[];
  githubTitle: string;
  githubInvitation: string;
  viewAllProjects: string;
}> = {
  es: {
    projectsTitle: "Productos y sistemas",
    projectsIntro: "Estos cuatro casos resumen el tipo de productos que he construido. Comparto lo suficiente para entender el problema y el resultado, sin exponer información privada.",
    resultsLabel: "Resultados",
    technologiesLabel: "Tecnologías",
    projectCases: [
      {
        title: "Predicción de riesgo de entrega",
        description: ["Desarrollé un sistema de machine learning que estima el riesgo de una entrega antes del despacho. La predicción se traduce en cuatro acciones operativas según el nivel de riesgo."],
        results: ["Entrenamiento con más de 100 millones de registros históricos.", "Entre 210.000 y 220.000 casos analizados al día.", "Cerca de 15% menos entregas fallidas."],
        stack: ["Python", "Scikit-learn", "BigQuery", "Cloud Run", "Optuna"]
      },
      {
        title: "Gestión de tareas con IA",
        description: ["Construí un producto para asignar y seguir tareas desde Telegram y una aplicación web. El bot usa function calling, mientras que los permisos se controlan desde el código."],
        results: ["Catálogo de 268 usuarios.", "Diez herramientas disponibles mediante function calling.", "Tareas sincronizadas en tiempo real entre el bot y la web."],
        stack: ["Gemini", "Firestore", "FastAPI", "Next.js", "Cloud Run"]
      },
      {
        title: "Conciliación operativa de depósitos",
        description: ["Automaticé el procesamiento de extractos bancarios mediante reglas específicas para cada formato. El sistema elimina duplicados, valida la información y prepara la carga al proceso operativo.", "Las reglas son deterministas. En este caso importaban más la trazabilidad y el control de excepciones que usar un modelo de IA."],
        results: ["Cerca de 3.000 conciliaciones procesadas al día.", "El volumen equivale a unas 13 jornadas manuales de ocho horas cada día.", "Ejecuciones programadas con manejo separado de excepciones."],
        stack: ["Python", "BigQuery", "Cloud Run Jobs", "Google Sheets"]
      },
      {
        title: "Validación de evidencia fotográfica",
        description: ["Desarrollé un sistema con Gemini Vision para revisar imágenes de evidencia. Clasifica la imagen y explica el motivo cuando encuentra un problema. Los desacuerdos quedan disponibles para revisión humana."],
        results: ["Miles de imágenes procesadas al día.", "96,77% de recall en una validación offline de 301 casos.", "Prompt versionado y trazabilidad de las decisiones."],
        stack: ["Gemini Vision", "BigQuery", "Python", "Cloud Run Jobs"]
      }
    ],
    githubTitle: "Proyectos personales en GitHub",
    githubInvitation: "En mi GitHub comparto proyectos personales de ciencia de datos, machine learning y desarrollo de aplicaciones.",
    viewAllProjects: "Ver todos los proyectos"
  },
  en: {
    projectsTitle: "Products and systems",
    projectsIntro: "These four cases show the type of products I have built. I share enough to understand the problem and the result, without exposing private information.",
    resultsLabel: "Results",
    technologiesLabel: "Technologies",
    projectCases: [
      {
        title: "Delivery risk prediction",
        description: ["I developed a machine learning system that estimates the risk of a delivery before dispatch. The prediction is translated into four operational actions based on the level of risk."],
        results: ["Training based on more than 100 million historical records.", "Between 210,000 and 220,000 cases analyzed every day.", "Close to 15% fewer failed deliveries."],
        stack: ["Python", "Scikit-learn", "BigQuery", "Cloud Run", "Optuna"]
      },
      {
        title: "AI task management",
        description: ["I built a product to assign and track tasks from Telegram and a web application. The bot uses function calling, while permissions are controlled in the code."],
        results: ["A directory with 268 registered users.", "Ten tools available through function calling.", "Tasks synchronized in real time between the bot and the web application."],
        stack: ["Gemini", "Firestore", "FastAPI", "Next.js", "Cloud Run"]
      },
      {
        title: "Bank deposit reconciliation",
        description: ["I automated the processing of bank statements using specific rules for each format. The system removes duplicates, validates the information, and prepares the data for the operational process.", "The rules are deterministic. In this case, traceability and exception control were more important than using an AI model."],
        results: ["Around 3,000 reconciliations processed every day.", "Processing the same daily volume by hand would take around thirteen eight-hour workdays.", "Scheduled runs with separate exception handling."],
        stack: ["Python", "BigQuery", "Cloud Run Jobs", "Google Sheets"]
      },
      {
        title: "Photo evidence validation",
        description: ["I developed a system with Gemini Vision to review evidence images. It classifies each image and explains the reason when it finds a problem. Disagreements are available for human review."],
        results: ["Thousands of images processed every day.", "96.77% recall in an offline validation with 301 cases.", "A versioned prompt and a record of every decision."],
        stack: ["Gemini Vision", "BigQuery", "Python", "Cloud Run Jobs"]
      }
    ],
    githubTitle: "Personal projects on GitHub",
    githubInvitation: "On my GitHub, I share personal projects in data science, machine learning, and application development.",
    viewAllProjects: "View all projects"
  }
};
