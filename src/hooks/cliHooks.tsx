import { useState } from 'react';
import { fileSystem } from '../data/cliData';
import { FileNode } from '../types/cli';
import { PathHistory } from '../types/paths';

export function useCli() {
  const [history, setHistory] = useState<PathHistory[]>([]);
  const [currentNode, setCurrentNode] = useState<FileNode>(fileSystem);
  const [currentPath, setCurrentPath] = useState<string>(fileSystem.name);

  const handleOptionSelect = (node: FileNode) => {
    if (node.type === 'folder') {
      setCurrentNode(node);
      const nextPath = currentPath === fileSystem.name ? `${fileSystem.name}\\${node.name}` : `${currentPath}\\${node.name}`;
      setCurrentPath(nextPath);
    } 
    
    const newHistoryEntry: PathHistory = {
      path: currentPath,
      command: node.name,
    };
    
    setHistory(prev => [...prev, newHistoryEntry]);
  };
  
  const handleGoBack = () => {
    if (currentPath === fileSystem.name) return;

    const pathParts = currentPath.split('/').slice(0, -1);
    const parentPath = pathParts.join('/') || fileSystem.name;
    
    let parentNode: FileNode | null = fileSystem;
    for (let i = 1; i < pathParts.length; i++) {
        parentNode = parentNode?.children?.find(c => c.name === pathParts[i]) || null;
    }
    
    if (parentNode) {
      const backCommandEntry: PathHistory = {
        path: currentPath,
        command: 'cd ..',
      };
      setHistory(prev => [...prev, backCommandEntry]);
      setCurrentNode(parentNode);
      setCurrentPath(parentPath);
    }
  };

  return { history, currentNode, currentPath, handleOptionSelect, handleGoBack };
}