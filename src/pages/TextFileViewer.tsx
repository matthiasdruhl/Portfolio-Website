import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fileSystem } from '../data/cliData';

const TextFileViewer: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [filePath, setFilePath] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    // Get the file path from the URL query parameter
    const params = new URLSearchParams(location.search);
    const contentPath = params.get('path');

    if (contentPath) {
      setIsLoading(true);
      setError('');
      
      // Find the file node and build its path
      const findFileNode = (node: typeof fileSystem, targetPath: string, currentPath: string[] = []): string[] | null => {
        if (node.content === targetPath) {
          return [...currentPath, node.name];
        }
        
        if (node.children) {
          for (const child of node.children) {
            const result = findFileNode(child, targetPath, [...currentPath, node.name]);
            if (result) return result;
          }
        }
        return null;
      };

      const pathParts = findFileNode(fileSystem, contentPath, []);
      if (pathParts) {
        setFilePath(pathParts.join(' > '));
      }

      // Fetch the file content
      fetch(contentPath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load file');
          }
          return response.text();
        })
        .then(text => {
          setFileContent(text);
          setIsLoading(false);
        })
        .catch(err => {
          setError('Error loading file: ' + err.message);
          setIsLoading(false);
        });
    }
  }, [location]);

  const renderStyledLine = (line: string) => {
    // Python syntax highlighting
    if (line.trim().startsWith('#')) {
      return <div className="text-green-400 font-mono">{line}</div>;
    }
    
    if (line.trim().startsWith('class ') || line.trim().startsWith('def ')) {
      return <div className="text-blue-400 font-mono font-semibold">{line}</div>;
    }
    
    if (line.includes('import ') || line.includes('from ')) {
      return <div className="text-purple-400 font-mono">{line}</div>;
    }
    
    if (line.includes('self.') || line.includes('super().')) {
      return <div className="text-yellow-400 font-mono">{line}</div>;
    }
    
    if (line.includes('"""') || line.includes("'''")) {
      return <div className="text-gray-300 font-mono italic">{line}</div>;
    }
    
    // Handle string literals
    if (line.includes('"') || line.includes("'")) {
      return <div className="text-orange-400 font-mono">{line}</div>;
    }
    
    // Handle numbers
    if (/\d+/.test(line)) {
      return <div className="text-cyan-400 font-mono">{line}</div>;
    }
    
    // Default text
    return <div className="text-gray-200 font-mono">{line}</div>;
  };

  const renderContentWithLineNumbers = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="flex">
        {/* Line numbers column */}
        <div className="text-gray-500 pr-4 select-none border-r border-gray-700 flex-shrink-0">
          {lines.map((_, index) => (
            <div key={index} className="text-right">
              {index + 1}
            </div>
          ))}
        </div>
        {/* Content column */}
        <div className="pl-4 flex-1 overflow-x-auto">
          {lines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap break-words">
              {renderStyledLine(line)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full mx-auto">
      {error ? (
        <div className="text-red-500 p-4">{error}</div>
      ) : (
        <div className="bg-background p-8 rounded-lg">
          {/* File path display */}
          <div className="text-gray-400 text-sm mb-4 font-mono">
            {filePath}
          </div>
          <div className="text-gray-200 font-mono text-sm leading-relaxed">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-gray-400">Loading file...</span>
              </div>
            ) : (
              fileContent ? renderContentWithLineNumbers(fileContent) : 'No content to display'
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextFileViewer; 