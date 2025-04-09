
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
  const { language } = useLanguage();
  const t = translations[language];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
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
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-400">DS</div>

        <Navigation className="hidden md:flex" />

        <div className="flex items-center gap-3">
          <LanguageSelector />
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-gray-700 bg-gray-900/50">
                  <Menu className="text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col pt-16 bg-gray-900 border-gray-800">
                <nav>
                  <ul className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-lg text-gray-300 hover:text-indigo-400 font-medium transition duration-300 block py-2"
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
      </div>
    </header>
  );
};

export default Header;
