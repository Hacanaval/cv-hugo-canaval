
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  highlightsLabel: string;
  projectButton: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  highlights,
  stack,
  githubUrl,
  highlightsLabel,
  projectButton,
}) => {
  return (
    <Card className="glass-card border-gray-800 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/25 hover:border-indigo-400 hover:scale-[1.03] hover:bg-gray-900/80 group touch-manipulation active:scale-[0.98] sm:active:scale-[1.03]">
      <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white relative overflow-hidden p-4 sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardTitle className="relative z-10 group-hover:text-indigo-100 transition-colors duration-300 text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
        <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors duration-300">{highlightsLabel}:</h4>
          <ul className="text-xs sm:text-sm text-gray-300 space-y-2">
            {highlights.map((highlight, index) => (
              <li 
                key={index} 
                className="flex items-start opacity-90 group-hover:opacity-100 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-indigo-400 mr-2 group-hover:text-indigo-300 transition-colors duration-300 mt-1">•</span>
                <span className="group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {stack.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-indigo-900/30 text-indigo-300 border-indigo-700 group-hover:bg-indigo-800/40 group-hover:text-indigo-200 group-hover:border-indigo-600 transition-all duration-300 hover:scale-105 text-xs sm:text-sm px-2 py-1 touch-manipulation"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-indigo-900/30 hover:border-indigo-600 text-gray-300 hover:text-indigo-200 transition-all duration-300 group/btn relative overflow-hidden min-h-[44px] touch-manipulation active:scale-95"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-indigo-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          <Github size={16} className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
          <span className="relative z-10 text-sm sm:text-base">{projectButton}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
