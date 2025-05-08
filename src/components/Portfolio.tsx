import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import Navigation from './Navigation';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <HeroSection />

      <Navigation 
        activeSection={activeSection} 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      <main className="container mx-auto px-6 py-12">
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'experience' && <ExperienceSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'education' && <EducationSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;