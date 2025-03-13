
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import AnimatedTransition from '@/components/shared/AnimatedTransition';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Technical', count: 86 },
    { name: 'Professional', count: 67 },
    { name: 'Communication', count: 42 },
    { name: 'Leadership', count: 53 },
    { name: 'Creative', count: 38 },
    { name: 'Problem Solving', count: 45 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <AnimatedTransition animation="fade">
          <Hero />
          <Features />
          
          {/* Categories Section */}
          <section className="py-16 md:py-24 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight animate-fade-in">
                  Explore Assessment Categories
                </h2>
                <p className="mt-4 text-lg text-muted-foreground animate-fade-in">
                  Discover assessments across various professional domains to boost your career potential.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className="h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <AnimatedTransition animation="fade">
                      <GlassCard className="p-6 h-full flex flex-col hover:shadow-md transition-all duration-300">
                        <h3 className="text-xl font-medium">{category.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{category.count} assessments</p>
                        <div className="mt-4 flex-grow flex items-end">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-auto text-blue-600 hover:bg-blue-50 hover:text-blue-700 group"
                            onClick={() => navigate('/dashboard')}
                          >
                            Browse
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </GlassCard>
                    </AnimatedTransition>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <GlassCard className="overflow-hidden rounded-2xl">
                <div className="relative px-6 py-10 md:p-12 text-center md:text-left">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-indigo-50 z-0" />
                  
                  <div className="relative z-10 md:grid md:grid-cols-2 md:gap-10 md:items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                        Ready to showcase your professional skills?
                      </h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                        Join thousands of professionals who have advanced their careers with our skill assessments.
                      </p>
                      
                      <div className="mt-8 space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-blue-600" />
                          </div>
                          <p className="ml-3 text-muted-foreground">
                            Get personalized feedback on your professional skills
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-blue-600" />
                          </div>
                          <p className="ml-3 text-muted-foreground">
                            Understand your strengths and areas for improvement
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-blue-600" />
                          </div>
                          <p className="ml-3 text-muted-foreground">
                            Share verified skill certifications with employers
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <Button size="lg" onClick={() => navigate('/assessment')} className="group">
                          Start Assessment
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="hidden md:block mt-10 md:mt-0 relative">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-90" />
                        <div className="absolute inset-0 flex items-center justify-center text-white p-6">
                          <div className="text-center">
                            <p className="text-4xl font-bold">250+</p>
                            <p className="mt-2 text-lg">Skill Assessments</p>
                            <div className="mt-6 border-t border-white/20 pt-6">
                              <p className="text-sm">Join over 50,000 professionals who have advanced their careers with SkillVerse</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>
        </AnimatedTransition>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
