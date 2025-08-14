
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { ArrowDown, Eye, Download, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [loadingStates, setLoadingStates] = useState({
    projects: false,
    cv: false,
    contact: false
  });

  const handleCTAClick = async (action: 'projects' | 'cv' | 'contact', callback: () => void) => {
    setLoadingStates(prev => ({ ...prev, [action]: true }));
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    callback();
    
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [action]: false }));
    }, 500);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      {/* Background with code pattern effect */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[url('/data-pattern.png')] bg-repeat"></div>
      </div>
      
      {/* Digital particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-indigo-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animation: `pulse ${Math.random() * 4 + 3}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32 relative z-10 text-left md:text-center max-w-6xl">
        <h1 className="text-hierarchy-1 text-high-contrast mb-4 sm:mb-6 animate-fade-in">
          {t.welcomeTitle}
        </h1>
        
        <h2 className="text-hierarchy-3 text-indigo-400 mb-8 sm:mb-12 animate-fade-in animate-delay-100">
          {t.welcomeSubtitle}
        </h2>
        
        {/* Main Text - Enhanced typography */}
        <div className="text-body max-w-4xl mx-auto mb-12 sm:mb-16 animate-fade-in animate-delay-200 content-spacing text-medium-contrast">
          {t.welcomeText.split('\n\n').map((paragraph, index) => {
            // Handle the goal paragraph specially
            if (paragraph.includes("Mi objetivo")) {
              const parts = paragraph.split("Mi objetivo");
              return (
                <p key={index} className="leading-relaxed">
                  {parts[0]}
                  <span className="text-indigo-400 font-semibold">
                    Mi objetivo
                  </span>
                  {parts[1]}
                </p>
              );
            }
            // Handle English case
            if (paragraph.includes("My goal")) {
              const parts = paragraph.split("My goal");
              return (
                <p key={index} className="leading-relaxed">
                  {parts[0]}
                  <span className="text-indigo-400 font-semibold">
                    My goal
                  </span>
                  {parts[1]}
                </p>
              );
            }
            return <p key={index} className="leading-relaxed">{paragraph}</p>;
          })}
        </div>

        {/* CTAs - Mobile optimized */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 animate-fade-in animate-delay-300 w-full max-w-2xl mx-auto px-4">
          <Button 
            variant="outline"
            size="lg"
            disabled={loadingStates.projects}
            className="w-full sm:w-auto border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 bg-transparent px-6 sm:px-8 py-4 sm:py-3 text-base sm:text-base font-medium transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group/cta relative overflow-hidden min-h-[56px] touch-manipulation"
            onClick={() => handleCTAClick('projects', () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }))}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-indigo-500/10 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
            {loadingStates.projects ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Eye className="mr-2 h-5 w-5 group-hover/cta:scale-110 transition-transform duration-300" />
            )}
            <span className="relative z-10">{t.ctaViewCases}</span>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            disabled={loadingStates.cv}
            className="w-full sm:w-auto border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 bg-transparent px-6 sm:px-8 py-4 sm:py-3 text-base sm:text-base font-medium transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group/cta relative overflow-hidden min-h-[56px] touch-manipulation"
            onClick={() => handleCTAClick('cv', () => window.open('https://drive.google.com/drive/u/3/folders/12Qbaw-A-fZOzItcqYn17MQ4J7KdkGrQ7', '_blank'))}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-indigo-500/10 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
            {loadingStates.cv ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Download className="mr-2 h-5 w-5 group-hover/cta:scale-110 group-hover/cta:rotate-12 transition-transform duration-300" />
            )}
            <span className="relative z-10">{t.ctaDownloadCV}</span>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            disabled={loadingStates.contact}
            className="w-full sm:w-auto border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 bg-transparent px-6 sm:px-8 py-4 sm:py-3 text-base sm:text-base font-medium transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group/cta relative overflow-hidden min-h-[56px] touch-manipulation"
            onClick={() => handleCTAClick('contact', () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-indigo-500/10 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
            {loadingStates.contact ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Mail className="mr-2 h-5 w-5 group-hover/cta:scale-110 transition-transform duration-300" />
            )}
            <span className="relative z-10">{t.ctaContact}</span>
          </Button>
        </div>
        
        <div className="animate-bounce absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="text-indigo-400 hover:text-indigo-300 transition">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
