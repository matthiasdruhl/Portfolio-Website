export interface FileNode {
  id: string;
  type: 'folder' | 'file' | 'executable';
  name: string;
  children?: FileNode[];
  content?: string; // For files
  date: string;
}