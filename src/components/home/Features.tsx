
import React from 'react';
import { Check, BarChart3, Award, Clock, Shield, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const featuresData = [
  {
    title: 'Skill Mapping',
    description: 'Discover your strengths and areas for growth with comprehensive skill assessments.',
    icon: BarChart3,
  },
  {
    title: 'Verified Certifications',
    description: 'Earn credentials for your skills and share them with potential employers.',
    icon: Award,
  },
  {
    title: 'Adaptive Learning',
    description: 'Our platform adjusts to your skill level for a personalized assessment experience.',
    icon: Sparkles,
  },
  {
    title: 'Real-time Feedback',
    description: 'Get instant insights on your performance and actionable improvement tips.',
    icon: Clock,
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your growth over time with detailed analytics and visualizations.',
    icon: Check,
  },
  {
    title: 'Secure Data',
    description: 'Your information and assessment results are protected with enterprise-grade security.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight animate-fade-in">
            Comprehensive Skill Assessment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in">
            Our platform offers a wide range of features designed to help you accurately measure and showcase your professional skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <GlassCard 
              key={feature.title} 
              elevation="low"
              className="p-6 hover:shadow-md transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
