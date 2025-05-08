import React from 'react';

interface NavigationProps {
  activeSection: string;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleNavClick: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isScrolled, mobileMenuOpen, setMobileMenuOpen, handleNavClick }) => {
  const navSections = ['about', 'experience', 'skills', 'education', 'contact'];

  return (
    <nav className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-all duration-300`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4 md:hidden">
          <div className="font-bold text-blue-600">RF</div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`${mobileMenuOpen ? 'max-h-64' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-300`}>
          <div className="flex flex-col py-2">
            {navSections.map((section) => (
              <button
                key={section}
                className={`py-3 px-4 text-left focus:outline-none ${activeSection === section ? 'text-blue-600 font-medium bg-blue-50 rounded-lg' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex">
          {navSections.map((section) => (
            <li key={section}>
              <button 
                className={`py-5 px-6 focus:outline-none transition-all duration-200 ${
                  activeSection === section 
                    ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-200'
                }`}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;