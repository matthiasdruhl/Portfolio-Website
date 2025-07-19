import { FileNode } from './cli';

export interface FileExplorerProps {
  onSelect: (node: FileNode) => void;
}