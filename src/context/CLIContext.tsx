import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FileNode } from '../types/cli';
import { PathHistory } from '../types/paths';
import { fileSystem } from '../data/cliData';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

interface CLIContextType {
  openFolders: Set<string>;
  toggleFolder: (path: string) => void;
  selectedFile: FileNode | null;
  setSelectedFile: (file: FileNode | null) => void;
  // CLI state
  history: PathHistory[];
  setHistory: (history: PathHistory[]) => void;
  currentNode: FileNode;
  setCurrentNode: (node: FileNode) => void;
  currentPath: string;
  setCurrentPath: (path: string) => void;
  handleOptionSelect: (node: FileNode) => void;
  handleGoBack: () => void;
}

const CLIContext = createContext<CLIContextType | undefined>(undefined);

const useCLI = () => {
  const context = useContext(CLIContext);
  if (context === undefined) {
    throw new Error('useCLI must be used within a CLIProvider');
  }
  return context;
};

export const CLIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const navigate = useNavigate();
  
  // CLI state
  const [history, setHistory] = useState<PathHistory[]>([]);
  const [currentNode, setCurrentNode] = useState<FileNode>(fileSystem);
  const [currentPath, setCurrentPath] = useState<string>(fileSystem.name);

  const toggleFolder = (path: string) => {
    setOpenFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const handleOptionSelect = (node: FileNode) => {
    // Add to history first
    const newHistoryEntry: PathHistory = {
      path: currentPath,
      command: node.name,
    };
    setHistory(prev => [...prev, newHistoryEntry]);

    if (node.type === 'folder') {
      setCurrentNode(node);
      const nextPath = currentPath === fileSystem.name ? `${fileSystem.name}\\${node.name}` : `${currentPath}\\${node.name}`;
      setCurrentPath(nextPath);
    } else if (node.type === 'file') {
      setSelectedFile(node);
      // Store the current state in sessionStorage before navigating
      const cliState = {
        history: [...history, newHistoryEntry], // Include the new history entry
        currentNode,
        currentPath,
        selectedFile: node
      };
      sessionStorage.setItem('cliState', JSON.stringify(cliState));
      
      // Navigate based on file extension using React Router
      if (node.name.endsWith('.pdf')) {
        navigate(ROUTES.RESUME);
      } else if (node.name.endsWith('.py')) {
        navigate(`${ROUTES.TEXT_VIEWER}?path=${encodeURIComponent(node.content || '')}`);
      }
    }
  };

  const handleGoBack = () => {
    if (currentPath === fileSystem.name) return;

    // Find the parent node by looking for the current node in the fileSystem
    const findParentNode = (node: FileNode, targetId: string): FileNode | null => {
      if (!node.children) return null;
      
      // Check if any child is the target
      const targetChild = node.children.find(child => child.id === currentNode.id);
      if (targetChild) return node;
      
      // Recursively check children
      for (const child of node.children) {
        const found = findParentNode(child, targetId);
        if (found) return found;
      }
      
      return null;
    };

    const parentNode = findParentNode(fileSystem, currentNode.id);
    
    if (parentNode) {
      const backCommandEntry: PathHistory = {
        path: currentPath,
        command: ' ..',
      };
      setHistory(prev => [...prev, backCommandEntry]);
      setCurrentNode(parentNode);
      
      // Update path to parent's path
      const pathParts = currentPath.split('\\');
      pathParts.pop(); // Remove last part
      const parentPath = pathParts.join('\\');
      setCurrentPath(parentPath);
    }
  };

  // Restore CLI state when returning from a file viewer
  React.useEffect(() => {
    const savedState = sessionStorage.getItem('cliState');
    if (savedState) {
      const { history: savedHistory, currentNode: savedNode, currentPath: savedPath, selectedFile: savedFile } = JSON.parse(savedState);
      setHistory(savedHistory);
      setCurrentNode(savedNode);
      setCurrentPath(savedPath);
      setSelectedFile(savedFile);
      sessionStorage.removeItem('cliState');
    }
  }, []);

  return (
    <CLIContext.Provider value={{
      openFolders,
      toggleFolder,
      selectedFile,
      setSelectedFile,
      history,
      setHistory,
      currentNode,
      setCurrentNode,
      currentPath,
      setCurrentPath,
      handleOptionSelect,
      handleGoBack
    }}>
      {children}
    </CLIContext.Provider>
  );
};

export { useCLI }; 