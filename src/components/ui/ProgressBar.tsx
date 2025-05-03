import React from 'react';

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600';
      case 'secondary':
        return 'bg-gray-600';
      case 'success':
        return 'bg-green-600';
      case 'warning':
        return 'bg-amber-500';
      case 'danger':
        return 'bg-red-600';
      default:
        return 'bg-blue-600';
    }
  };
  
  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'h-1';
      case 'md':
        return 'h-2';
      case 'lg':
        return 'h-4';
      default:
        return 'h-2';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showValue && <span className="text-sm font-medium text-gray-700">{value}/{max}</span>}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${getSizeClasses()}`}>
        <div
          className={`${getVariantClasses()} transition-all duration-500 ease-out ${getSizeClasses()}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

export default ProgressBar;