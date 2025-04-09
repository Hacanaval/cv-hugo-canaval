
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { FileDown, Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [copied, setCopied] = useState(false);

  // Social links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/hugo-canaval/",
    github: "https://github.com/Hacanaval",
    email: "hacanaval@hotmail.com"
  };
  
  const cvLinks = {
    es: "/cv-es.pdf",
    en: "/cv-en.pdf"
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    toast({
      title: t.emailCopied,
      description: socialLinks.email,
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = () => {
    window.location.href = `mailto:${socialLinks.email}`;
  };

  return (
    <footer id="contact" className="py-24 dark-section">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto">
          <Button 
            className="w-full mb-4 text-lg py-6 bg-indigo-600 hover:bg-indigo-700"
            onClick={() => window.open(cvLinks[language], "_blank")}
          >
            <FileDown className="mr-2" size={20} />
            {t.downloadCV}
          </Button>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
              onClick={() => window.open(socialLinks.linkedin, "_blank")}
            >
              <Linkedin size={20} />
              <span className="sr-only">{t.viewLinkedIn}</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
              onClick={() => window.open(socialLinks.github, "_blank")}
            >
              <Github size={20} />
              <span className="sr-only">{t.viewGitHub}</span>
            </Button>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
                      onClick={sendEmail}
                      onMouseEnter={() => {}}
                    >
                      <Mail size={20} />
                      <span className="sr-only">{t.contactMe}</span>
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex items-center gap-2">
                    <span>{socialLinks.email}</span>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-6 w-6" 
                      onClick={(e) => {
                        e.stopPropagation();
                        copyEmail();
                      }}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </Button>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <p className="mt-10 text-gray-500">
            © {new Date().getFullYear()} · Data Science Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
