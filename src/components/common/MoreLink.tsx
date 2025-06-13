// src/components/common/MoreLink.tsx
import React from 'react';

interface MoreLinkProps {
  to: string;
  text: string;
}

const MoreLink: React.FC<MoreLinkProps> = ({ to, text }) => {
  return (
    <a href={to}>
      <div className="flex items-center text-base space-x-2 mb-3 hover:text-orange-300">
        <p className="text-center text-blue-400">{text} </p>
      </div>
    </a>
  );
};

export default MoreLink;