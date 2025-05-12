import React from "react";
import {
  Code,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import profileImg2 from "../public/assets/profileImg2.jpg";

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl">
      <SectionHeader title="About Me" />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <div className="relative mx-auto w-48">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 blur"></div>
            <div className="bg-white p-3 rounded-xl relative">
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg w-40 h-40 mx-auto flex items-center justify-center text-blue-400">
                <img
                  src={profileImg2}
                  alt="Renan Ferreira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-center space-x-5">
              <a
                href="mailto:renan.s.frr@gmail.com"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={22} />
              </a>
              <a
                href="tel:+5541987118137"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Phone size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/renansfrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/renansfr"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={22} />
              </a>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-blue-500" />
                <span>Curitiba, Paraná, Brazil</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-blue-500" />
                <span>renan.s.frr@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-blue-500" />
                <span>+55 (41) 98711-8137</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            Computer Engineer graduated from the Federal University of Santa
            Catarina, currently working as a fullstack software engineer. I
            design, develop, and maintain scalable and reliable frontend and
            backend systems. My contributions have enhanced performance,
            security, and user experience across multiple projects. Passionate
            about continuous learning, I actively expand my skill set with new
            languages, tech stacks, and architectural patterns
          </p>

          <h3 className="text-xl font-semibold mb-4 text-blue-800">
            Areas of Expertise
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Javascript",
              "Node.js",
              "Vue.js",
              "React.js",
              "React native",
              "Ruby on rails",
              "PostgreSQL",
              "MySQL",
              "SQL Server",
              "AWS services",
              "Azure DevOps",
              "Nest.js",
              "MongoDB"
            ].map((skill) => (
              <div key={skill} className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <ExpertiseCard
              icon={<Code className="text-blue-600 mr-2" size={20} />}
              title="Software"
              description="Full-stack software engineer using modern languages and frameworks"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ icon, title, description }: ExpertiseCardProps) => {
  return (
    <div className="p-5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
      <div className="flex items-center mb-3">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default AboutSection;
