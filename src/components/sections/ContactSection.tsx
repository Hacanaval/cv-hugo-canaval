
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { FileDown, Github, Linkedin, Mail, Copy, Check, ExternalLink, Smartphone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";

type SocialPlatform = "linkedin" | "github" | "email" | "whatsapp";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [copied, setCopied] = useState<SocialPlatform | null>(null);
  
  // Social links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/hugo-canaval/",
    github: "https://github.com/Hacanaval",
    email: "hacanaval@hotmail.com",
    whatsapp: "+57 310 4153555",
    whatsappUrl: "https://wa.me/573104153555",
    cvDrive: "https://drive.google.com/drive/folders/12Qbaw-A-fZOzItcqYn17MQ4J7KdkGrQ7?usp=sharing"
  };

  const copyToClipboard = (text: string, platform: SocialPlatform) => {
    navigator.clipboard.writeText(text);
    setCopied(platform);
    toast({
      title: t.linkCopied,
      description: text,
      duration: 2000,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer id="contact" className="py-24 dark-section reveal-section">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto">
          <Button 
            className="w-full mb-4 text-lg py-6 bg-indigo-600 hover:bg-indigo-700"
            onClick={() => window.open(socialLinks.cvDrive, "_blank")}
          >
            <FileDown className="mr-2" size={20} />
            {t.downloadCV}
          </Button>
          
          <div className="flex justify-center gap-4 mt-8">
            <TooltipProvider delayDuration={500}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
                    onClick={() => window.open(socialLinks.linkedin, "_blank")}
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">{t.viewLinkedIn}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="flex items-center gap-2">
                  <span>{socialLinks.linkedin}</span>
                  <Button 
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(socialLinks.linkedin, "linkedin");
                    }}
                  >
                    {copied === "linkedin" ? <Check size={14} /> : <Copy size={14} />}
                  </Button>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider delayDuration={500}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
                    onClick={() => window.open(socialLinks.github, "_blank")}
                  >
                    <Github size={20} />
                    <span className="sr-only">{t.viewGitHub}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="flex items-center gap-2">
                  <span>{socialLinks.github}</span>
                  <Button 
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(socialLinks.github, "github");
                    }}
                  >
                    {copied === "github" ? <Check size={14} /> : <Copy size={14} />}
                  </Button>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider delayDuration={500}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
                    onClick={() => copyToClipboard(socialLinks.email, "email")}
                  >
                    <Mail size={20} />
                    <span className="sr-only">{t.contactMe}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="flex items-center gap-2">
                  <span>{socialLinks.email}</span>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-6 w-6" 
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(socialLinks.email, "email");
                    }}
                  >
                    {copied === "email" ? <Check size={14} /> : <Copy size={14} />}
                  </Button>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider delayDuration={500}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
                    onClick={() => window.open(socialLinks.whatsappUrl, "_blank")}
                  >
                    <Smartphone size={20} />
                    <span className="sr-only">WhatsApp</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="flex items-center gap-2">
                  <span>{socialLinks.whatsapp}</span>
                  <Button 
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(socialLinks.whatsapp, "whatsapp");
                    }}
                  >
                    {copied === "whatsapp" ? <Check size={14} /> : <Copy size={14} />}
                  </Button>
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
