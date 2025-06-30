import React from 'react';
import { ProjectItem } from '../../types/project';
import { useFiles } from '../../context/FileContext';
import { useNavigate } from 'react-router-dom';

interface ProjectLinkProps {
  project: ProjectItem;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ project }) => {
  const { addOpenFile } = useFiles();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add the file to open tabs
    addOpenFile({ 
      name: project.name, 
      path: project.link 
    });
    // Navigate to the file
    navigate(project.link);
  };

  return (
    <a href={project.link} onClick={handleClick} className="w-fit">
      <div className="flex items-start text-sm space-x-2 mb-1 hover:text-orange-300">
        <p className="text-blue-400">{project.name}: </p>
        <p>{project.skills}</p>
      </div>
    </a>
  );
};

export default ProjectLink;