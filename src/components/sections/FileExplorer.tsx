import React, { useState } from 'react';
import { Folder } from '../Folders/Folder';
import { FileNode } from '../../types/cli';
import { FileExplorerProps } from '../../types/fileExplorer';
import { fileSystem } from '../../data/cliData';

export const FileExplorer: React.FC<FileExplorerProps> = ({ onSelect }) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  const handleToggle = (folderPath: string) => {
    setOpenFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderPath)) {
        newSet.delete(folderPath);
      } else {
        newSet.add(folderPath);
      }
      return newSet;
    });
  };

  const handleSelect = (node: FileNode, path: string) => {
    if (node.type === 'folder') {
      handleToggle(path);
    }
    onSelect?.(node);
  };

  const renderFolder = (node: FileNode, path: string = '') => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isOpen = openFolders.has(currentPath);

    return (
      <div key={currentPath}>
        <Folder
          node={node}
          isOpen={isOpen}
          onSelect={() => handleSelect(node, currentPath)}
        />
        {node.type === 'folder' && node.children && isOpen && (
          <div className="ml-6 mt-1">
            {node.children.map((child) => renderFolder(child, currentPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-sidebar text-gray-100 p-4 rounded-lg">
      <div className="flex flex-col space-y-2">
        {renderFolder(fileSystem)}
      </div>
    </div>
  );
};
