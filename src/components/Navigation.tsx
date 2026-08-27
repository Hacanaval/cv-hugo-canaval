
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
    <nav className={cn("mx-auto", className)} aria-label="Primary">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`focus-ring relative px-2.5 py-2 text-[11px] font-medium transition-colors lg:px-3 ${
                activeSection === item.href.substring(1) 
                  ? "text-white after:absolute after:inset-x-2.5 after:bottom-0 after:h-px after:bg-[var(--signal)]"
                  : "text-white/55 hover:text-white"
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
