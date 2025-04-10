
import React, { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Navigation from "./Navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language } = useLanguage();
  const t = translations[language];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Calculate current section based on scroll position
    const sections = ["home", "about", "skills", "projects", "education", "courses", "objective", "contact"];
    
    // Find the current active section
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) { // 200px offset for better UX
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: t.home, href: "#home" },
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.projects, href: "#projects" },
    { label: t.education, href: "#education" },
    { label: t.coursesTitle, href: "#courses" },
    { label: t.objective, href: "#objective" },
    { label: t.contact, href: "#contact" },
  ];
  
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="md:flex md:items-center">
          <LanguageSelector />
        </div>

        <Navigation className="hidden md:flex" activeSection={activeSection} onNavClick={handleNavClick} />
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-gray-700 bg-gray-900/50">
                <Menu className="text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col pt-16 bg-gray-900 border-gray-800">
              <div className="flex overflow-x-auto py-4 mb-6 gap-2 nav-swipe">
                {navItems.map((item) => (
                  <div 
                    key={item.href}
                    className={`px-4 py-2 whitespace-nowrap ${
                      activeSection === item.href.substring(1) 
                        ? "text-indigo-400 font-medium"
                        : "text-gray-300"
                    }`}
                    onClick={() => {
                      handleNavClick(item.href);
                      // Close sheet on smaller screens
                      document.body.click();
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`text-lg font-medium transition duration-300 block py-2 ${
                          activeSection === item.href.substring(1) 
                            ? "text-indigo-400"
                            : "text-gray-300 hover:text-indigo-400"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                          // Close sheet on nav click
                          document.body.click();
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
