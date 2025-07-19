// JobCard.tsx
import React from 'react';
import { Job } from '../../types/job'; // Assuming you have a Job type defined in types/job.ts
import { useFiles } from '../../context/FileContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';


// Or, if you prefer to use the Job interface directly for props:
// type JobCardProps = Job;

const JobCard: React.FC<Job> = ({ organization, role, filePath }) => {
  const { addOpenFile } = useFiles();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (filePath) {
      addOpenFile({ 
        name: `${organization}.py`, 
        path: `${ROUTES.TEXT_VIEWER}?path=${encodeURIComponent(filePath)}` 
      });
      navigate(`${ROUTES.TEXT_VIEWER}?path=${encodeURIComponent(filePath)}`);
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="h-20 h-fit bg-experience mb-3 w-full lg:w-3/4 min-w-50 rounded-lg overflow-hidden shadow-md hover:bg-gray-700 transition-colors text-left"
    >
      <div className="ml-8 p-3 flex items-center h-9/10">
        <h2 className="text-base font-bold mr-3">
          {organization}
        </h2>
        <h2 className="text-sm">{role}</h2>
      </div>
      <div className="w-1/4 h-1 bg-blue-400"></div>
    </button>
  );
};

export default JobCard;