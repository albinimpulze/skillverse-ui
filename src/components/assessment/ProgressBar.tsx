
import React, { useEffect, useRef } from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentStep, 
  totalSteps,
  className = ''
}) => {
  const progressRef = useRef<SVGCircleElement>(null);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));
  
  useEffect(() => {
    if (progressRef.current) {
      const offset = circumference - (percentage / 100) * circumference;
      progressRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [percentage, circumference]);

  return (
    <div className={`progress-ring-container ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          className="text-muted/30"
          stroke="currentColor"
          fill="none"
          strokeWidth="6"
          cx="60"
          cy="60"
          r={radius}
        />
        
        {/* Progress circle */}
        <circle
          ref={progressRef}
          className="progress-ring-circle text-blue-500"
          stroke="currentColor"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          cx="60"
          cy="60"
          r={radius}
        />
        
        {/* Text in the middle */}
        <text 
          x="60" 
          y="55" 
          textAnchor="middle"
          className="text-2xl font-medium fill-current"
        >
          {Math.round(percentage)}%
        </text>
        <text 
          x="60" 
          y="75" 
          textAnchor="middle"
          className="text-xs fill-muted-foreground"
        >
          Complete
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;
