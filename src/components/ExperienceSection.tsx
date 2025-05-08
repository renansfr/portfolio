import React from 'react';
import { Code, Stethoscope, Ship, BookOpen, Cpu, Zap, MapPin, Calendar } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Experience {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  icon: JSX.Element;
  iconBg: string;
}

const ExperienceSection = () => {
  const professionalExperiences = [
    {
      title: "Voyager",
      role: "Software Engineer",
      period: "Nov 2022 - Present",
      location: "Curitiba, PR",
      description: "Voyager is a maritime logistics solution. Working in the demurrage team, developing solutions to automate demurrage calculations. Full-stack software engineer working with Vue.js, Node.js, Python, MySQL, Gitlab and AWS services.",
      highlights: [
        "Led development of a system interpreting ship events from Statements of Facts (SOF) for automated demurrage calculations",
        "Spearheaded development of a tool for analyzing demurrage calculations and collaboration called negotiation cockpit",
        "Built first version of a low-code platform for maritime contract registration",
        "Contributed to bug fixes and developed reusable UI components across projects"
      ],
      icon: <Ship className="text-blue-600" />,
      iconBg: "bg-blue-100"
    },
    {
      title: "MedPrev",
      role: "Software Engineer",
      period: "Feb 2022 - Nov 2022",
      location: "Curitiba, PR",
      description: "Part of the team facilitating medical appointments and exams scheduling. Full-stack software engineer working with Vue.js, Node.js, Python, PostgreSQL and Azure services.",
      highlights: [
        "Led development of an assisted purchase system for exams/appointments",
        "Built first version of a user experience evaluation system",
        "Maintained core scheduling system components"
      ],
      icon: <Stethoscope className="text-green-600" />,
      iconBg: "bg-green-100"
    },
    {
      title: "Cargon",
      role: "Software Engineer",
      period: "Mar 2020 - Feb 2022",
      location: "Curitiba, PR",
      description: "Worked on document issuing system for delivery drivers. Full-stack software engineer using Node.js, React.js, MicrosoftSQLServer and Azure services.",
      highlights: [
        "Contributed to first version of issuing system, responsible for core components",
        "Led development of complementary CTE issuing system"
      ],
      icon: <Code className="text-purple-600" />,
      iconBg: "bg-purple-100"
    }
  ];

  const researchExperiences = [
    {
      title: "Automation and Mobile Robotics Laboratory",
      role: "Researcher",
      period: "Apr 2018 – Dec 2018",
      location: "UFSC",
      description: "Used ESP8266 microprocessor and RFID to automate attendance registration.",
      icon: <BookOpen className="text-yellow-600" />,
      iconBg: "bg-yellow-100"
    },
    {
      title: "Quantum Team",
      role: "Microprocessor Programmer",
      period: "Jul 2018 – Apr 2020",
      location: "UFSC",
      description: "Programmed robots using Arduino and ESP8266 for regional/national competitions.",
      icon: <Cpu className="text-red-600" />,
      iconBg: "bg-red-100"
    },
    {
      title: "Plus Energy",
      role: "Web System Developer",
      period: "Jul 2019 – Apr 2020",
      location: "UFSC",
      description: "Developed communication system between wind tower and control center, including web interface for data analysis.",
      icon: <Zap className="text-amber-600" />,
      iconBg: "bg-amber-100"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Professional Experience Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl">
        <SectionHeader title="Professional Experience" />
        
        <div className="relative border-l-2 border-blue-200 pl-8 ml-4">
          {professionalExperiences.map((exp, index) => (
            <ExperienceCard 
              key={`work-${index}`}
              experience={exp} 
              isLast={index === professionalExperiences.length - 1} 
            />
          ))}
        </div>
      </section>

      {/* Research Experience Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl">
        <SectionHeader title="Research Experience" />
        
        <div className="relative border-l-2 border-blue-200 pl-8 ml-4">
          {researchExperiences.map((exp, index) => (
            <ExperienceCard 
              key={`research-${index}`}
              experience={exp} 
              isLast={index === researchExperiences.length - 1}
              isResearch={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const ExperienceCard = ({ 
  experience, 
  isLast,
  isResearch = false
}: { 
  experience: Experience; 
  isLast: boolean;
  isResearch?: boolean;
}) => {
  const { title, role, period, location, description, highlights, icon, iconBg } = experience;
  
  return (
    <div className={`mb-12 ${isLast ? 'mb-0' : ''}`}>
      <div className="absolute w-12 h-12 -left-6 rounded-full flex items-center justify-center z-10 shadow-md" style={{ backgroundColor: 'white' }}>
        <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center mt-2 md:mt-0">
            <Calendar size={16} className="text-blue-500 mr-1" />
            <span className="text-gray-600 text-sm">{period}</span>
          </div>
        </div>
        
        <p className="text-blue-700 font-medium mb-1">{role}</p>
        
        <div className="flex items-center mb-4">
          <MapPin size={16} className="text-gray-500 mr-1" />
          <span className="text-gray-500 text-sm">{location}</span>
        </div>
        
        <p className="text-gray-700 mb-4">
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;