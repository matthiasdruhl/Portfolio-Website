// src/components/sections/ProjectsSection.tsx
import React from 'react';
import ProjectLink from '../ProjectLink/ProjectLink';
import { ProjectItem } from '../../types/project'; // Using the centralized type
import MoreLink from '../common/MoreLink'; // New common component

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="gap-4 text-lg text-gray-200 mt-5">
      <h1 className="text-xl mb-2">Projects:</h1>
      {projects.map((project, index) => (
        <ProjectLink key={index} project={project} />
      ))}
      <MoreLink to="/more-projects" text="More..." />
    </div>
  );
};

export default ProjectsSection;