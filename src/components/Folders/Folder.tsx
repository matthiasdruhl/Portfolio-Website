import React from "react";
import { FolderProps } from "../../types/folder";

export const Folder = ({ node, onSelect, isOpen }: FolderProps) => {
    const isFolder = node.type === "folder";
    const isRoot = node.id === "root";

    return (
        <div className="flex items-center text-sm hover:bg-gray-800 rounded cursor-pointer" onClick={() => onSelect(node)}>
            <div className="flex items-center w-full">
                {isFolder && (
                    <span className="mr-1 text-gray-400 text-xs transform transition-transform duration-200 select-none flex-shrink-0">
                        <span className="text-gray-400 text-xl">{isOpen ? "▾" : "▸"}</span>
                    </span>
                )}
                <span className={`${isFolder ? 'text-blue-400' : 'text-gray-300 my-1'} truncate`}>
                    {`${isRoot ? 'Matthias Druhl' : node.name}`}
                </span>
            </div>
        </div>
    );
}; 