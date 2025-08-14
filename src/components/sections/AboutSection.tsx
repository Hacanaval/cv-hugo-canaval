
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TrendingUp, Users, Target, Zap, Award, Lightbulb } from "lucide-react";

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getDifferenceIcon = (index: number) => {
    const icons = [
      <TrendingUp size={16} className="text-indigo-400" />,
      <Users size={16} className="text-indigo-400" />,
      <Target size={16} className="text-indigo-400" />,
      <Zap size={16} className="text-indigo-400" />,
      <Award size={16} className="text-indigo-400" />,
      <Lightbulb size={16} className="text-indigo-400" />
    ];
    return icons[index] || <TrendingUp size={16} className="text-indigo-400" />;
  };

  return (
    <section id="about" className="section-spacing dark-section reveal-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center">{t.aboutTitle}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 max-w-6xl mx-auto element-spacing">
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
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="text-body text-medium-contrast content-spacing max-w-4xl">
                  <div dangerouslySetInnerHTML={{ __html: t.aboutHtml }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24">
          <h3 className="section-subheading text-center">{t.differenceTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
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
                  <div className="h-8 w-8 sm:h-10 sm:w-10 min-w-8 sm:min-w-10 rounded-full bg-indigo-900/60 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 relative">
                    <span className="text-xs sm:text-sm font-bold text-indigo-400 absolute">{index + 1}</span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      {getDifferenceIcon(index)}
                    </div>
                  </div>
                  <p className="text-body-small text-medium-contrast">{item}</p>
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
