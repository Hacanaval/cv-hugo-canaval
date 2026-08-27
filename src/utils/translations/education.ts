
import { LanguageType } from "@/contexts/LanguageContext";

export const educationTranslations: Record<LanguageType, {
  educationTitle: string;
  education1Title: string;
  education1Place: string;
  education1Period: string;
  education2Title: string;
  education2Place: string;
  education2Period: string;
  education3Title: string;
  education3Place: string;
  education3Period: string;
  coursesTitle: string;
  coursesPlatformTitle: string;
  totalCoursesCompleted: string;
  coursesRecentTitle: string;
  viewAllCoursesBtn: string;
  pythonCourseDesc: string;
  productCourseDesc: string;
  statsCourseDesc: string;
  mlCourseDesc: string;
  sparkCourseDesc: string;
}> = {
  es: {
    educationTitle: "Formación",
    education1Title: "Posgrado en Analítica de Datos Aplicada a los Negocios",
    education1Place: "Universidad Icesi – Cali, Colombia",
    education1Period: "2020 – 2021",
    education2Title: "Pregrado en Economía y Negocios Internacionales",
    education2Place: "Universidad Icesi – Cali, Colombia",
    education2Period: "2012 – 2018",
    education3Title: "Programa en Data Science",
    education3Place: "TripleTen · Python, SQL, estadística, machine learning y proyectos aplicados",
    education3Period: "2024 – 2025",
    coursesTitle: "Cursos y certificaciones",
    coursesPlatformTitle: "Plataformas de aprendizaje",
    totalCoursesCompleted: "certificados completados",
    coursesRecentTitle: "Certificaciones recientes",
    viewAllCoursesBtn: "Ver todos los cursos",
    pythonCourseDesc: "Curso completo sobre Python para ciencia de datos. Incluye manejo de librerías como NumPy, Pandas y Matplotlib para el análisis y visualización de datos.",
    productCourseDesc: "Formación integral en gestión de productos digitales. Metodologías ágiles, design thinking y estrategias de producto.",
    statsCourseDesc: "Estadística inferencial aplicada con Python. Técnicas de muestreo, intervalos de confianza y pruebas de hipótesis.",
    mlCourseDesc: "Introducción al aprendizaje automático. Conceptos fundamentales, modelos supervisados y evaluación de rendimiento.",
    sparkCourseDesc: "Fundamentos de Apache Spark para procesamiento de grandes volúmenes de datos. Arquitectura, RDDs y operaciones básicas.",
  },
  en: {
    educationTitle: "Education",
    education1Title: "Postgraduate Degree in Data Analytics for Business",
    education1Place: "Universidad Icesi – Cali, Colombia",
    education1Period: "2020 – 2021",
    education2Title: "Bachelor's in Economics and International Business",
    education2Place: "Universidad Icesi – Cali, Colombia",
    education2Period: "2012 – 2018",
    education3Title: "Data Science Program",
    education3Place: "TripleTen · Python, SQL, statistics, machine learning, and applied projects",
    education3Period: "2024 – 2025",
    coursesTitle: "Courses and certifications",
    coursesPlatformTitle: "Learning platforms",
    totalCoursesCompleted: "completed certificates",
    coursesRecentTitle: "Recent certifications",
    viewAllCoursesBtn: "View all courses",
    pythonCourseDesc: "Complete course on Python for data science. Includes libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization.",
    productCourseDesc: "Comprehensive training in digital product management. Agile methodologies, design thinking, and product strategies.",
    statsCourseDesc: "Applied inferential statistics with Python. Sampling techniques, confidence intervals, and hypothesis testing.",
    mlCourseDesc: "Introduction to machine learning. Fundamental concepts, supervised models, and performance evaluation.",
    sparkCourseDesc: "Apache Spark fundamentals for big data processing. Architecture, RDDs, and basic operations.",
  }
};
