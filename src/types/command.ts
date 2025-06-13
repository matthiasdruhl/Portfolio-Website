import { FileNode } from './cli';

export interface CommandOutput {
  type: 'list' | 'message' | 'empty';
  content: string | FileNode[];
  isError?: boolean;
  isItalic?: boolean;
}