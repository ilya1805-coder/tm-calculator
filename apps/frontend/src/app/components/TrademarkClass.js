'use client';

import { useState } from 'react';
import Tooltip from '@/components/Tooltip';

export default function TrademarkClass({
  classId,
  description,
  isSelected,
  onClassClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block" // positioning context
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClassClick}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center font-bold border-2 rounded-sm cursor-pointer
          ${
            isSelected
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'
          }
        `}
      >
        {classId}
      </div>
      {isHovered && <Tooltip text={description} />}
    </div>
  );
}
