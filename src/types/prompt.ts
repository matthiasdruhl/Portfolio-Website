import { FileNode } from './cli';

export interface PromptProps {
  path: string;
  node: FileNode;
  onSelect: (node: FileNode) => void;
  onBack: () => void;
}