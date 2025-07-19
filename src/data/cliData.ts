import { FileNode } from '../types/cli';

export const fileSystem: FileNode = {
  id: 'root',
  type: 'folder',
  name: 'C:\\Users\\Matthias Druhl',
  
  children: [
    {
      id: 'About Me',
      type: 'folder',
      name: 'About_Me',
      children: [
        { id: "resume", type: "file", name: "resume.pdf", content: "/Matthias_Druhl_Resume.pdf" },
        { id: "about_me readme", type: "file", name: "AboutMe.py", content: "/pyFiles/AboutMe/AboutMe.py" },
      ]
    },

    {
      id: 'Base Classes',
      type: 'folder',
      name: 'Base_Classes',
      children: [
        { id: 'Project Base Class', type: 'file', name: 'Project.py', content: '/pyFiles/Projects/Project.py' },
        { id: 'Education Base Class', type: 'file', name: 'Education.py', content: '/pyFiles/Education/Education.py' },
        { id: 'Experience Base Class', type: 'file', name: 'Experience.py', content: '/pyFiles/Experience/Experience.py' },
      ]
    },
    
    {
      id: 'Education',
      type: 'folder',
      name: 'Education',
      children: [
        {
          id: "Georgia Tech",
          type: "folder",
          status: "In-progress",
          name: "Georgia Tech - B.S. Computer Science",
          children: [
            { id: 'Georgia Tech Readme', type: 'file', name: 'GeorgiaTech.py', content: '/pyFiles/Education/GeorgiaTech.py' },
          ]
        },
        {
          id: "Northside High School",
          type: "folder",
          status: "Complete",
          name: "Northside High School",
          children: [
            { id: 'Northside High School Readme', type: 'file', name: 'Northside.py', content: '/pyFiles/Education/Northside.py' },
          ]
        },
      ],
    },
  
    {
      id: 'Experience',
      type: 'folder',
      name: 'Experience',
      children: [
        {
          id: "EDDGE - United States Air Force",
          type: "folder",
          status: "In-progress",
          name: "EDDGE - United States Air Force",
          children: [
            { id: 'EDDGE Readme', type: 'file', name: 'EddgeRAFB.py', content: '/pyFiles/Experience/EddgeRAFB.py' },
          ]
        },
        {
          id: "402 SWEG - United States Air Force",
          type: "folder",
          status: "In-progress",
          name: "402 SWEG - United States Air Force",
          children: [
            { id: '402 SWEG Readme', type: 'file', name: '402SWEG.py', content: '/pyFiles/Experience/402SWEG.py' },
          ]
        },
        {
          id: "Georgia Tech Research Institute",
          type: "folder",
          status: "In-progress",
          name: "Georgia Tech Research Institute",
          children: [
            { id: 'Georgia Tech Research Institute Readme', type: 'file', name: 'GTRI.py', content: '/pyFiles/Experience/GTRI.py' },
          ]
        },
      ]
    },

    {
      id: 'Projects',
      type: 'folder',
      name: 'Projects',
      children: [
        { 
          id: 'UniLease',
          type: 'folder',
          status: 'In-Progress',
          name: 'UniLease - College Sublease App',
          children: [
            { id: 'unilease-readme', type: 'file', name: 'UniLease.py', content: '/pyFiles/Projects/UniLease.py' },
          ]
        },
        { 
          id: 'Qwyse Resume Generator',
          type: 'folder',
          status: 'Complete',
          name: 'Qwyse Resume Generator',
          children: [
            { id: 'resume-generator-readme', type: 'file', name: 'AIResume.py', content: '/pyFiles/Projects/AIResume.py' },
          ]
        },
        {
          id: "Buzzify",
          type: 'folder',
          status: "Complete",
          name: "Buzzify - Spotify Wrapped Generator",
          children: [
            { id: 'buzzify-readme', type: 'file', name: 'Buzzify.py', content: '/pyFiles/Projects/Buzzify.py' },
          ]
        },
        {
          id: "College Planning App",
          type: 'folder',
          status: "Complete",
          name: "College Planning App",
          children: [
            { id: 'college-planning-app-readme', type: 'file', name: 'CollegePlan.py', content: '/pyFiles/Projects/CollegePlan.py' },
          ]
        },
        {
          id: "AppliTrack",
          type: 'folder',
          status: "Complete",
          name: "AppliTrack - Automated Job Application Tracker",
          children: [
            { id: 'applitrack-readme', type: 'file', name: 'AppliTrack.py', content: '/pyFiles/Projects/AppliTrack.py' },
          ]
        },
      ],
    },
  ]
};