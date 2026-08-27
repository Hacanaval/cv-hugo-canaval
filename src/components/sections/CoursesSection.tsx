import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface CourseData {
  title: string;
  platform: string;
  url?: string;
  description: string;
  logo: string;
  topics?: string[];
}

const CoursesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);

  const courses: CourseData[] = language === "es" ? [
    { title: "Product Management", platform: "CoderHouse", description: t.productCourseDesc, logo: "/coderhouse-logo.svg", topics: ["Design Thinking", "SCRUM", "UX/UI", "Business Model"] },
    { title: "Python para Ciencia de Datos", platform: "Platzi", url: "https://platzi.com/cursos/python-data-science/", description: t.pythonCourseDesc, logo: "/platzi-logo.svg", topics: ["NumPy", "Pandas", "Matplotlib"] },
    { title: "Estadística Inferencial para Data Science e IA", platform: "Platzi", url: "https://platzi.com/cursos/estadistica-inferencial-python/", description: t.statsCourseDesc, logo: "/platzi-logo.svg", topics: ["Inferencia", "Muestreo", "Pruebas de hipótesis"] },
    { title: "Intro to Machine Learning", platform: "Kaggle", url: "https://www.kaggle.com/learn/intro-to-machine-learning", description: t.mlCourseDesc, logo: "/kaggle-logo.svg", topics: ["Árboles de decisión", "Random Forest", "Validación cruzada"] },
    { title: "Fundamentos de Spark para Big Data", platform: "Platzi", url: "https://platzi.com/cursos/spark/", description: t.sparkCourseDesc, logo: "/platzi-logo.svg", topics: ["Apache Spark", "PySpark", "ETL", "Big Data"] },
  ] : [
    { title: "Product Management", platform: "CoderHouse", description: t.productCourseDesc, logo: "/coderhouse-logo.svg", topics: ["Design Thinking", "SCRUM", "UX/UI", "Business Model"] },
    { title: "Python for Data Science", platform: "Platzi", url: "https://platzi.com/cursos/python-data-science/", description: t.pythonCourseDesc, logo: "/platzi-logo.svg", topics: ["NumPy", "Pandas", "Matplotlib"] },
    { title: "Inferential Statistics for Data Science & AI", platform: "Platzi", url: "https://platzi.com/cursos/estadistica-inferencial-python/", description: t.statsCourseDesc, logo: "/platzi-logo.svg", topics: ["Inference", "Sampling", "Hypothesis Testing"] },
    { title: "Intro to Machine Learning", platform: "Kaggle", url: "https://www.kaggle.com/learn/intro-to-machine-learning", description: t.mlCourseDesc, logo: "/kaggle-logo.svg", topics: ["Decision Trees", "Random Forest", "Cross-validation"] },
    { title: "Spark Fundamentals for Big Data", platform: "Platzi", url: "https://platzi.com/cursos/spark/", description: t.sparkCourseDesc, logo: "/platzi-logo.svg", topics: ["Apache Spark", "PySpark", "ETL", "Big Data"] },
  ];

  return (
    <section id="courses" className="paper-section section-spacing reveal-section">
      <div className="section-frame">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
          <div>
            <p className="section-kicker text-[var(--cobalt)]">06 / Aprendizaje</p>
            <h2 className="section-heading">{t.coursesTitle}</h2>
          </div>

          <div className="border-t border-[var(--line)]">
            {courses.map((course, index) => (
              <button
                key={course.title}
                type="button"
                className="focus-ring group grid w-full gap-4 border-b border-[var(--line)] py-6 text-left sm:grid-cols-[42px_1fr_auto] sm:items-center sm:gap-7"
                onClick={() => setSelectedCourse(course)}
              >
                <span className="font-mono text-[10px] text-black/35">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.025em] transition-colors group-hover:text-[var(--cobalt)] sm:text-xl">{course.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-black/45">
                    {course.topics?.map((topic) => <span key={topic}>{topic}</span>)}
                  </div>
                </div>
                <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-black/50">
                  {course.platform}<span className="text-lg text-[var(--cobalt)]">↗</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedCourse} onOpenChange={(open) => !open && setSelectedCourse(null)}>
          <DialogContent className="max-h-[85vh] overflow-y-auto rounded-none border-black/20 bg-[var(--paper-bright)] text-[var(--ink)] sm:max-w-3xl">
            <DialogHeader className="border-b border-black/15 pb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--cobalt)]">{selectedCourse?.platform}</span>
              <DialogTitle className="pr-8 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{selectedCourse?.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription asChild>
              <div className="text-black/70">
              {selectedCourse?.url && (
                <a href={selectedCourse.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 border-b border-[var(--cobalt)] pb-1 text-sm font-medium text-[var(--cobalt)]">
                  {selectedCourse.url} <ExternalLink size={14} />
                </a>
              )}
              <div className="body-copy mt-7 whitespace-pre-line text-base leading-relaxed">
                {selectedCourse?.description.split("\n").map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
              </div>
              <div className="mt-7 flex flex-wrap gap-2 border-t border-black/15 pt-5">
                {selectedCourse?.topics?.map((topic) => <span key={topic} className="border border-black/20 px-3 py-1.5 text-xs">{topic}</span>)}
              </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CoursesSection;
