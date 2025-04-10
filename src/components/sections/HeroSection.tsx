
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { ArrowDown } from "lucide-react";
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
        
        <div className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 animate-fade-in animate-delay-200 space-y-4">
          {t.welcomeText.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
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
