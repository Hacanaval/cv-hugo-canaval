
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { ArrowDown, Eye, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

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

      <div className="container mx-auto px-6 py-24 relative z-10 text-left md:text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in">
          {t.welcomeTitle}
        </h1>
        
        <h2 className="text-xl md:text-2xl text-indigo-400 mb-8 animate-fade-in animate-delay-100">
          {t.welcomeSubtitle}
        </h2>
        
        {/* Main Text - Original */}
        <div className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in animate-delay-200 space-y-6 leading-relaxed">
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

        {/* CTAs - All with same style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animate-delay-300">
          <Button 
            variant="outline"
            size="lg"
            className="border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 bg-transparent px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Eye className="mr-2 h-5 w-5" />
            {t.ctaViewCases}
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 bg-transparent px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
            onClick={() => {
              window.open('https://drive.google.com/drive/u/3/folders/12Qbaw-A-fZOzItcqYn17MQ4J7KdkGrQ7', '_blank');
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            {t.ctaDownloadCV}
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 bg-transparent px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            {t.ctaContact}
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
