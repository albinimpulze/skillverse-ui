
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* Background circles */}
      <div className="absolute top-0 right-0 -mt-40 -mr-40 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight animate-fade-in">
            <span className="inline-block mb-2">Discover your</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">
              professional potential
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Assess your skills, track your progress, and showcase your expertise with our intelligent assessment platform.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-300">
            <Button size="lg" onClick={() => navigate('/assessment')} className="group">
              Start an Assessment
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')}>
              Explore Dashboard
            </Button>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20">
          <GlassCard className="px-6 py-8 md:py-10">
            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:divide-x md:divide-border">
              <div className="flex flex-col items-center px-4 md:px-8">
                <div className="text-3xl md:text-4xl font-semibold text-blue-600 animate-slide-up">250+</div>
                <p className="mt-2 text-sm text-muted-foreground text-center">Skill assessments available across categories</p>
              </div>
              <div className="flex flex-col items-center px-4 md:px-8">
                <div className="text-3xl md:text-4xl font-semibold text-blue-600 animate-slide-up animation-delay-150">98%</div>
                <p className="mt-2 text-sm text-muted-foreground text-center">Of users report improved career prospects</p>
              </div>
              <div className="flex flex-col items-center px-4 md:px-8">
                <div className="text-3xl md:text-4xl font-semibold text-blue-600 animate-slide-up animation-delay-300">24/7</div>
                <p className="mt-2 text-sm text-muted-foreground text-center">Access to detailed analytics and insights</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;
