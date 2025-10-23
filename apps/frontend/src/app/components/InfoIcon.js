'use client';

import { useState } from 'react';
import Tooltip from '@/components/Tooltip';

export default function InfoIcon({ description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-gray-300 text-white text-xs font-bold px-1 rounded ml-1 cursor-help"
      >
        ?
      </span>
      {isHovered && <Tooltip text={description} />}
    </span>
  );
}
