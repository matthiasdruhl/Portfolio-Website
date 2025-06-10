import React, { useState, useEffect } from 'react';

interface TerminalWindowProps {
  title: string;
  content: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, content }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timer = setTimeout(() => {
        setDisplayedContent(prev => prev + content[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, content]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Terminal Header */}
      <div className="bg-[#007acc] px-4 py-2 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-70"></div>
        </div>
        <div className="text-white text-sm flex-1 text-center">
          {title}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        <div className="flex items-center">
          <span className="text-[#007acc] mr-2">$</span>
          <span className="text-[#333333]">{displayedContent}</span>
          <span className="inline-block w-0.5 h-4 bg-[#333333] ml-1 animate-blink"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow; 