
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-24 dark-section reveal-section">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">{t.aboutTitle}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-indigo-400 to-indigo-600 p-1">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/hugo-profile-2024.png"
                  alt="Hugo Canaval" 
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="text-4xl">HC</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="md:w-2/3">
            <Card className="dark-card border-gray-800">
              <CardContent className="p-6">
                <div className="text-lg leading-relaxed text-gray-300 space-y-4">
                  <div dangerouslySetInnerHTML={{ __html: t.aboutHtml }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="section-subheading text-center mb-10">{t.differenceTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="glass-card hover:border-indigo-700 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <CardContent className="p-6 flex">
                  <div className="h-10 w-10 min-w-10 rounded-full bg-indigo-900/60 flex items-center justify-center text-indigo-400 mr-4 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{item}</p>
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
