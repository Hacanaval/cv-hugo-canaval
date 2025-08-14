
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 sm:py-24 dark-section reveal-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center">{t.aboutTitle}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-gradient-to-br from-indigo-400 to-indigo-600 p-1">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/hugo-profile-2024.png"
                  alt="Hugo Canaval" 
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="text-3xl sm:text-4xl">HC</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <Card className="dark-card border-gray-800">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 space-y-4 sm:space-y-6 max-w-3xl">
                  <div dangerouslySetInnerHTML={{ __html: t.aboutHtml }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-20">
          <h3 className="section-subheading text-center mb-6 sm:mb-10">{t.differenceTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Add 6 items instead of 5 */}
            {[
              t.differenceItem1,
              t.differenceItem2,
              t.differenceItem3,
              t.differenceItem4,
              t.differenceItem5,
              t.differenceItem6,
            ].map((item, index) => (
              <Card 
                key={index}
                className="glass-card hover:border-indigo-700 transition-all hover:transform hover:scale-[1.02] touch-manipulation"
              >
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <CardContent className="p-4 sm:p-6 flex">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 min-w-8 sm:min-w-10 rounded-full bg-indigo-900/60 flex items-center justify-center text-indigo-400 mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm sm:text-base font-medium">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
