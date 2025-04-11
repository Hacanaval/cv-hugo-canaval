
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ObjectiveSection from "@/components/sections/ObjectiveSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    // Fade-in effect for sections on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('.reveal-section').forEach(section => {
      observer.observe(section);
    });

    // Add hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.add('hover:shadow-lg', 'hover:border-indigo-500', 'transition-all', 'duration-300', 'hover:scale-[1.02]');
    });

    // Add hover effects for education timeline items
    document.querySelectorAll('.timeline-item .dark-card').forEach(card => {
      card.classList.add('hover:shadow-lg', 'hover:border-indigo-500', 'transition-all', 'duration-300', 'hover:scale-[1.02]');
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CoursesSection />
        <ObjectiveSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
