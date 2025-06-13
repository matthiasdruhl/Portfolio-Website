import React from 'react';

import { SocialLinkItem } from '../../types/social'; // Centralized type for social links

interface SocialLinkProps {
  social: SocialLinkItem;
}

const SocialLink: React.FC<SocialLinkProps> = ({ social }) => {
  const IconComponent = social.icon; // Assign the icon component to a variable

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex w-fit items-center text-base space-x-2 mb-3 hover:text-orange-300 text-blue-400">
        <IconComponent /> {/* Render the icon component */}
        <p className="text-center">{social.name}</p>
      </div>
    </a>
  );
};

export default SocialLink;