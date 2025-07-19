import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { FileProvider, useFiles } from "./context/FileContext";

import Homepage from "./pages/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";
import { FileExplorer } from "./components/sections/FileExplorer";
import Navbar from "./components/Navbar/Navbar";
import CLI from "./pages/CLI";
import TextFileViewer from "./pages/TextFileViewer";
import Resume from "./pages/Resume";
import { CLIProvider } from "./context/CLIContext";
import { FileNode } from "./types/cli";
import { fileSystem } from './data/cliData';
import ErrorBoundary from "./components/ErrorBoundary";
import { ROUTES } from "./constants";

const AppContent = () => {
  const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { openFiles, addOpenFile, removeOpenFile } = useFiles();

  const handleFileSelect = (file: FileNode) => {
    if (file.type === 'file') {
      if (file.name.endsWith('.pdf')) {
        const path = ROUTES.RESUME;
        addOpenFile({ name: 'Resume', path });
        navigate(path);
      } else if (file.name.endsWith('.py')) {
        const path = `${ROUTES.TEXT_VIEWER}?path=${encodeURIComponent(file.content || '')}`;
        addOpenFile({ name: file.name, path });
        navigate(path);
      }
    }
  };

  const handleCloseFile = (path: string) => {
    removeOpenFile(path);
    if (path.startsWith('/text-viewer')) {
      if (location.pathname + location.search === path) {
        navigate('/');
      }
    } else {
      if (location.pathname === path) {
        navigate('/');
      }
    }
  };

  const toggleFileExplorer = () => {
    setIsFileExplorerOpen(prev => !prev);
  };

  return (
    <div className="h-screen flex w-screen bg-background overflow-hidden">
      <CLIProvider>
        {/* Sidebar - Always visible */}
        <Sidebar onToggleFileExplorer={toggleFileExplorer} />
        
        {/* Main content area */}
        <div className="flex flex-1 relative">
          {/* File Explorer - Overlay on mobile, side panel on md+ */}
          {isFileExplorerOpen && (
            <div className="w-64 h-screen bg-sidebar border-r-1 border-gray-600 flex flex-col
              fixed md:static z-50 md:z-0">
              <div className="flex justify-between items-center p-2 border-b border-gray-600">
                <span className="text-gray-300">File Explorer</span>
                <button 
                  onClick={toggleFileExplorer}
                  className="text-gray-300 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <FileExplorer onSelect={handleFileSelect} />
              </div>
            </div>
          )}
          
          <div className="flex flex-col flex-1 h-full">
            <Navbar 
              openFiles={openFiles}
              onCloseFile={handleCloseFile}
            />
            
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path={ROUTES.HOME} element={<Homepage />} />
                <Route path={ROUTES.CLI} element={<CLI />} />
                <Route path={ROUTES.TEXT_VIEWER} element={<TextFileViewer />} />
                <Route path={ROUTES.RESUME} element={<Resume />} />
              </Routes>
            </div>
          </div>
        </div>
      </CLIProvider>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <FileProvider>
          <AppContent />
        </FileProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

