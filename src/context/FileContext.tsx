import React, { createContext, useContext, useState, ReactNode } from 'react';
import { isSameFile } from '../utils/fileUtils';

interface OpenFile {
  name: string;
  path: string;
}

interface FileContextType {
  openFiles: OpenFile[];
  addOpenFile: (file: OpenFile) => void;
  removeOpenFile: (path: string) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openFiles, setOpenFiles] = useState<OpenFile[]>([]);

  const addOpenFile = (file: OpenFile) => {
    setOpenFiles(prev => {
      // Check if a file with the same path already exists
      const existingFile = prev.find(f => isSameFile(f.path, file.path));
      
      if (!existingFile) {
        return [...prev, file];
      }
      return prev;
    });
  };

  const removeOpenFile = (path: string) => {
    setOpenFiles(prev => prev.filter(file => file.path !== path));
  };

  return (
    <FileContext.Provider value={{ openFiles, addOpenFile, removeOpenFile }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFiles = () => {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error('useFiles must be used within a FileProvider');
  }
  return context;
}; 