// src/components/sections/SocialsSection.tsx
import React from 'react';
import SocialLink from '../SocialLink/SocialLink.tsx';
import { SocialLinkItem } from '../../types/social'; // Using the centralized type

interface SocialsSectionProps {
  socialLinks: SocialLinkItem[];
}

const SocialsSection: React.FC<SocialsSectionProps> = ({ socialLinks }) => {
  return (
    <div className="gap-4 text-2xl">
      <h1 className="text-white text-xl mb-3">Socials:</h1>
      {socialLinks.map((social, index) => (
        <SocialLink key={index} social={social} />
      ))}
    </div>
  );
};

export default SocialsSection;