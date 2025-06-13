import { FileNode } from '../types/cli';

export const fileSystem: FileNode = {
  id: 'root',
  type: 'folder',
  name: 'C:\\Users\\matth',
  date: "null",
  children: [
    {
      id: 'projects',
      date: 'null',
      type: 'folder',
      name: 'Projects',
      children: [
        { id: 'project-a', date: 'null', type: 'folder', name: 'Project-A', children: [
            { id: 'readme-a', date: 'null', type: 'file', name: 'README.md', content: 'This is the README for Project A.', date: 'null'},
            { id: 'src-a', type: 'folder', name: 'src', date: 'null', children: [
                { id: 'index-a', type: 'file', name: 'index.js', content: 'console.log("Hello from Project A!");', date: 'null' },
            ]},
        ]},
        { id: 'project-b', type: 'folder', date: 'null', name: 'Project-B', children: [
            { id: 'readme-b', type: 'file', name: 'README.md', content: 'This is the README for Project B. ', date: 'null'},
        ]},
      ],
    },
    {
      id: 'documents',
      date: 'null',
      type: 'folder',
      name: 'Documents',
      children: [
        { id: 'resume', type: 'file', name: 'resume.pdf', content: 'This is my resume.', date: 'null' },
        { id: 'notes', type: 'file', name: 'notes.txt', content: 'Some important notes.', date: 'null' },
      ],
    },
    {
      id: 'about',
      date: 'null',
      type: 'executable',
      name: 'about.sh',
      content: 'Welcome to my interactive CLI! Built with React & Tailwind CSS.'
    },
    {
      id: 'contact',
      date: 'null', 
      type: 'executable',
      name: 'contact.exe',
      content: 'You can reach me at email@example.com'
    }
  ],
};