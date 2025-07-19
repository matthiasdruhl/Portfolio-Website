/**
 * Utility functions for file operations
 */

/**
 * Check if two file paths are the same, handling text viewer paths with query parameters
 */
export const isSameFile = (path1: string, path2: string): boolean => {
  if (path1.startsWith('/text-viewer') && path2.startsWith('/text-viewer')) {
    const params1 = new URLSearchParams(path1.split('?')[1] || '');
    const params2 = new URLSearchParams(path2.split('?')[1] || '');
    return params1.get('path') === params2.get('path');
  }
  return path1 === path2;
};

/**
 * Sanitize file paths to prevent security issues
 */
export const sanitizePath = (path: string): string => {
  // Remove any potentially dangerous characters
  return path.replace(/[<>:"|?*]/g, '');
};

/**
 * Get file extension from filename
 */
export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || '';
};

/**
 * Check if file is a supported type
 */
export const isSupportedFileType = (filename: string): boolean => {
  const extension = getFileExtension(filename);
  return ['py', 'pdf', 'txt'].includes(extension);
};

/**
 * Generate a display name for a file
 */
export const getFileDisplayName = (filepath: string): string => {
  const filename = filepath.split('/').pop() || '';
  return filename.replace(/\.(py|txt|pdf)$/, '');
}; 