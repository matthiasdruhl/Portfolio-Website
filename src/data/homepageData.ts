// src/data/homepageData.ts
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { ProjectItem } from '../types/project';
import { SocialLinkItem } from '../types/social';
import { Job } from '../types/job';

export const projectsData: ProjectItem[] = [
  { 
    name: 'UniLease', 
    skills: 'Student Sub Leasing Marketplace', 
    link: '/text-viewer?path=/pyFiles/Projects/UniLease.py'
  },
  { 
    name: 'AppliTrackr', 
    skills: 'Automated Job Application Tracker', 
    link: '/text-viewer?path=/pyFiles/Projects/AppliTrackr.py'
  },
  { 
    name: 'Qwyse Resume Assistant', 
    skills: 'Ai Powered Resume Helper', 
    link: '/text-viewer?path=/pyFiles/Projects/AIResume.py'
  },
  { 
    name: 'Buzzify', 
    skills: 'Spotify Wrapped Generator', 
    link: '/text-viewer?path=/pyFiles/Projects/Buzzify.py'
  },

  { 
    name: 'College Planning App', 
    skills: 'Plan out your Classes', 
    link: '/text-viewer?path=/pyFiles/Projects/CollegePlan.py'
  },
  
  
];

export const jobsData: Job[] = [
  { 
    organization: 'EDDGE - United States Air Force', 
    role: 'Software Engineering Intern',
    filePath: '/pyFiles/Experience/EddgeRAFB.py'
  },
  { 
    organization: '402 SWEG - United States Air Force', 
    role: 'Software Engineering Intern',
    filePath: '/pyFiles/Experience/402SWEG.py'
  },
  { 
    organization: 'Georgia Tech Research Institute', 
    role: 'Student Intern',
    filePath: '/pyFiles/Experience/GTRI.py'
  },
  // Add more jobs here
];

export const socialLinksData: SocialLinkItem[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/matthias-druhl', icon: FaLinkedin },
  { name: 'GitHub', url: 'https://github.com/matthiasdruhl/', icon: FaGithub },
  { name: 'Instagram', url: 'https://www.instagram.com/matthias_druhl/', icon: FaInstagram },
  { name: 'Email', url: 'mailto:matthiasdruhl@gmail.com', icon: FaEnvelope },
];