
import { LanguageType } from "@/contexts/LanguageContext";

type TranslationType = {
  // Navigation
  home: string;
  about: string;
  skills: string;
  projects: string;
  education: string;
  objective: string;
  contact: string;

  // Common
  viewLinkedIn: string;
  viewGitHub: string;
  contactMe: string;
  downloadCV: string;
  linkCopied: string;
  
  // Hero section
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeText: string;
  
  // About section
  aboutTitle: string;
  aboutHtml: string;
  differenceTitle: string;
  differenceItem1: string;
  differenceItem2: string;
  differenceItem3: string;
  differenceItem4: string;
  differenceItem5: string;
  differenceItem6: string;
  
  // Skills section
  skillsTitle: string;
  technicalSkillsBtn: string;
  professionalSkillsBtn: string;
  
  languagesTitle: string;
  languageSkills: string[];
  
  programmingTitle: string;
  
  dataTitle: string;
  
  mlTitle: string;
  
  statsTitle: string;
  
  visualizationTitle: string;
  
  versionControlTitle: string;
  
  officeTitle: string;
  
  // Professional skills
  communicationTitle: string;
  communicationSkill: string;
  
  leadershipTitle: string;
  leadershipSkill: string;
  
  analyticalTitle: string;
  analyticalSkill: string;
  
  storytellingTitle: string;
  storytellingSkill: string;
  
  adaptabilityTitle: string;
  adaptabilitySkill: string;
  
  resultsTitle: string;
  resultsSkill: string;
  
  // Projects section
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
  
  // Education section
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
  
  // Courses section
  coursesTitle: string;
  coursesPlatformTitle: string;
  totalCoursesCompleted: string;
  coursesRecentTitle: string;
  viewAllCoursesBtn: string;
  
  // Course specific descriptions
  pythonCourseDesc: string;
  productCourseDesc: string;
  statsCourseDesc: string;
  mlCourseDesc: string;
  sparkCourseDesc: string;
  
  // Project specific properties
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
  
  // Objective section
  objectiveTitle: string;
  objectiveHtml: string;
};

export const translations: Record<LanguageType, TranslationType> = {
  es: {
    // Navigation
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Formación",
    objective: "Objetivo",
    contact: "Contacto",

    // Common
    viewLinkedIn: "Ver LinkedIn",
    viewGitHub: "Ver GitHub",
    contactMe: "Enviar un correo",
    downloadCV: "Descargar CV",
    linkCopied: "¡Enlace copiado!",
    
    // Hero section
    welcomeTitle: "¡Hola! Soy Hugo Canaval.",
    welcomeSubtitle: "Del mundo comercial al mundo IT. Transformando negocios con datos, visión y tecnología.",
    welcomeText: "Durante más de seis años me enfoqué en el mundo comercial de empresas como Nielsen, Mondelēz, Bavaria (AB InBev) y British American Tobacco. Fui reconocido por alcanzar objetivos exigentes, utilizando los datos de forma inteligente, liderando equipos, negociando con grandes clientes y construyendo estrategias comerciales exitosas.\n\nPero algo me faltaba...\n\nQuería ir más allá. No solo usar los datos, sino crear con ellos, convertirlos en inteligencia y construir soluciones.\n\nAsí que me enfoqué en aprender y decidí dedicarme tiempo completo a estudiar ciencia de datos, machine learning e inteligencia artificial. Estoy transformando mi carrera desde las raíces para seguir el camino que verdaderamente me apasiona.\n\nMi objetivo es convertirme en un Data Scientist que combine lo mejor de dos mundos:\n🚀 Capacidades técnicas robustas + 🧠 Visión estratégica de negocio",
    
    // About section
    aboutTitle: "¿Quién soy?",
    aboutHtml: "Soy economista, con posgrado en Analítica de Datos y más de seis años de experiencia en multinacionales, donde lideré:<br><br>ⓘ Proyectos de pricing y estrategia comercial<br>📈 Iniciativas de Trade Marketing y automatización<br>🔢 Procesos de analítica para la toma de decisiones<br><br>Gracias a los datos, logré resultados sobresalientes. Pero mi verdadera vocación está en la tecnología.<br><br>Hoy me reinvento como científico de datos, con una formación intensiva en:<br><br>🎓 Estadística, programación y AI<br>✍️ Proyectos propios de Machine Learning<br>⚖️ Un enfoque técnico, pero siempre con visión de negocio<br><br><span class='text-indigo-400 font-semibold'>Mi diferencial:</span> Conozco el negocio desde dentro, lidero equipos y ahora domino las herramientas para transformarlo desde el mundo IT.",
    differenceTitle: "Lo que me diferencia",
    differenceItem1: "6+ años impulsando decisiones comerciales con datos en empresas líderes",
    differenceItem2: "Visión de negocio + habilidades analíticas + liderazgo",
    differenceItem3: "Formación sólida en Ciencia de datos, Machine Learning e IA",
    differenceItem4: "Capacidad para traducir insights complejos a equipos no técnicos",
    differenceItem5: "Proyectos con resultados medibles y foco en impacto real",
    differenceItem6: "Adaptabilidad en entornos cambiantes y pasión por la tecnología como motor de transformación",
    
    // Skills section
    skillsTitle: "Habilidades y Herramientas",
    technicalSkillsBtn: "Habilidades Técnicas",
    professionalSkillsBtn: "Aptitudes",
    
    languagesTitle: "Idiomas",
    languageSkills: ["Español (Nativo)", "Inglés (Alto)", "Alemán (Conversacional)"],
    
    programmingTitle: "Programación",
    
    dataTitle: "Manejo de Datos",
    
    mlTitle: "Aprendizaje Automático",
    
    statsTitle: "Estadística",
    
    visualizationTitle: "Visualización",
    
    versionControlTitle: "Control de Versiones",
    
    officeTitle: "Herramientas Ofimáticas",
    
    // Professional skills
    communicationTitle: "Comunicación",
    communicationSkill: "Habilidad para transmitir conceptos técnicos complejos de forma clara y persuasiva a diferentes audiencias. Experiencia presentando resultados a directivos y equipos comerciales.",
    
    leadershipTitle: "Liderazgo",
    leadershipSkill: "Capacidad para inspirar y guiar equipos hacia objetivos comunes. Experiencia liderando proyectos multidisciplinarios con resultados exitosos en plazos ajustados.",
    
    analyticalTitle: "Pensamiento Analítico",
    analyticalSkill: "Enfoque estructurado para resolver problemas complejos, identificar patrones y extraer insights accionables de grandes volúmenes de datos.",
    
    storytellingTitle: "Data Storytelling",
    storytellingSkill: "Habilidad para convertir datos en narrativas impactantes que influyen en la toma de decisiones organizacionales.",
    
    adaptabilityTitle: "Adaptabilidad",
    adaptabilitySkill: "Capacidad para aprender rápidamente, adaptarme a nuevas tecnologías y prosperar en entornos cambiantes.",
    
    resultsTitle: "Orientación a Resultados",
    resultsSkill: "Enfoque claro en generar valor medible. Experiencia comprobada en la consecución de objetivos comerciales y de negocio a través de soluciones basadas en datos.",
    
    // Projects section
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
    
    // Education section
    educationTitle: "Mi Formación",
    education1Title: "Posgrado en Analítica de Datos Aplicada a los Negocios",
    education1Place: "Universidad Icesi – Cali, Colombia",
    education1Period: "2020 – 2021",
    education2Title: "Pregrado en Economía y Negocios Internacionales",
    education2Place: "Universidad Icesi – Cali, Colombia",
    education2Period: "2012 – 2018",
    education3Title: "Programa en Data Science",
    education3Place: "TripleTen (Remoto – Internacional)",
    education3Period: "2025",
    
    // Courses section
    coursesTitle: "Cursos y Certificaciones",
    coursesPlatformTitle: "Plataformas de aprendizaje",
    totalCoursesCompleted: "certificados completados",
    coursesRecentTitle: "Certificaciones recientes",
    viewAllCoursesBtn: "Ver todos los cursos",
    
    // Course descriptions
    pythonCourseDesc: "Curso completo sobre Python para ciencia de datos. Incluye manejo de librerías como NumPy, Pandas y Matplotlib para el análisis y visualización de datos.",
    productCourseDesc: "Formación integral en gestión de productos digitales. Metodologías ágiles, design thinking y estrategias de producto.",
    statsCourseDesc: "Estadística inferencial aplicada con Python. Técnicas de muestreo, intervalos de confianza y pruebas de hipótesis.",
    mlCourseDesc: "Introducción al aprendizaje automático. Conceptos fundamentales, modelos supervisados y evaluación de rendimiento.",
    sparkCourseDesc: "Fundamentos de Apache Spark para procesamiento de grandes volúmenes de datos. Arquitectura, RDDs y operaciones básicas.",
    
    // Project specific properties
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
    
    // Objective section
    objectiveTitle: "Mi Objetivo Profesional",
    objectiveHtml: "Estoy en una misión clara:<br><br>🚀 Convertirme en un Data Scientist remoto para empresas internacionales<br>📈 Aportar valor real mediante soluciones basadas en datos<br>🧑‍💼 Crecer profesionalmente en Machine Learning, Inteligencia Artificial y proyectos de impacto<br><br>Mi propósito no es solo cambiar de industria, sino transformar mi carrera desde la experiencia comercial hacia el mundo IT, con una ventaja competitiva única:<br><br>💡 Conocimiento profundo del negocio<br>📊 Entendimiento del consumidor<br>🧰 Dominio de datos<br><br>Trabajo cada día por ese objetivo: estudiando con disciplina, desarrollando proyectos propios y preparándome para aportar valor en equipos globales."
  },
  en: {
    // Navigation
    home: "Home",
    about: "About me",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    objective: "Objective",
    contact: "Contact",

    // Common
    viewLinkedIn: "View LinkedIn",
    viewGitHub: "View GitHub",
    contactMe: "Send an email",
    downloadCV: "Download CV",
    linkCopied: "Link copied!",
    
    // Hero section
    welcomeTitle: "Hi! I'm Hugo Canaval.",
    welcomeSubtitle: "From the commercial world to IT. Transforming businesses with data, vision, and technology.",
    welcomeText: "For over six years I focused on the commercial side of companies like Nielsen, Mondelēz, Bavaria (AB InBev), and British American Tobacco. I was recognized for achieving ambitious goals by using data intelligently, leading teams, negotiating with major clients, and building successful commercial strategies.\n\nBut something was missing...\n\nI wanted to go further. Not just use data, but create with it, turn it into intelligence, and build real solutions.\n\nSo I committed to learning and decided to dedicate myself full-time to studying data science, machine learning, and artificial intelligence. I'm transforming my career from the ground up to follow the path I'm truly passionate about.\n\nMy goal is to become a Data Scientist who brings together the best of both worlds:\n🚀 Robust technical skills + 🧠 Strategic business vision",
    
    // About section
    aboutTitle: "Who am I?",
    aboutHtml: "I'm an economist with a postgraduate degree in Data Analytics and over six years of experience in multinational companies, where I led:<br><br>ⓘ Pricing and commercial strategy projects<br>📈 Trade Marketing and automation initiatives<br>🔢 Data analytics processes to support decision-making<br><br>Thanks to data, I achieved outstanding results. But my true passion lies in technology.<br><br>Today, I'm reinventing myself as a Data Scientist, through an intensive full-time training that includes:<br><br>🎓 Statistics, programming, and AI<br>✍️ Hands-on Machine Learning projects<br>⚖️ A technical approach, always with business vision<br><br><span class='text-indigo-400 font-semibold'>What sets me apart:</span> I understand the business from the inside, lead teams, and now master the tools to transform it through the IT world.",
    differenceTitle: "What makes me different",
    differenceItem1: "6+ years driving data-informed business decisions in leading companies",
    differenceItem2: "Business vision + analytical skills + proven leadership",
    differenceItem3: "Solid training in Data Science, Machine Learning, and AI",
    differenceItem4: "Ability to translate complex insights for non-technical teams",
    differenceItem5: "Projects with measurable outcomes and real-world impact",
    differenceItem6: "Adaptability in changing environments and a deep passion for technology as a driver of transformation",
    
    // Skills section
    skillsTitle: "Skills and Tools",
    technicalSkillsBtn: "Technical Skills",
    professionalSkillsBtn: "Professional Skills",
    
    languagesTitle: "Languages",
    languageSkills: ["Spanish (Native)", "English (Proficient)", "German (Conversational)"],
    
    programmingTitle: "Programming",
    
    dataTitle: "Data Handling",
    
    mlTitle: "Machine Learning",
    
    statsTitle: "Statistics",
    
    visualizationTitle: "Visualization",
    
    versionControlTitle: "Version Control",
    
    officeTitle: "Office Tools",
    
    // Professional skills
    communicationTitle: "Communication",
    communicationSkill: "Ability to clearly and persuasively communicate complex technical concepts to different audiences. Experience presenting results to executives and commercial teams.",
    
    leadershipTitle: "Leadership",
    leadershipSkill: "Capacity to inspire and guide teams toward common goals. Experience leading multidisciplinary projects with successful outcomes under tight deadlines.",
    
    analyticalTitle: "Analytical Thinking",
    analyticalSkill: "Structured approach to solving complex problems, identifying patterns, and extracting actionable insights from large volumes of data.",
    
    storytellingTitle: "Data Storytelling",
    storytellingSkill: "Ability to transform data into impactful narratives that influence organizational decision-making.",
    
    adaptabilityTitle: "Adaptability",
    adaptabilitySkill: "Capacity to learn quickly, adapt to new technologies, and thrive in changing environments.",
    
    resultsTitle: "Results-Oriented",
    resultsSkill: "Clear focus on generating measurable value. Proven experience in achieving business and commercial objectives through data-driven solutions.",
    
    // Projects section
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
    
    // Education section
    educationTitle: "My Education",
    education1Title: "Postgraduate Degree in Data Analytics for Business",
    education1Place: "Universidad Icesi – Cali, Colombia",
    education1Period: "2020 – 2021",
    education2Title: "Bachelor's in Economics and International Business",
    education2Place: "Universidad Icesi – Cali, Colombia",
    education2Period: "2012 – 2018",
    education3Title: "Data Science Program",
    education3Place: "TripleTen (Remote – International)",
    education3Period: "2025",
    
    // Courses section
    coursesTitle: "Courses and Certifications",
    coursesPlatformTitle: "Learning platforms",
    totalCoursesCompleted: "completed certificates",
    coursesRecentTitle: "Recent certifications",
    viewAllCoursesBtn: "View all courses",
    
    // Course descriptions
    pythonCourseDesc: "Complete course on Python for data science. Includes libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization.",
    productCourseDesc: "Comprehensive training in digital product management. Agile methodologies, design thinking, and product strategies.",
    statsCourseDesc: "Applied inferential statistics with Python. Sampling techniques, confidence intervals, and hypothesis testing.",
    mlCourseDesc: "Introduction to machine learning. Fundamental concepts, supervised models, and performance evaluation.",
    sparkCourseDesc: "Apache Spark fundamentals for big data processing. Architecture, RDDs, and basic operations.",
    
    // Project specific properties
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
    
    // Objective section
    objectiveTitle: "My Professional Goal",
    objectiveHtml: "I'm on a clear mission:<br><br>🚀 To become a remote Data Scientist for international companies<br>📈 To deliver real value through data-driven solutions<br>🧑‍💼 To grow professionally in Machine Learning, Artificial Intelligence, and high-impact projects<br><br>My goal isn't just to change industries—it's to transform my career, moving from a commercial background into the IT world, with a unique competitive edge:<br><br>💡 Deep understanding of business<br>📊 Strong grasp of consumer behavior<br>🧰 Solid command of data<br><br>I work every day toward this goal: studying with discipline, developing personal projects, and preparing to contribute value to global teams."
  }
};
