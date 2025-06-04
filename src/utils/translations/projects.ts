
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
    projectsTitle: "Proyectos Técnicos",
    projectDescription: "Estos proyectos demuestran mi capacidad para aplicar mis conocimientos técnicos en problemas reales.",
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
    highlightsLabel: "Logros",
    githubInvitation: "Te invito a explorar mi GitHub, donde podrás encontrar proyectos prácticos en Machine Learning, NLP aplicado, análisis predictivo, manejo avanzado de clases desbalanceadas y desarrollos con tecnologías como Python, FastAPI y Scikit-learn.",
    saasAgentTitle: "Agente Vendedor SaaS",
    saasAgentDesc: "Chatbot modular que automatiza ventas para PYMES vía WhatsApp y Telegram. Integra arquitectura RAG (Retrieval-Augmented Generation) con LLMs y memoria conversacional.",
    saasAgentHighlights: [
      "Multiempresa y desplegado en producción.",
      "Registra ventas, busca productos y responde dudas en lenguaje natural.",
      "Vector search con FAISS y persistencia de contexto.",
      "Con esto es usuario optimiza su canal de comunicación generando mas ventas a un menor costo"
    ],
    saasAgentStack: ["Python", "FastAPI", "PostgreSQL", "FAISS", "JWT", "OpenAI API"],
    ageClassificationTitle: "Clasificación de Edad con Visión por Computadora",
    ageClassificationDesc: "Modelo basado en CNN (ResNet50) para detectar si una persona es mayor o menor de edad usando imágenes faciales. Aplicable a controles automatizados de venta de productos restringidos.",
    ageClassificationHighlights: [
      "Clasificación binaria robusta (<18 vs. ≥18) con precisión > 91%",
      "Aumento de datos, análisis exploratorio y transferencia de aprendizaje.",
      "Diseñado para tiendas de venta al público para detectar menos de edad para venta de artículos como alcohol y tabaco"
    ],
    ageClassificationStack: ["Python", "TensorFlow", "Keras", "ResNet50", "Matplotlib", "PIL"],
    sentimentAnalysisTitle: "Comparación de Modelos de Sentimiento con NLP",
    sentimentAnalysisDesc: "Clasificación de sentimiento en reseñas de películas. Se comparan pipelines con distintos preprocesadores (NLTK vs. spaCy) y clasificadores (Logistic Regression, LGBM).",
    sentimentAnalysisHighlights: [
      "Todos los modelos superaron F1 > 0.85.",
      "Evaluación multiclase con ROC AUC y Precisión Promedio."
    ],
    sentimentAnalysisStack: ["Python", "NLP", "NLTK", "spaCy", "TF-IDF", "LGBMClassifier", "Scikit-learn"],
    taxiDemandTitle: "Predicción de Demanda de Taxis por Hora",
    taxiDemandDesc: "Predicción de demanda horaria de taxis usando modelos supervisados y de series de tiempo. Proyecto orientado a optimizar disponibilidad de conductores.",
    taxiDemandHighlights: [
      "Ingeniería temporal, modelos SARIMA, XGBoost y Prophet.",
      "RMSE: 44.49",
      "Permite anticipar picos y planificar turnos."
    ],
    taxiDemandStack: ["Python", "Pandas", "SARIMA", "XGBoost", "Prophet", "Scikit-learn"],
  },
  en: {
    projectsTitle: "Technical Projects",
    projectDescription: "These projects demonstrate my ability to apply my technical knowledge to solve real problems.",
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
    highlightsLabel: "Highlights",
    githubInvitation: "I invite you to explore my GitHub, where you'll find practical projects in Machine Learning, applied NLP, predictive modeling, imbalanced class handling, and real-world development using technologies like Python, FastAPI, and Scikit-learn.",
    saasAgentTitle: "SaaS Sales Agent",
    saasAgentDesc: "Modular chatbot that automates sales for SMEs via WhatsApp and Telegram. Integrates RAG (Retrieval-Augmented Generation) architecture with LLMs and conversational memory.",
    saasAgentHighlights: [
      "Multi-tenant and deployed in production.",
      "Handles product queries, registers sales, and responds in natural language.",
      "Uses FAISS for vector search and persistent memory.",
      "Helps businesses boost sales while reducing communication costs."
    ],
    saasAgentStack: ["Python", "FastAPI", "PostgreSQL", "FAISS", "JWT", "OpenAI API"],
    ageClassificationTitle: "Image-Based Age Classification with Computer Vision",
    ageClassificationDesc: "CNN-based model (ResNet50) to determine whether a person is under or over 18 based on facial images. Designed for use in automated age verification for restricted product sales.",
    ageClassificationHighlights: [
      "Robust binary classification (<18 vs. ≥18) with accuracy > 91%.",
      "Data augmentation, EDA, and transfer learning implemented.",
      "Designed for retail stores to detect underage customers for regulated products like alcohol or tobacco."
    ],
    ageClassificationStack: ["Python", "TensorFlow", "Keras", "ResNet50", "Matplotlib", "PIL"],
    sentimentAnalysisTitle: "Sentiment Model Comparison with NLP",
    sentimentAnalysisDesc: "Sentiment classification for movie reviews, comparing NLP pipelines using different preprocessing (NLTK vs. spaCy) and classifiers (Logistic Regression, LGBM).",
    sentimentAnalysisHighlights: [
      "All models achieved F1 scores above 0.85.",
      "Multiclass evaluation with ROC AUC and Average Precision Score."
    ],
    sentimentAnalysisStack: ["Python", "NLP", "NLTK", "spaCy", "TF-IDF", "LGBMClassifier", "Scikit-learn"],
    taxiDemandTitle: "Hourly Taxi Demand Forecasting",
    taxiDemandDesc: "Hourly ride demand forecasting using both time series and supervised learning models. Aimed at improving driver availability based on demand peaks.",
    taxiDemandHighlights: [
      "Feature engineering, SARIMA, XGBoost, and Prophet models.",
      "RMSE: 44.49",
      "Enables proactive shift planning and peak demand prediction."
    ],
    taxiDemandStack: ["Python", "Pandas", "SARIMA", "XGBoost", "Prophet", "Scikit-learn"],
  }
};
