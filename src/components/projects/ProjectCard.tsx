
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
    <Card className="glass-card border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-500 hover:scale-[1.02] hover:bg-gray-900/60">
      <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-indigo-400 mb-2">{highlightsLabel}:</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech, index) => (
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
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Github size={16} />
          <span>{projectButton}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
