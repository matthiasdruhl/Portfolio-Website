import React from 'react';
import { Link } from 'react-router-dom';

interface TabProps {
  name: string;
  path: string;
  isActive: boolean;
  onClose?: () => void;
  showClose?: boolean;
}

const Tab: React.FC<TabProps> = ({ name, path, isActive, onClose, showClose }) => {
  return (
    <div className={`flex items-center h-full border-blue-500 hover:bg-gray-700 min-w-[80px] max-w-[200px] flex-1 justify-between ${
      isActive ? 'bg-background border-t-2 border-t-blue-500 border-x border-b-0 border-gray-600' : 'bg-sidebar border border-gray-600'
    }`}>
      <Link
        to={path}
        className="flex-1 h-full flex items-center justify-center min-w-0"
        aria-label={`Open ${name}`}
      >
        <div className="flex items-center  pl-1 justify-center w-full h-full">
          <span className="text-white truncate text-sm whitespace-nowrap overflow-hidden text-center">{name}</span>
        </div>
      </Link>
      {showClose && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose?.();
          }}
          className="h-full px-2 hover:bg-gray-600 text-gray-400 hover:text-white flex-shrink-0"
          aria-label={`Close ${name}`}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Tab; 