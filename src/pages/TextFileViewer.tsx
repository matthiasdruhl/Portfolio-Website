import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fileSystem } from '../data/cliData';

const TextFileViewer: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [filePath, setFilePath] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    // Get the file path from the URL query parameter
    const params = new URLSearchParams(location.search);
    const contentPath = params.get('path');

    if (contentPath) {
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
        })
        .catch(err => {
          setError('Error loading file: ' + err.message);
        });
    }
  }, [location]);

  const renderStyledLine = (line: string) => {
    // Handle headers (lines starting with =)
    if (line.startsWith('=')) {
      return <h1 className="text-2xl font-bold text-blue-400 mb-4">{line.replace(/^=+/, '')}</h1>;
    }
    
    // Handle section headers (lines starting with -)
    if (line.startsWith('-')) {
      return <h2 className="text-xl font-semibold text-blue-300 mb-3">{line.replace(/^-+/, '')}</h2>;
    }
    
    // Handle bullet points
    if (line.startsWith('•')) {
      return <div className="ml-8 text-gray-200">{line}</div>;
    }
    
    // Handle code blocks (lines starting with >)
    if (line.startsWith('>')) {
      return <div className="bg-gray-800 p-2 rounded font-mono text-sm text-gray-300">{line.substring(1)}</div>;
    }

    if (line.startsWith('+')) {
      return <div className="ml-4 text-gray-200">{line.substring(1)}</div>;
    }
    
    // Handle links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    if (linkRegex.test(line)) {
      return (
        <div className="text-gray-200">
          {line.replace(linkRegex, (_, text, url) => (
            `<a href="${url}" class="text-blue-400 hover:text-blue-300 underline">${text}</a>`
          ))}
        </div>
      );
    }
    
    // Default text
    return <div className="text-gray-200">{line}</div>;
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
            {fileContent ? renderContentWithLineNumbers(fileContent) : 'Loading...'}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextFileViewer; 