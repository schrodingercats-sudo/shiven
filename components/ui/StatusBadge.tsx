import React from 'react';

export const StatusBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-white/50 backdrop-blur-sm animate-fade-in">
      <span className="relative flex h-3 w-3 mr-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-orange"></span>
      </span>
      <span className="text-sm font-medium text-muted-black tracking-wide">
        Available for new opportunities
      </span>
    </div>
  );
};