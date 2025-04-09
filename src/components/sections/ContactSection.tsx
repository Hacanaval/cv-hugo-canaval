
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Placeholder links - replace with your actual profiles
  const socialLinks = {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    email: "mailto:your.email@example.com"
  };
  
  const cvLinks = {
    es: "/cv-es.pdf",
    en: "/cv-en.pdf"
  };

  return (
    <footer id="contact" className="py-24 dark-section-alt">
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
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-12 w-12 rounded-full border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/50 text-indigo-400"
              onClick={() => window.open(socialLinks.email, "_blank")}
            >
              <Mail size={20} />
              <span className="sr-only">{t.contactMe}</span>
            </Button>
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
