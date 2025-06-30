import React from 'react';
import { Directory } from '../Directory/Directory';
import { PromptProps } from '../../types/prompt';

export const Prompt = ({ path, node, onSelect, onBack }: PromptProps) => {
  return (
    <div className="-mt-1">
      <div className="flex">
        <span className="mr-2">{"PS"}</span>
        <span className="text-emerald-400">{path}</span>
        <span className="text-gray-400 m-r-2">{'> ls'}</span>
      </div>
      <div className="flex w-full ml-20 mt-4">
        <div className="mr-2">{"Directory"}</div>
        <div>{path}</div>
      </div>
      <div className="flex w-full justify-between">
        <span className="w-1/3">
          {"Mode"}
        </span>
        <span className="w-1/3">
          {"Status"}
        </span>
        <span className="w-1/3">
          {"Name"}
        </span>
      </div>
      <div className="flex w-full justify-between -mt-2 -mb-3">
        <span className="w-1/3">
          {"----"}
        </span>
        <span className="w-1/3">
          {"---------"}
        </span>
        <span className="w-1/3">
          {"----"}
        </span>
      </div>
      <div className="mt-2">
        {node.children?.map((child, index) => (
          <Directory
            key={`${child.name}-${index}`}
            node={child}
            onSelect={onSelect}
          />
        ))}
        {path !== node.name && (
          <button onClick={onBack} className="text-yellow-400 hover:bg-gray-700 px-2 py-1 rounded">
            ..
          </button>
        )}
      </div>
    </div>
  );
};