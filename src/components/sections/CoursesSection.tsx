
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
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

  const courses: CourseData[] = language === 'es' ? [
    {
      title: "Python para Ciencia de Datos",
      platform: "Platzi",
      url: "https://platzi.com/cursos/python-data-science/",
      description: t.pythonCourseDesc,
      logo: "/platzi-logo.svg",
      topics: ["NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Product Management",
      platform: "CoderHouse",
      description: t.productCourseDesc,
      logo: "/coderhouse-logo.svg",
      topics: ["Design Thinking", "SCRUM", "UX/UI", "Business Model"]
    },
    {
      title: "Estadística Inferencial para Data Science e IA",
      platform: "Platzi",
      url: "https://platzi.com/cursos/estadistica-inferencial-python/",
      description: t.statsCourseDesc,
      logo: "/platzi-logo.svg",
      topics: ["Inferencia", "Muestreo", "Pruebas de hipótesis"]
    },
    {
      title: "Intro to Machine Learning",
      platform: "Kaggle",
      url: "https://www.kaggle.com/learn/intro-to-machine-learning",
      description: t.mlCourseDesc,
      logo: "/kaggle-logo.svg",
      topics: ["Árboles de decisión", "Random Forest", "Validación cruzada"]
    },
    {
      title: "Fundamentos de Spark para Big Data",
      platform: "Platzi",
      url: "https://platzi.com/cursos/spark/",
      description: t.sparkCourseDesc,
      logo: "/platzi-logo.svg",
      topics: ["Apache Spark", "PySpark", "ETL", "Big Data"]
    }
  ] : [
    {
      title: "Python for Data Science",
      platform: "Platzi",
      url: "https://platzi.com/cursos/python-data-science/",
      description: t.pythonCourseDesc,
      logo: "/platzi-logo.svg",
      topics: ["NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Product Management",
      platform: "CoderHouse",
      description: t.productCourseDesc,
      logo: "/coderhouse-logo.svg",
      topics: ["Design Thinking", "SCRUM", "UX/UI", "Business Model"]
    },
    {
      title: "Inferential Statistics for Data Science & AI",
      platform: "Platzi",
      url: "https://platzi.com/cursos/estadistica-inferencial-python/",
      description: t.statsCourseDesc,
      logo: "/platzi-logo.svg",
      topics: ["Inference", "Sampling", "Hypothesis Testing"]
    },
    {
      title: "Intro to Machine Learning",
      platform: "Kaggle",
      url: "https://www.kaggle.com/learn/intro-to-machine-learning",
      description: t.mlCourseDesc,
      logo: "/kaggle-logo.svg",
      topics: ["Decision Trees", "Random Forest", "Cross-validation"]
    },
    {
      title: "Spark Fundamentals for Big Data",
      platform: "Platzi",
      url: "https://platzi.com/cursos/spark/",
      description: t.sparkCourseDesc,
      logo: "/platzi-logo.svg",
      topics: ["Apache Spark", "PySpark", "ETL", "Big Data"]
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'platzi':
        return 'bg-green-600';
      case 'kaggle':
        return 'bg-blue-600';
      case 'coderhouse':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <section id="courses" className="py-24 dark-section reveal-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">{t.coursesTitle}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="glass-card border-gray-800 hover:border-indigo-700 transition-all cursor-pointer hover:scale-[1.02] group"
              onClick={() => setSelectedCourse(course)}
            >
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-indigo-300 group-hover:text-indigo-200 transition-colors">
                    {course.title}
                  </CardTitle>
                </div>
                <Badge className={`${getPlatformColor(course.platform)} mt-2`}>
                  {course.platform}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mt-4">
                  {course.topics?.map((topic, i) => (
                    <Badge key={i} variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedCourse} onOpenChange={(open) => !open && setSelectedCourse(null)}>
          <DialogContent className="sm:max-w-3xl bg-gray-900 border border-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-semibold text-indigo-400">
                {selectedCourse?.title}
              </DialogTitle>
              <Badge className={`${selectedCourse ? getPlatformColor(selectedCourse.platform) : ''} mt-2 self-start`}>
                {selectedCourse?.platform}
              </Badge>
            </DialogHeader>
            
            <DialogDescription className="text-gray-300">
              {selectedCourse?.url && (
                <a 
                  href={selectedCourse.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 mb-4"
                >
                  {selectedCourse.url} <ExternalLink size={14} />
                </a>
              )}
              
              <div className="mt-4 text-gray-200 whitespace-pre-line">
                {selectedCourse?.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedCourse?.topics?.map((topic, i) => (
                  <Badge key={i} variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                    {topic}
                  </Badge>
                ))}
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CoursesSection;
