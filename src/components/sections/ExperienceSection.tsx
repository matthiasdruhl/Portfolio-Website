// src/components/sections/ExperienceSection.tsx
import React from 'react';
import JobCard from '../JobCard/JobCard'; // Importing the JobCard component
import { Job } from '../../types/job'; // Using the centralized type
import { useFiles } from '../../context/FileContext';
import { useNavigate } from 'react-router-dom';

interface ExperienceSectionProps {
  jobs: Job[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ jobs }) => {
  const { addOpenFile } = useFiles();
  const navigate = useNavigate();

  const handleGeorgiaTechClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addOpenFile({ 
      name: 'Georgia_Tech.txt', 
      path: '/text-viewer?path=/txtFIles/Education/GeorgiaTech.txt'
    });
    navigate('/text-viewer?path=/txtFIles/Education/GeorgiaTech.txt');
  };

  return (
    <div className="w-full px-4 sm:px-0">
      <h1 className="text-xl mb-3">My Journey</h1>
      {/* Education/Degree card - now clickable */}
      <button 
        onClick={handleGeorgiaTechClick}
        className="h-20 h-fit bg-experience mb-3 w-full lg:w-3/4 min-w-50 rounded-lg overflow-hidden shadow-md hover:bg-gray-700 transition-colors text-left"
      >
        <div className="ml-8 p-3 flex items-center h-9/10">
          <h2 className="text-base font-bold mr-3">
            Georgia Institute of Technology
          </h2>
          <h2 className="text-sm">
            B.S. Computer Science - Information Infonetworks/Intelligence Threads
          </h2>
        </div>
        <div className="w-1/4 h-1 bg-blue-400"></div>
      </button>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          organization={job.organization}
          role={job.role}
          filePath={job.filePath}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;