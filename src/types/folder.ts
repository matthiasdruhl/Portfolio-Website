import { FileNode } from "./cli";

export interface FolderProps {
    node: FileNode;
    onSelect: (Node: FileNode) => void;
    isOpen: boolean;
};