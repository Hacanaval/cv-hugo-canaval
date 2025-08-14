
import { LanguageType } from "@/contexts/LanguageContext";

export const projectsTranslations: Record<LanguageType, {
  projectsTitle: string;
  projectDescription: string;
  viewProjectBtn: string;
  viewCodeBtn: string;
  project1Title: string;
  project1Description: string;
  project1Technologies: string[];
  project2Title: string;
  project2Description: string;
  project2Technologies: string[];
  project3Title: string;
  project3Description: string;
  project3Technologies: string[];
  cvOptimizerTitle: string;
  cvOptimizerDesc: string;
  project1Desc: string;
  project2Desc: string;
  project3Desc: string;
  projectButton: string;
  accuracyLabel: string;
  errorLabel: string;
  accuracyMetricLabel: string;
  recallLabel: string;
  precisionLabel: string;
  viewAllProjects: string;
  highlightsLabel: string;
  githubInvitation: string;
  saasAgentTitle: string;
  saasAgentDesc: string;
  saasAgentHighlights: string[];
  saasAgentStack: string[];
  ageClassificationTitle: string;
  ageClassificationDesc: string;
  ageClassificationHighlights: string[];
  ageClassificationStack: string[];
  sentimentAnalysisTitle: string;
  sentimentAnalysisDesc: string;
  sentimentAnalysisHighlights: string[];
  sentimentAnalysisStack: string[];
  taxiDemandTitle: string;
  taxiDemandDesc: string;
  taxiDemandHighlights: string[];
  taxiDemandStack: string[];
}> = {
  es: {
    projectsTitle: "Proyectos de Aprendizaje",
    projectDescription: "Proyectos personales desarrollados durante mi formación en ciencia de datos y desarrollo.",
    viewProjectBtn: "Ver proyecto",
    viewCodeBtn: "Ver código",
    project1Title: "Predicción de Abandono",
    project1Description: "Modelo de machine learning para predecir la probabilidad de abandono de clientes (churn) en una empresa de telecomunicaciones. Incluye análisis exploratorio, feature engineering, selección de modelo y evaluación de resultados.",
    project1Technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Random Forest"],
    project2Title: "Dashboard de Ventas",
    project2Description: "Dashboard interactivo para análisis de datos de ventas. Permite la visualización de tendencias, compararación de métricas y segmentar datos por diferentes dimensiones.",
    project2Technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    project3Title: "Web Scraping de Precios",
    project3Description: "Herramienta automatizada para extraer y monitorear precios de productos competidores en e-commerce. Incluye visualización de evolución temporal y alertas de cambios significativos.",
    project3Technologies: ["Python", "Beautiful Soup", "Pandas", "Matplotlib", "Selenium"],
    cvOptimizerTitle: "Optimizador de CV",
    cvOptimizerDesc: "Herramienta basada en NLP que analiza ofertas de trabajo y optimiza el CV para aumentar la compatibilidad con la posición deseada.",
    project1Desc: "Modelo de machine learning para predecir la probabilidad de abandono de clientes en una empresa de telecomunicaciones.",
    project2Desc: "Análisis estadístico avanzado utilizando técnicas de bootstrapping para mejorar la precisión de modelos de regresión.",
    project3Desc: "Solución para el manejo de clases desbalanceadas en problemas de clasificación mediante técnicas de remuestreo y algoritmos especializados.",
    projectButton: "Ver en GitHub",
    accuracyLabel: "Incremento de precisión",
    errorLabel: "Reducción de error",
    accuracyMetricLabel: "Exactitud",
    recallLabel: "Sensibilidad",
    precisionLabel: "Precisión",
    viewAllProjects: "Ver todos los proyectos",
    highlightsLabel: "Características técnicas",
    githubInvitation: "En mi GitHub encontrarás estos y otros proyectos que he desarrollado como parte de mi aprendizaje en ciencia de datos, machine learning y desarrollo de aplicaciones.",
    saasAgentTitle: "Agente Vendedor SaaS",
    saasAgentDesc: "Chatbot experimental con arquitectura RAG para automatización de consultas vía WhatsApp y Telegram.",
    saasAgentHighlights: [
      "Integración de LLMs con memoria conversacional",
      "Vector search implementado con FAISS",
      "API REST con FastAPI y PostgreSQL"
    ],
    saasAgentStack: ["Python", "FastAPI", "PostgreSQL", "FAISS", "JWT", "OpenAI API"],
    ageClassificationTitle: "Clasificación de Edad con Visión por Computadora",
    ageClassificationDesc: "Modelo de clasificación de edad usando CNN (ResNet50) y transfer learning con imágenes faciales.",
    ageClassificationHighlights: [
      "Clasificación binaria con transfer learning",
      "Preprocesamiento y aumento de datos",
      "Evaluación de métricas de clasificación"
    ],
    ageClassificationStack: ["Python", "TensorFlow", "Keras", "ResNet50", "Matplotlib", "PIL"],
    sentimentAnalysisTitle: "Comparación de Modelos de Sentimiento con NLP",
    sentimentAnalysisDesc: "Comparación de modelos de NLP para análisis de sentimiento en reseñas de películas.",
    sentimentAnalysisHighlights: [
      "Comparación de preprocesadores (NLTK vs spaCy)",
      "Evaluación de múltiples clasificadores",
      "Métricas de evaluación multiclase"
    ],
    sentimentAnalysisStack: ["Python", "NLP", "NLTK", "spaCy", "TF-IDF", "LGBMClassifier", "Scikit-learn"],
    taxiDemandTitle: "Predicción de Demanda de Taxis por Hora",
    taxiDemandDesc: "Predicción de demanda de taxis usando modelos de series de tiempo y machine learning.",
    taxiDemandHighlights: [
      "Ingeniería de features temporales",
      "Comparación de modelos (SARIMA, XGBoost, Prophet)",
      "Evaluación de métricas de regresión"
    ],
    taxiDemandStack: ["Python", "Pandas", "SARIMA", "XGBoost", "Prophet", "Scikit-learn"],
  },
  en: {
    projectsTitle: "Learning Projects",
    projectDescription: "Personal projects developed during my training in data science and software development.",
    viewProjectBtn: "View project",
    viewCodeBtn: "View code",
    project1Title: "Customer Churn Prediction",
    project1Description: "Machine learning model to predict the probability of customer churn in a telecommunications company. Includes exploratory analysis, feature engineering, model selection, and evaluation of results.",
    project1Technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Random Forest"],
    project2Title: "Sales Dashboard",
    project2Description: "Interactive dashboard for sales data analysis. Allows visualization of trends, comparison of metrics, and data segmentation across different dimensions.",
    project2Technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    project3Title: "E-commerce Price Scraper",
    project3Description: "Automated tool for extracting and monitoring competitor product prices in e-commerce. Includes time-series visualization and alerts for significant changes.",
    project3Technologies: ["Python", "Beautiful Soup", "Pandas", "Matplotlib", "Selenium"],
    cvOptimizerTitle: "CV Optimizer",
    cvOptimizerDesc: "NLP-based tool that analyzes job offers and optimizes your resume to increase compatibility with the desired position.",
    project1Desc: "Machine learning model to predict customer churn probability in a telecommunications company.",
    project2Desc: "Advanced statistical analysis using bootstrapping techniques to improve the accuracy of regression models.",
    project3Desc: "Solution for handling imbalanced classes in classification problems using resampling techniques and specialized algorithms.",
    projectButton: "View on GitHub",
    accuracyLabel: "Accuracy Increase",
    errorLabel: "Error Reduction",
    accuracyMetricLabel: "Accuracy",
    recallLabel: "Recall",
    precisionLabel: "Precision",
    viewAllProjects: "View all projects",
    highlightsLabel: "Technical features",
    githubInvitation: "On my GitHub you'll find these and other projects I've developed as part of my learning journey in data science, machine learning, and application development.",
    saasAgentTitle: "SaaS Sales Agent",
    saasAgentDesc: "Experimental chatbot with RAG architecture for query automation via WhatsApp and Telegram.",
    saasAgentHighlights: [
      "LLM integration with conversational memory",
      "Vector search implemented with FAISS",
      "REST API with FastAPI and PostgreSQL"
    ],
    saasAgentStack: ["Python", "FastAPI", "PostgreSQL", "FAISS", "JWT", "OpenAI API"],
    ageClassificationTitle: "Image-Based Age Classification with Computer Vision",
    ageClassificationDesc: "Age classification model using CNN (ResNet50) and transfer learning with facial images.",
    ageClassificationHighlights: [
      "Binary classification with transfer learning",
      "Data preprocessing and augmentation",
      "Classification metrics evaluation"
    ],
    ageClassificationStack: ["Python", "TensorFlow", "Keras", "ResNet50", "Matplotlib", "PIL"],
    sentimentAnalysisTitle: "Sentiment Model Comparison with NLP",
    sentimentAnalysisDesc: "NLP model comparison for sentiment analysis on movie reviews.",
    sentimentAnalysisHighlights: [
      "Preprocessing comparison (NLTK vs spaCy)",
      "Multiple classifier evaluation",
      "Multiclass evaluation metrics"
    ],
    sentimentAnalysisStack: ["Python", "NLP", "NLTK", "spaCy", "TF-IDF", "LGBMClassifier", "Scikit-learn"],
    taxiDemandTitle: "Hourly Taxi Demand Forecasting",
    taxiDemandDesc: "Taxi demand prediction using time series and machine learning models.",
    taxiDemandHighlights: [
      "Temporal feature engineering",
      "Model comparison (SARIMA, XGBoost, Prophet)",
      "Regression metrics evaluation"
    ],
    taxiDemandStack: ["Python", "Pandas", "SARIMA", "XGBoost", "Prophet", "Scikit-learn"],
  }
};
