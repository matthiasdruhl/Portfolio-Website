import { FileNode } from "./cli"

export interface DirectoryProps {
    node: FileNode,
    onSelect: (node: FileNode) => void
}