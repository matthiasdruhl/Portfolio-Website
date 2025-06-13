import React from 'react';

import { ProjectItem } from '../../types/project'; // Using the centralized type

interface ProjectLinkProps {
  project: ProjectItem;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ project }) => {
  return (
    <a href={project.link}>
      <div className="flex w-fit items-center text-base space-x-2 mb-1 hover:text-orange-300">
        <p className="text-center text-blue-400">{project.name}: </p>
        <p className="text-center">{project.skills}</p>
      </div>
    </a>
  );
};

export default ProjectLink;