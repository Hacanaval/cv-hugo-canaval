
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { label: t.home, href: "#home" },
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.projects, href: "#projects" },
    { label: t.education, href: "#education" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav className={`hidden md:flex justify-center ${className}`}>
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-gray-300 hover:text-indigo-400 font-medium transition duration-300"
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
