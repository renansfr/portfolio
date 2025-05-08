import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold text-xl">RF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Renan Ferreira</h3>
                <p className="text-gray-400">Software Engineer</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialLink href="mailto:renan.s.frr@gmail.com" icon={<Mail size={20} />} />
              <SocialLink href="tel:+5548996729400" icon={<Phone size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/renansfrr/" icon={<Linkedin size={20} />} />
              <SocialLink href="https://github.com/renansfr" icon={<Github size={20} />} />
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Renan Ferreira. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target={href.startsWith('http') ? "_blank" : ""} 
      rel="noopener noreferrer" 
      className="text-gray-400 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;