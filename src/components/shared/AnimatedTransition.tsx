
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTransitionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  duration?: 'fast' | 'normal' | 'slow';
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  children,
  className = '',
  animation = 'fade',
  duration = 'normal',
}) => {
  const animationMap = {
    fade: 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
  };

  const durationMap = {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500',
  };

  return (
    <div className={cn(animationMap[animation], durationMap[duration], className)}>
      {children}
    </div>
  );
};

export default AnimatedTransition;
