// src/components/Navbar/Navbar.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from './Tab';

interface NavbarProps {
  openFiles?: Array<{
    name: string;
    path: string;
  }>;
  onCloseFile: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ openFiles = [], onCloseFile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const defaultTabs = [
    { name: 'Home', path: '/' },
    { name: 'Terminal', path: '/cli' }
  ];

  // Combine default tabs with open files
  const allTabs = [...defaultTabs, ...openFiles];

  const isTabActive = (tabPath: string) => {
    if (tabPath === '/' || tabPath === '/cli') {
      return location.pathname === tabPath;
    }
    return location.pathname + location.search === tabPath;
  };

  return (
    <div className="flex w-full bg-sidebar h-8">
      <div className="flex h-full w-full">
        {allTabs.map((tab) => (
          <Tab
            key={tab.path}
            name={tab.name}
            path={tab.path}
            isActive={isTabActive(tab.path)}
            onClose={() => onCloseFile(tab.path)}
            showClose={!defaultTabs.some(defaultTab => defaultTab.path === tab.path)}
          />
        ))}
      </div>
      <div className="flex-1 bg-sidebar border-b-1 border-l-1 border-gray-600" />
    </div>
  );
};

export default Navbar;