/**
 * Application constants
 */

// File extensions
export const SUPPORTED_FILE_EXTENSIONS = ['.py', '.pdf', '.txt'] as const;

// Routes
export const ROUTES = {
  HOME: '/',
  CLI: '/cli',
  RESUME: '/resume',
  TEXT_VIEWER: '/text-viewer',
} as const;

// File paths
export const FILE_PATHS = {
  RESUME: '/Matthias_Druhl_Resume.pdf',
  PDF_WORKER: '/pdf-worker/pdf.worker.min.js',
} as const;

// UI Constants
export const UI = {
  MAX_TAB_WIDTH: 200,
  MIN_TAB_WIDTH: 80,
  SIDEBAR_WIDTH: 64,
  FILE_EXPLORER_WIDTH: 256,
} as const;

// Animation durations
export const ANIMATION = {
  TRANSITION_DURATION: 200,
  BLINK_DURATION: 1000,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  FILE_LOAD_FAILED: 'Failed to load file',
  CONTEXT_MISSING: 'Context must be used within its provider',
  UNSUPPORTED_FILE: 'Unsupported file type',
} as const; 