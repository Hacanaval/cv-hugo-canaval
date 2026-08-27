
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
  const [mobileOpen, setMobileOpen] = useState(false);
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
        // Ensure bottom sections like "contact" are properly activated
        // Adjust threshold for better contact section detection
        const threshold = i === sections.length - 1 ? 100 : 200;
        if (window.scrollY >= sectionTop - threshold) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const initialCheck = window.requestAnimationFrame(handleScroll);
    return () => {
      window.cancelAnimationFrame(initialCheck);
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
      // Set active section when clicking directly
      setActiveSection(href.substring(1));
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(21,22,19,0.88)] py-2 backdrop-blur-xl"
          : "py-4 sm:py-5"
      }`}
    >
      <div className="section-frame flex items-center justify-between">
        <div className="flex items-center">
          <LanguageSelector />
        </div>

        <Navigation className="hidden md:flex" activeSection={activeSection} onNavClick={handleNavClick} />
        
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-none border-white/20 bg-black/10 text-white hover:bg-white/10">
                <Menu />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col border-white/10 bg-[var(--ink)] pt-16 text-white">
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`block border-b border-white/10 px-1 py-4 text-lg font-medium transition-colors ${
                          activeSection === item.href.substring(1) 
                            ? "text-[var(--signal)]"
                            : "text-white/65 hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                          setMobileOpen(false);
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
