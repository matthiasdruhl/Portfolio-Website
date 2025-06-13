import React from "react";
import { DirectoryProps } from "../../types/directory";

export const Directory: React.FC<DirectoryProps> = ({node, onSelect}: DirectoryProps) => {
    return (
        <button key={node.id} onClick={() => onSelect(node)} className="flex w-full">
            <div className="flex w-full justify-between text-left">
                <span className="w-1/3 ">
                    {node.type === 'folder' && "d-----"}
                    {node.type === 'file' && "-a----"}
                </span>
                <span className="w-1/3">
                    {node.date}
                </span>
                <span className="w-1/3">
                    {node.name}
                </span>
            </div>
        </button>
    );
}