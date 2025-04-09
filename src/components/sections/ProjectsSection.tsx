
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
}

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const projects: Project[] = [
    {
      title: "Customer Churn Prediction",
      description: language === "en" 
        ? "Machine learning model to predict customer churn with 87% accuracy. Data preprocessing, feature engineering, and model selection."
        : "Modelo de machine learning para predecir la pérdida de clientes con precisión del 87%. Preprocesamiento de datos, ingeniería de características y selección de modelos.",
      githubUrl: "https://github.com/username/churn-prediction",
      tech: ["Python", "Scikit-learn", "Pandas", "RandomForest"],
      metrics: [
        { label: "Accuracy", value: "87%" },
        { label: "F1 Score", value: "0.83" }
      ]
    },
    {
      title: "Sales Forecasting Algorithm",
      description: language === "en"
        ? "Time series analysis to forecast retail sales using ARIMA and Prophet models. Implemented feature extraction and achieved RMSE of 0.12."
        : "Análisis de series temporales para predecir ventas minoristas usando modelos ARIMA y Prophet. Implementé extracción de características y logré un RMSE de 0.12.",
      githubUrl: "https://github.com/username/sales-forecast",
      tech: ["Python", "Prophet", "ARIMA", "Time Series"],
      metrics: [
        { label: "RMSE", value: "0.12" },
        { label: "MAE", value: "0.09" }
      ]
    },
    {
      title: "Customer Segmentation",
      description: language === "en"
        ? "Unsupervised learning model for customer segmentation based on purchasing behavior. Identified 4 key customer profiles for targeted marketing."
        : "Modelo de aprendizaje no supervisado para segmentación de clientes basada en comportamiento de compra. Identifiqué 4 perfiles clave para marketing dirigido.",
      githubUrl: "https://github.com/username/customer-segments",
      tech: ["Python", "K-means", "PCA", "Data Visualization"],
      metrics: [
        { label: "Silhouette", value: "0.68" },
        { label: "Clusters", value: "4" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 dark-section-alt">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-10">{t.projectsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-gray-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.metrics && (
                  <div className="flex gap-3 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex flex-col items-center bg-gray-900/50 rounded-lg p-2 border border-gray-800">
                        <span className="text-sm text-gray-400">{metric.label}</span>
                        <span className="font-bold text-indigo-400">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github size={16} />
                  <span>{t.projectButton}</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
