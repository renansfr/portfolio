import React from 'react';
import { BookOpen, Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface EducationCardProps {
  title: string;
  items: string[];
  colorClass: string;
}

const EducationSection = () => {
  const courses = [
    'Computer Architecture', 
    'Algorithms and Data Structures', 
    'Embedded Systems', 
    'Database Systems', 
    'Web Development', 
    'IoT Technologies',
    'Digital Signal Processing',
    'Operating Systems'
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl">
      <SectionHeader title="Education" />
      
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Computer Engineering</h3>
            <p className="text-blue-100">Federal University of Santa Catarina</p>
            <div className="mt-4 flex items-center">
              <Calendar size={16} className="mr-2 text-blue-200" />
              <p className="text-blue-100">2018-2022</p>
            </div>
            <div className="mt-2 flex items-center">
              <MapPin size={16} className="mr-2 text-blue-200" />
              <p className="text-blue-100">Araranguá, SC</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h4 className="font-semibold text-xl text-blue-800 mb-4">Program Highlights</h4>
            <p className="text-gray-700 mb-6">
              Comprehensive curriculum covering both hardware and software aspects of computer engineering, with a focus on practical applications and cutting-edge technologies.
            </p>
            
            <h4 className="font-semibold text-blue-800 mb-3">Relevant Coursework:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {courses.map((course) => (
                <div key={course} className="flex items-center">
                  <ArrowRight className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{course}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <EducationCard 
              title="Research Projects"
              items={[
                "Automated attendance system using RFID technology",
                "IoT-based environmental monitoring systems"
              ]}
              colorClass="bg-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationCard: React.FC<EducationCardProps> = ({ title, items, colorClass }) => {
  return (
    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-gray-800 mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`w-2 h-2 ${colorClass} rounded-full mt-2 mr-2 flex-shrink-0`}></span>
            <span className="text-gray-700 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationSection;