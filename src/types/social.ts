import React from 'react';

export interface SocialLinkItem {
  name: string;
  url: string;
  icon: React.ElementType; // Represents a React component (like FaLinkedin)
}