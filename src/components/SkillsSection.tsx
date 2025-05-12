import React from 'react';
import { Code, HeartHandshake } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SkillsSection = () => {
  const hardSkills = [
    "JavaScript", "Vue.js", "React.js", "Node.js", "Ruby on Rails",
    "React Native", "PostgreSQL", "MySQL", "SQL Server", 
    "AWS Services", "Azure DevOps", "Nest.js", "MongoDB"
  ];

  const softSkills = [
    "Adaptability", "Creativity", "Empathy", "Teamwork",
    "Communication", "Leadership", "Approachability"
  ];

  const projectManagementTools = [
    'Git', 'JIRA', 'Agile', 'Scrum', 'Git Lab', 
    'GitHub', 'Docker', 'CI/CD', 'Kubernetes', 'Azure DevOps'
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl">
      <SectionHeader title="Skills" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <SkillCategory 
          icon={<Code className="text-blue-600" size={24} />}
          title="Hard Skills"
          skills={hardSkills}
          bgGradient="from-blue-50 to-blue-100"
          accentColor="bg-blue-500"
          hoverColor="hover:bg-blue-600"
          textColor="text-blue-700"
        />
        
        <SkillCategory 
          icon={<HeartHandshake className="text-green-600" size={24} />}
          title="Soft Skills"
          skills={softSkills}
          bgGradient="from-green-50 to-green-100"
          accentColor="bg-green-500"
          hoverColor="hover:bg-green-600"
          textColor="text-green-700"
        />
      </div>
      
      <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Project Management & Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4">
          {projectManagementTools.map((tool) => (
            <div key={tool} className="flex items-center group">
              <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-all duration-300 mr-2"></div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory: React.FC<{
  icon: React.ReactNode;
  title: string;
  skills: string[];
  bgGradient: string;
  accentColor: string;
  hoverColor: string;
  textColor: string;
}> = ({ 
  icon, 
  title, 
  skills,
  bgGradient,
  accentColor,
  hoverColor,
  textColor
}) => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className={`bg-gradient-to-br ${bgGradient} p-5 rounded-xl`}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <SkillBadge 
              key={skill} 
              skill={skill} 
              accentColor={accentColor}
              hoverColor={hoverColor}
              textColor={textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SkillBadgeProps {
  skill: string;
  accentColor: string;
  hoverColor: string;
  textColor: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, accentColor, hoverColor, textColor }) => {
  return (
    <div className={`${accentColor} ${hoverColor} text-white p-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center text-center h-full`}>
      <span className="font-medium">{skill}</span>
    </div>
  );
};

export default SkillsSection;