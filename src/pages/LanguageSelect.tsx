
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelect: React.FC = () => {
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageSelect = (lang: "es" | "en") => {
    setLanguage(lang);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
      
      {/* Background particles effect */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-indigo-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              animation: `pulse ${Math.random() * 4 + 3}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Hugo Canaval
        </h1>
        <p className="text-xl md:text-2xl font-light mb-14 text-gray-300">
          Data Scientist
        </p>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleLanguageSelect("es")}
            className="text-xl border-2 border-indigo-600 bg-transparent hover:bg-indigo-600/20 text-white px-10 py-6 h-auto transition-all duration-300"
          >
            🇪🇸 Español
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleLanguageSelect("en")}
            className="text-xl border-2 border-indigo-600 bg-transparent hover:bg-indigo-600/20 text-white px-10 py-6 h-auto transition-all duration-300"
          >
            🇬🇧 English
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
