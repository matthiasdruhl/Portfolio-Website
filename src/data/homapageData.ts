// src/data/homepageData.ts
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { ProjectItem } from '../types/project'; // Adjust path
import { SocialLinkItem } from '../types/social'; // Adjust path
import { Job } from '../types/job'; // Adjust path if you moved Job interface

export const projectsData: ProjectItem[] = [
  { name: 'Project 1', skills: 'Project Skills Used', link: 'https://example.com/project1' },
  { name: 'Project 2', skills: 'Skills Used', link: 'https://example.com/project2' },
  { name: 'Project 3', skills: 'Skills Used', link: 'https://example.com/project3' },
  // Add more projects here
];

export const jobsData: Job[] = [
  { organization: 'United States Air Force', role: 'EDDGE Software Engineering Intern' },
  { organization: 'United States Air Force', role: '402 SWEG Software Engineering Intern' },
  { organization: 'Georgia Tech Research Institute', role: 'Student Intern' },
  // Add more jobs here
];

export const socialLinksData: SocialLinkItem[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/yourprofile', icon: FaLinkedin },
  { name: 'GitHub', url: 'https://github.com/yourprofile', icon: FaGithub },
  { name: 'Instagram', url: 'https://instagram.com/yourprofile', icon: FaInstagram },
  { name: 'Email', url: 'mailto:youremail@example.com', icon: FaEnvelope },
];