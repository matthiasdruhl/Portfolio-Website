// src/components/sections/ExperienceSection.tsx
import React from 'react';
import JobCard from '../JobCard/JobCard'; // Importing the JobCard component
import { Job } from '../../types/job'; // Using the centralized type
import MoreLink from '../common/MoreLink'; // New common component

interface ExperienceSectionProps {
  jobs: Job[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ jobs }) => {
  return (
    <div>
      <h1 className="text-xl mb-3">My Journey</h1>
      {/* Education/Degree card - kept static for now, or make it a component too */}
      <div className="h-20 h-fit w-9/10 text-gray-200 lg:w-3/4 mb-5 bg-experience min-w-50 rounded-lg overflow-hidden">
        <div className="ml-8 p-3 flex flex-col justify-center h-9/10">
          <h2 className="font-bold">
            Georgia Institute of Technology
          </h2>
          <h2 className="">
            B.S. Computer Science - Information Infonetworks/Intelligence Threads
          </h2>
        </div>
        <div className="w-1/2 h-1 bg-blue-400 rounded-bl-sm"></div>
      </div>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          organization={job.organization}
          role={job.role}
        />
      ))}
      <MoreLink to="/more-experience" text="More..." /> {/* Adjusted link */}
    </div>
  );
};

export default ExperienceSection;