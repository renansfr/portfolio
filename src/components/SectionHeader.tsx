import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="w-12 h-1 bg-blue-600 rounded-full mr-4"></div>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeader;