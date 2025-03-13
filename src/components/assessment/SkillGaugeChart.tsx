
import React from 'react';

interface SkillGaugeChartProps {
  score: number;
}

export const SkillGaugeChart: React.FC<SkillGaugeChartProps> = ({ score }) => {
  const radius = 80;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate how much of the circle to fill
  const progress = (score / 100) * circumference;
  const remaining = circumference - progress;
  
  // Calculate the color based on the score
  const getColor = () => {
    if (score >= 80) return "#10b981"; // green
    if (score >= 70) return "#8b5cf6"; // purple
    if (score >= 60) return "#f59e0b"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div className="relative w-[200px] h-[200px]">
      <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={remaining}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Score display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl font-bold">{score.toFixed(0)}</span>
          <span className="text-lg">%</span>
        </div>
      </div>
    </div>
  );
};
