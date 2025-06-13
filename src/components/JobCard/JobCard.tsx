// JobCard.tsx
import React from 'react';
import { Job } from '../../types/job'; // Assuming you have a Job type defined in types/job.ts


// Or, if you prefer to use the Job interface directly for props:
// type JobCardProps = Job;

const JobCard: React.FC<Job> = ({ organization, role }) => {
  return (
    <div className="h-20 h-fit bg-experience mb-3 w-9/10 lg:w-3/4  min-w-50 rounded-lg overflow-hidden">
      <div className="ml-8 p-3  flex items-center h-9/10">
        <h2 className="text-base font-bold mr-3">
          {organization}
        </h2>
        <h2 className="text-base">{role}</h2>
      </div>
      <div className="w-1/4 h-1 bg-blue-400 "></div>
    </div>
  );
};

export default JobCard;