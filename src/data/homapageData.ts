// src/data/homepageData.ts
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { ProjectItem } from '../types/project';
import { SocialLinkItem } from '../types/social';
import { Job } from '../types/job';

export const projectsData: ProjectItem[] = [
  { 
    name: 'UniLease', 
    skills: 'GoLang, AWS, React, Tailwind CSS, Docker, MongoDB, Redis', 
    link: '/text-viewer?path=/txtFIles/Projects/UniLease.txt'
  },
  { 
    name: 'Qwyse Resume Generator', 
    skills: 'React, Typescript, Azure Ai Studio, SQL, Node.js', 
    link: '/text-viewer?path=/txtFIles/Projects/AIResume.txt'
  },
  { 
    name: 'Buzzify', 
    skills: 'Spotify API, Kotlin, Android Studio, Java, Firebase', 
    link: '/text-viewer?path=/txtFIles/Projects/Buzzify.txt'
  },

  { 
    name: 'College Planning App', 
    skills: 'Kotlin, Android Studio, Java, Firebase', 
    link: '/text-viewer?path=/txtFIles/Projects/CollegePlan.txt'
  },
  
];

export const jobsData: Job[] = [
  { 
    organization: 'EDDGE - United States Air Force', 
    role: 'Software Engineering Intern',
    filePath: '/txtFIles/Experience/EddgeRAFB.txt'
  },
  { 
    organization: '402 SWEG - United States Air Force', 
    role: 'Software Engineering Intern',
    filePath: '/txtFIles/Experience/402SwegRAFB.txt'
  },
  { 
    organization: 'Georgia Tech Research Institute', 
    role: 'Student Intern',
    filePath: '/txtFIles/Experience/GTRI.txt'
  },
  // Add more jobs here
];

export const socialLinksData: SocialLinkItem[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/matthias-druhl', icon: FaLinkedin },
  { name: 'GitHub', url: 'https://github.com/matthiasdruhl/', icon: FaGithub },
  { name: 'Instagram', url: 'https://www.instagram.com/matthias_druhl/', icon: FaInstagram },
  { name: 'Email', url: 'mailto:matthiasdruhl@gmail.com', icon: FaEnvelope },
];