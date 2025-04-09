
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="projects" className="py-24 dark-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-10">{t.projectsTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project 1 - CV Optimizer */}
          <Card className="glass-card border-gray-800 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.cvOptimizerTitle}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.cvOptimizerDesc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Python
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  NLP
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  GPT-4
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Web Scraping
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Flask
                </Badge>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/cv-optimizer", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 2 - Advanced Predictive */}
          <Card className="glass-card border-gray-800 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.project1Title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.project1Desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Python
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Scikit-learn
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Cross-Validation
                </Badge>
              </div>
              
              <div className="flex gap-3 mb-4">
                <div className="flex flex-col items-center bg-gray-900/50 rounded-lg p-2 border border-gray-800">
                  <span className="text-sm text-gray-400">{t.accuracyLabel}</span>
                  <span className="font-bold text-indigo-400">+15%</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/Advanced-Predictive-Analytics-CV-Regression", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 3 - Linear Regression */}
          <Card className="glass-card border-gray-800 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.project2Title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.project2Desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Python
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Regression
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Bootstrapping
                </Badge>
              </div>
              
              <div className="flex gap-3 mb-4">
                <div className="flex flex-col items-center bg-gray-900/50 rounded-lg p-2 border border-gray-800">
                  <span className="text-sm text-gray-400">{t.errorLabel}</span>
                  <span className="font-bold text-indigo-400">-10%</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/Linear_Regression_and_Bootstrapping_Analysis", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 4 - Imbalanced Classes */}
          <Card className="glass-card border-gray-800 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.project3Title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.project3Desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Python
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Random Forest
                </Badge>
                <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                  Classification
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex flex-col items-center bg-gray-900/50 rounded-lg p-2 border border-gray-800">
                  <span className="text-sm text-gray-400">F1-Score</span>
                  <span className="font-bold text-indigo-400">0.85</span>
                </div>
                <div className="flex flex-col items-center bg-gray-900/50 rounded-lg p-2 border border-gray-800">
                  <span className="text-sm text-gray-400">{t.accuracyMetricLabel}</span>
                  <span className="font-bold text-indigo-400">86%</span>
                </div>
                <div className="flex flex-col items-center bg-gray-900/50 rounded-lg p-2 border border-gray-800">
                  <span className="text-sm text-gray-400">{t.recallLabel}</span>
                  <span className="font-bold text-indigo-400">82%</span>
                </div>
                <div className="flex flex-col items-center bg-gray-900/50 rounded-lg p-2 border border-gray-800">
                  <span className="text-sm text-gray-400">{t.precisionLabel}</span>
                  <span className="font-bold text-indigo-400">88%</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/ML-Imbalanced-Class-Handling", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
            onClick={() => window.open("https://github.com/Hacanaval", "_blank")}
          >
            <Github size={20} />
            <span>{t.viewAllProjects}</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
