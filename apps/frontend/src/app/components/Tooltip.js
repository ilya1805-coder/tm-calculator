'use client';

export default function Tooltip({ text }) {
  return (
    <span
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50
                 min-w-[160px] max-w-lg break-words px-4 py-2 text-sm rounded
                 bg-gray-800 text-white shadow-lg opacity-100 transition-all duration-150"
      role="tooltip"
    >
      {text}
    </span>
  );
}
