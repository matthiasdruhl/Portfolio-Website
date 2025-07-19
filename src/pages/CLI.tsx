import React, { useEffect, useRef } from 'react';
import { Prompt } from '../components/Prompt/Prompt';
import { useCLI } from '../context/CLIContext';
import { useFiles } from '../context/FileContext';
import { useNavigate } from 'react-router-dom';
import { FileNode } from '../types/cli';
import { ROUTES } from '../constants';

const CLI = () => {
  const { 
    history, 
    currentNode, 
    currentPath, 
    handleOptionSelect, 
    handleGoBack
  } = useCLI();
  const { addOpenFile } = useFiles();
  const navigate = useNavigate();
  const endOfHistoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleFileSelect = (node: FileNode) => {
    if (node.type === 'file') {
      if (node.name.endsWith('.pdf')) {
        const path = ROUTES.RESUME;
        addOpenFile({ name: 'Resume', path });
        navigate(path);
      } else if (node.name.endsWith('.py')) {
        const path = `${ROUTES.TEXT_VIEWER}?path=${encodeURIComponent(node.content || '')}`;
        addOpenFile({ name: node.name, path });
        navigate(path);
      }
    } else {
      handleOptionSelect(node);
    }
  };

  return (
    <div className="bg-background min-h-[calc(100vh-3rem)] font-mono pb-2 text-base text-gray-200 pt-1 p-4 flex overflow-y-auto" >
      <div className="max-w-4xl h-fill flex flex-col pt-1 overflow-scrollable">
        <div>Matthias Druhl</div>
        <div>Copyright (C) Matthias Druhl. All rights reserved.</div>
        <div className='my-4'>Click on a path to navigate into it. Select the .. at the bottom of the list go back one folder.</div>
        
        {/* History Section */}
        <div>
          {history.map((entry, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center">
                <span className='mr-2'>{"PS"}</span>
                <span className="text-emerald-400">{entry.path}</span>
                <span className="text-gray-400">{'>'}</span>
                <span className='mx-2 text-yellow-400'>{"cd"}</span>
                <span className="text-gray-100">{entry.command}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Current Prompt Section */}
        <Prompt
          node={currentNode} 
          path={currentPath} 
          onSelect={handleFileSelect} 
          onBack={handleGoBack} 
        />

        {/* This empty div is the target for our auto-scrolling */}
        <div ref={endOfHistoryRef} />
      </div>
    </div>
  );
};

export default CLI;