
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
    <Card className="dark-card border-gray-800 transition-all duration-300 hover:border-indigo-600 hover:shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg text-gray-200">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">{highlightsLabel}:</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-2 text-xs">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {stack.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-800/50 text-gray-400 border-gray-700 text-xs py-0">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          size="sm"
          className="w-full flex items-center justify-center gap-2 border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-gray-300 text-xs"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Github size={14} />
          <span>{projectButton}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
