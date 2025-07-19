import React from "react";
import { DirectoryProps } from "../../types/directory";

export const Directory: React.FC<DirectoryProps> = ({ node, onSelect }) => {
    const isFolder = node.type === 'folder';
    
    return (
        <button 
            onClick={() => onSelect(node)} 
            className="flex w-full hover:bg-gray-700 px-2 py-1 rounded transition-colors text-left"
        >
            <div className="grid grid-cols-3 gap-4 w-full">
                <span className="text-gray-400">
                    {isFolder ? "d-----" : "-a----"}
                </span>
                <span className="text-gray-400">
                    {node.status || "---------"}
                </span>
                <span className={isFolder ? "text-blue-400" : "text-gray-300"}>
                    {node.name}
                </span>
            </div>
        </button>
    );
};