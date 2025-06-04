
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
          {/* Project 1 - SaaS Sales Agent */}
          <Card className="glass-card border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-500 hover:scale-[1.02] hover:bg-gray-900/60">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.saasAgentTitle}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.saasAgentDesc}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">{t.highlightsLabel}:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {t.saasAgentHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {t.saasAgentStack.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/agente_vendedor_backend", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 2 - Age Classification */}
          <Card className="glass-card border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-500 hover:scale-[1.02] hover:bg-gray-900/60">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.ageClassificationTitle}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.ageClassificationDesc}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">{t.highlightsLabel}:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {t.ageClassificationHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {t.ageClassificationStack.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/cnn-image-based-age-verification", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 3 - Sentiment Analysis */}
          <Card className="glass-card border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-500 hover:scale-[1.02] hover:bg-gray-900/60">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.sentimentAnalysisTitle}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.sentimentAnalysisDesc}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">{t.highlightsLabel}:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {t.sentimentAnalysisHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {t.sentimentAnalysisStack.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/nlp-sentiment-models-comparison", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 4 - Taxi Demand Forecasting */}
          <Card className="glass-card border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-500 hover:scale-[1.02] hover:bg-gray-900/60">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
              <CardTitle>{t.taxiDemandTitle}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">{t.taxiDemandDesc}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">{t.highlightsLabel}:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {t.taxiDemandHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {t.taxiDemandStack.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/20 text-gray-300"
                onClick={() => window.open("https://github.com/Hacanaval/ride-demand-timeseries", "_blank")}
              >
                <Github size={16} />
                <span>{t.projectButton}</span>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Call to action text before the button */}
        <div className="text-center mt-12 mb-6">
          <p className="text-gray-300 max-w-4xl mx-auto text-lg">
            {t.githubInvitation}
          </p>
        </div>

        <div className="flex justify-center">
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
