
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'low' | 'medium' | 'high';
  as?: React.ElementType;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({
  className,
  elevation = 'medium',
  as: Component = 'div',
  children,
  ...props
}, ref) => {
  const elevationClasses = {
    low: 'bg-white/60 shadow-sm border-purple-100',
    medium: 'bg-white/70 shadow-md border-purple-200',
    high: 'bg-white/80 shadow-lg border-purple-300',
  };

  return (
    <Component
      ref={ref}
      className={cn(
        'backdrop-blur-md border rounded-xl transition-all duration-300',
        elevationClasses[elevation],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

GlassCard.displayName = 'GlassCard';

export { GlassCard };
