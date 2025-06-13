// src/pages/Homepage.tsx
import ".././index.css"; // Global styles

import React from "react";

// Import data
import { projectsData, jobsData, socialLinksData } from '../data/homapageData';

// Import Section Components
import SocialsSection from '../components/sections/SocialsSections';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';

const Homepage: React.FC = () => {
  return (
    // Outer container: Ensure it allows content to grow vertically
    <div className="min-h-[calc(100vh-3rem)] w-full bg-background text-white flex flex-col">

      {/* Header/Hero Section */}
      {/* Removed min-w-200 as it can cause horizontal scroll on very small screens */}
      {/* Added pb-8 for spacing below the hero section */}
      <div className="sm:h-[25vh] w-full flex flex-col sm:flex-row">
        <div className="h-[5vh] sm:w-3/20"> </div>
        <div className="w-full sm:w-17/20 flex flex-col justify-end p-4 sm:p-0">
          <h1 className="text-3xl text-gray-200 font-sans">Hey, I'm Matthias Druhl</h1>
          <h2 className="text-xl text-gray-400 mt-1">Computer Scientist</h2>
        </div>
      </div>

      {/* Main Content Sections - RESPONSIVE PART */}
      {/* Default to column layout on small screens (mobile), then row on medium screens and up */}
      {/* Added overall horizontal padding for content and space-x for horizontal spacing between desktop columns */}
      <div className="w-full flex flex-col sm:flex-row flex-grow px-4  sm:px-0">

        {/* Left Column (Socials & Projects) */}
        {/* Default to full width on mobile, then half width on medium screens and up */}
        {/* Added pt-4 for initial vertical spacing from the top of this content area */}
        <div className="w-full sm:w-1/2 flex flex-col text-white ">
          {/* Inner alignment for the content within the column */}
          {/* py-4 for vertical padding on mobile, py-8 for more vertical padding on desktop */}
          <div className="w-full sm:w-7/10 mx-auto sm:mr-0 py-4 sm:py-4">
            <SocialsSection socialLinks={socialLinksData} />
            <ProjectsSection projects={projectsData} />
          </div>
        </div>

        {/* Right Column (Experience) */}
        {/* Default to full width on mobile, then half width on medium screens and up */}
        {/* Added pt-4 for initial vertical spacing from the top of this content area */}
        <div className="w-full sm:w-1/2 flex flex-col text-white pt-4">
          {/* Inner alignment for the content within the column */}
          {/* py-4 for vertical padding on mobile, py-8 for more vertical padding on desktop */}
          <div className="sm-full ">
            <ExperienceSection jobs={jobsData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;


