import React, { useState } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-gray-700 border-r-transparent border-b-transparent border-l-transparent',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-700 border-r-transparent border-t-transparent border-l-transparent',
    left: 'top-1/2 left-full transform -translate-y-1/2 border-l-gray-700 border-t-transparent border-r-transparent border-b-transparent',
    right: 'top-1/2 right-full transform -translate-y-1/2 border-r-gray-700 border-t-transparent border-l-transparent border-b-transparent'
  };

  return (
    <div className="relative inline-block" 
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}>
      {isVisible && (
        <div
          className={`absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-md shadow-sm max-w-xs ${positionClasses[position]} opacity-0 transition-opacity duration-300 animate-fadeIn`}
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {content}
          <div
            className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}
          ></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;