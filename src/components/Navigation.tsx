
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  activeSection?: string;
  onNavClick?: (href: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ className, activeSection = "home", onNavClick }) => {
  const { language } = useLanguage();
  const t = translations[language];

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={cn("mx-auto", className)}>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.href.substring(1) 
                  ? "text-indigo-400 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-indigo-500"
                  : "text-gray-300 hover:text-indigo-400"
              }`}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
