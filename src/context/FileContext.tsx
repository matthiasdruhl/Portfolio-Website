import React, { createContext, useContext, useState, ReactNode } from 'react';

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
      const existingFile = prev.find(f => {
        // For text viewer files, compare the full path including search params
        if (f.path.startsWith('/text-viewer') && file.path.startsWith('/text-viewer')) {
          const existingParams = new URLSearchParams(f.path.split('?')[1]);
          const newParams = new URLSearchParams(file.path.split('?')[1]);
          return existingParams.get('path') === newParams.get('path');
        }
        // For other files, just compare the pathname
        return f.path === file.path;
      });
      
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