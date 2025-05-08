import React from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface ContactMethodProps {
  method: {
    icon: JSX.Element;
    label: string;
    value: string;
    href: string | null;
  };
}

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-white" size={20} />,
      label: "Email",
      value: "renan.s.frr@gmail.com",
      href: "mailto:renan.s.frr@gmail.com"
    },
    {
      icon: <Phone className="text-white" size={20} />,
      label: "Phone",
      value: "+55 (48) 99672-9400",
      href: "tel:+5548996729400"
    },
    {
      icon: <Linkedin className="text-white" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/renansfrr",
      href: "https://www.linkedin.com/in/renansfrr/"
    },
    {
      icon: <MapPin className="text-white" size={20} />,
      label: "Location",
      value: "Curitiba, Paraná, Brazil",
      href: "https://maps.google.com/?q=Curitiba,Paraná,Brazil"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg transition-all duration-500 transform hover:shadow-xl overflow-hidden max-w-3xl mx-auto">
      <div className="p-8 md:p-10 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-500 opacity-20"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-blue-400 opacity-10"></div>
        
        <div className="relative z-10">
          <SectionHeader title="Get In Touch" />

          <p className="mb-8 text-blue-100 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision. Let's connect!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {contactMethods.map((method, index) => (
              <ContactMethod key={index} method={method} />
            ))}
          </div>

          <div className="pt-6 border-t border-blue-500 border-opacity-40">
            <p className="text-sm text-blue-100 mb-4">Connect with me</p>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://www.linkedin.com/in/renansfrr/"
                icon={<Linkedin size={18} />}
                label="LinkedIn"
              />
              <SocialIcon 
                href="https://github.com/renansfr" 
                icon={<Github size={18} />}
                label="GitHub"
              />
              <SocialIcon
                href="mailto:renan.s.frr@gmail.com"
                icon={<Mail size={18} />}
                label="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactMethod = ({ method }: ContactMethodProps) => {
  const { icon, label, value, href } = method;

  return (
    <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
      <div className="w-10 h-10 bg-blue-500 bg-opacity-30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-opacity-50 transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-blue-200 mb-1">{label}</p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : ""}
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors font-medium flex items-center"
          >
            {value}
          </a>
        ) : (
          <p className="text-white font-medium">{value}</p>
        )}
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : ""}
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-40 hover:-translate-y-1 transition-all duration-300 tooltip"
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
};

export default ContactSection;