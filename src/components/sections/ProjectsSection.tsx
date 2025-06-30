// src/components/sections/ProjectsSection.tsx
import React from 'react';
import ProjectLink from '../ProjectLink/ProjectLink';
import { ProjectItem } from '../../types/project'; // Using the centralized type


interface ProjectsSectionProps {
  projects: ProjectItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="items-start gap-2 text-sm text-gray-200 mt-6">
      <h1 className="text-xl">Projects</h1>
      <div className="items-start mt-2 text-left text-xs flex flex-col">
        {projects.map((project, index) => (
          <ProjectLink key={index} project={project} />
        ))}
        
      </div>
    </div>
  );
};

export default ProjectsSection;