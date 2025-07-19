// src/pages/Homepage.tsx
import ".././index.css"; // Global styles

import React from "react";

// Import data
import { projectsData, jobsData, socialLinksData } from '../data/homepageData';

// Import Section Components
import SocialsSection from '../components/sections/SocialsSections';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';

const Homepage: React.FC = () => {
  return (
    // Outer container: Ensure it allows content to grow vertically
    <div className="min-h-[calc(100vh-2rem)] w-full bg-background text-white flex flex-col">

      <div className="sm:h-[25vh] w-full flex flex-col sm:flex-row">
        <div className="h-[5vh] sm:w-3/20"> </div>
        <div className="w-full sm:w-17/20 flex flex-col justify-end p-4 sm:p-0">
          <h1 className="text-3xl text-gray-200 font-sans">Hey, I'm Matthias Druhl</h1>
          <h2 className="text-xl text-gray-400 mt-1">Computer Scientist</h2>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row flex-grow px-4 sm:px-0">
        <div className="w-full sm:w-1/2 flex flex-col text-white">
          <div className="w-full sm:w-7/10 mx-auto sm:mr-0 py-4 sm:py-4">
            <SocialsSection socialLinks={socialLinksData} />
            <ProjectsSection projects={projectsData} />
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col text-white pt-4">
          <div className="w-full sm:w-9/10 mx-auto sm:ml-0">
            <ExperienceSection jobs={jobsData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;


