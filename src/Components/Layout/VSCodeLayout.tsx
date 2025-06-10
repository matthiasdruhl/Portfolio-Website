import React from 'react';
import { Link } from 'react-router-dom';

interface VSCodeLayoutProps {
  children: React.ReactNode;
}

const VSCodeLayout: React.FC<VSCodeLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-white text-[#333333]">
      {/* Activity Bar (Left Sidebar) */}
      <div className="w-12 bg-[#333333] flex flex-col items-center pt-2">
        <Link to="/" className="w-12 h-12 flex items-center justify-center hover:bg-[#404040] transition-colors">
          <span className="text-xl text-white">🏠</span>
        </Link>
        <Link to="/education" className="w-12 h-12 flex items-center justify-center hover:bg-[#404040] transition-colors">
          <span className="text-xl text-white">📚</span>
        </Link>
        <Link to="/experience" className="w-12 h-12 flex items-center justify-center hover:bg-[#404040] transition-colors">
          <span className="text-xl text-white">💼</span>
        </Link>
        <Link to="/projects" className="w-12 h-12 flex items-center justify-center hover:bg-[#404040] transition-colors">
          <span className="text-xl text-white">🚀</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Menu Bar */}
        <div className="h-8 bg-[#007acc] flex items-center px-4">
          <div className="flex space-x-4 text-white">
            <span className="hover:bg-[#0066aa] px-2 py-1 cursor-pointer">File</span>
            <span className="hover:bg-[#0066aa] px-2 py-1 cursor-pointer">Edit</span>
            <span className="hover:bg-[#0066aa] px-2 py-1 cursor-pointer">View</span>
            <span className="hover:bg-[#0066aa] px-2 py-1 cursor-pointer">Help</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VSCodeLayout; 