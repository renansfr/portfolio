import React from 'react';
import { Code, Cpu, ChevronRight, HeartHandshake } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SkillsSection = () => {
  const programmingSkills = [
    { name: "JavaScript", level: 95 },
    { name: "Vue.js", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "React native", level: 75 },
    { name: "PostgreSQL", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "SQL Server", level: 80 },
    { name: "AWS services", level: 70 },
    { name: "Azure DevOps", level: 70 },
    { name: "Nest.js", level: 70 },
    { name: "MongoDB", level: 80 },
  ];

  const hardwareSkills = [
    { name: "Empathy", level: 95 },
    { name: "Adaptability", level: 95 },
    { name: "Teamwork ", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Approachability", level: 90 },
  ];

  const iotTechnologies = ['Circuit Design', 'Sensors', 'Actuators', 'MQTT', 'Embedded C', 'PlatformIO', 'I2C', 'SPI'];
  const projectManagementTools = ['Git', 'JIRA', 'Agile', 'Scrum', 'Git lab', 'Git hub', 'Docker', 'CI/CD', 'Kubernetes', 'Azure DevOps'];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl">
      <SectionHeader title="Skills" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <SkillCategory 
          icon={<Code className="text-blue-600" size={24} />}
          title="Hard skills"
          skills={programmingSkills}
          techTitle="Web Technologies"
          techBg="bg-blue-50"
          techTextColor="text-blue-800"
          techBorderColor="border-blue-100"
          techPillColor="text-blue-600"
          barColorFrom="from-blue-400"
          barColorTo="to-blue-600"
          percentColor="text-blue-600"
        />
        
        <SkillCategory 
          icon={<HeartHandshake className="text-green-600" size={24} />}
          title="Soft skills"
          skills={hardwareSkills}
          techTitle="IoT & Robotics"
          techBg="bg-green-50"
          techTextColor="text-green-800"
          techBorderColor="border-green-100"
          techPillColor="text-green-600"
          barColorFrom="from-green-400"
          barColorTo="to-green-600"
          percentColor="text-green-600"
        />
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Project Management & Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projectManagementTools.map((tool) => (
            <div key={tool} className="flex items-center">
              <ChevronRight size={16} className="text-blue-500 mr-2" />
              <span className="text-gray-700">{tool}</span>
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
  skills: { name: string; level: number }[];
  techTitle: string;
  techBg: string;
  techTextColor: string;
  techBorderColor: string;
  techPillColor: string;
  barColorFrom: string;
  barColorTo: string;
  percentColor: string;
}> = ({ 
  icon, 
  title, 
  skills, 
  techTitle,
  techBg,
  techTextColor,
  techBorderColor,
  techPillColor,
  barColorFrom,
  barColorTo,
  percentColor
}) => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <SkillBar 
              skill={skill} 
              barColorFrom={barColorFrom}
              barColorTo={barColorTo}
              percentColor={percentColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillBar: React.FC<{
  skill: { name: string; level: number };
  barColorFrom: string;
  barColorTo: string;
  percentColor: string;
}> = ({ skill, barColorFrom, barColorTo, percentColor }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className={percentColor}>{skill.level}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${barColorFrom} ${barColorTo}`}
          style={{ width: `${skill.level}%`, transition: "width 1.5s ease-in-out" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillsSection;