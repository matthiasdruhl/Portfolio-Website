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
        { id: "about_me readme", type: "file", name: "About_Me.txt", content: "/txtFIles/About/AboutMe.txt" },
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
            { id: 'Georgia Tech Readme', type: 'file', name: 'Georgia_Tech.txt', content: '/txtFIles/Education/GeorgiaTech.txt' },
          ]
        },
        {
          id: "Northside High School",
          type: "folder",
          status: "Complete",
          name: "Northside High School",
          children: [
            { id: 'Northside High School Readme', type: 'file', name: 'Northside.txt', content: '/txtFIles/Education/Northside.txt' },
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
            { id: 'EDDGE Readme', type: 'file', name: 'EDDGE_RAFB.txt', content: '/txtFIles/Experience/EddgeRAFB.txt' },
          ]
        },
        {
          id: "402 SWEG - United States Air Force",
          type: "folder",
          status: "In-progress",
          name: "402 SWEG - United States Air Force",
          children: [
            { id: '402 SWEG Readme', type: 'file', name: '402_SWEG.txt', content: '/txtFIles/Experience/402SwegRAFB.txt' },
          ]
        },
        {
          id: "Georgia Tech Research Institute",
          type: "folder",
          status: "In-progress",
          name: "Georgia Tech Research Institute",
          children: [
            { id: 'Georgia Tech Research Institute Readme', type: 'file', name: 'GTRI.txt', content: '/txtFIles/Experience/GTRI.txt' },
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
            { id: 'unilease-readme', type: 'file', name: 'UniLease.txt', content: '/txtFIles/Projects/UniLease.txt' },
          ]
        },
        { 
          id: 'Qwyse Resume Generator',
          type: 'folder',
          status: 'Complete',
          name: 'Qwyse Resume Generator',
          children: [
            { id: 'resume-generator-readme', type: 'file', name: 'Qwyse_Resume_Generator.txt', content: '/txtFIles/Projects/AIResume.txt' },
          ]
        },
        {
          id: "Buzzify",
          type: 'folder',
          status: "Complete",
          name: "Buzzify - Spotify Wrapped Generator",
          children: [
            { id: 'buzzify-readme', type: 'file', name: 'Buzzify.txt', content: '/txtFIles/Projects/Buzzify.txt' },
          ]
        },
        {
          id: "College Planning App",
          type: 'folder',
          status: "Complete",
          name: "College Planning App",
          children: [
            { id: 'college-planning-app-readme', type: 'file', name: 'College_Planning_App.txt', content: '/txtFIles/Projects/CollegePlan.txt' },
          ]
        },
      ],
    },
  ]
};