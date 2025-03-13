
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import ResultsChart from '@/components/assessment/ResultsChart';
import AnimatedTransition from '@/components/shared/AnimatedTransition';
import { useNavigate } from 'react-router-dom';
import {
  Share2,
  Download,
  CheckCircle,
  XCircle,
  HelpCircle,
  TrendingUp,
  Award,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();
  
  const skillData = [
    { skill: 'React', score: 85, fullMark: 100 },
    { skill: 'JavaScript', score: 78, fullMark: 100 },
    { skill: 'HTML/CSS', score: 92, fullMark: 100 },
    { skill: 'Responsive Design', score: 88, fullMark: 100 },
    { skill: 'Performance', score: 75, fullMark: 100 },
    { skill: 'Accessibility', score: 82, fullMark: 100 },
  ];
  
  const detailedResults = [
    {
      id: 1,
      question: 'Which approach is most effective for optimizing web application performance?',
      yourAnswer: 'Implement code splitting and lazy loading',
      isCorrect: true,
    },
    {
      id: 2,
      question: 'What is the primary advantage of using a component-based architecture?',
      yourAnswer: 'It enables reusability and easier maintenance',
      isCorrect: true,
    },
    {
      id: 3,
      question: 'When designing a responsive interface, which approach is considered best practice?',
      yourAnswer: 'Design desktop-first, then adapt for smaller screens',
      isCorrect: false,
      correctAnswer: 'Design with a mobile-first approach and progressive enhancement',
    },
    {
      id: 4,
      question: 'Which CSS methodology is designed to create more maintainable stylesheets?',
      yourAnswer: 'BEM (Block Element Modifier)',
      isCorrect: true,
    },
    {
      id: 5,
      question: 'What does the "virtual DOM" refer to in modern JavaScript frameworks?',
      yourAnswer: 'A copy of the actual DOM used for performance optimization',
      isCorrect: true,
    },
  ];
  
  // Calculate overall score
  const correctAnswers = detailedResults.filter(result => result.isCorrect).length;
  const totalQuestions = detailedResults.length;
  const overallScore = Math.round((correctAnswers / totalQuestions) * 100);
  
  const recommendations = [
    'Mobile-First Design Principles',
    'Advanced React Patterns',
    'Web Accessibility Standards',
    'Performance Optimization Techniques',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <AnimatedTransition animation="fade">
          <div className="page-container">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-medium">Assessment Results</h1>
                <p className="text-muted-foreground mt-1">
                  Frontend Development Assessment
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" onClick={() => navigate('/dashboard')}>
                  Return to Dashboard
                </Button>
              </div>
            </div>
            
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <GlassCard className="p-6 animate-slide-up">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Overall Score</h3>
                  <div className="h-12 w-12 rounded-full bg-blue-50 border-4 border-blue-500 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-700">{overallScore}%</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="text-sm">
                    {overallScore >= 85 ? 'Expert' : 
                     overallScore >= 70 ? 'Proficient' : 
                     overallScore >= 60 ? 'Intermediate' : 'Beginner'} level achieved
                  </p>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 animate-slide-up animation-delay-150">
                <div>
                  <h3 className="text-lg font-medium">Performance</h3>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <p className="text-xs text-muted-foreground">Correct</p>
                      <p className="text-lg font-medium text-green-600 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {correctAnswers}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs text-muted-foreground">Incorrect</p>
                      <p className="text-lg font-medium text-red-600 flex items-center">
                        <XCircle className="h-4 w-4 mr-1" />
                        {totalQuestions - correctAnswers}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 animate-slide-up animation-delay-300">
                <div>
                  <h3 className="text-lg font-medium">Comparison</h3>
                  <div className="mt-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <p className="text-sm">You scored higher than <span className="font-medium">68%</span> of peers</p>
                      <p className="text-xs text-muted-foreground mt-1">Based on 234 assessments</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-medium mb-4">Detailed Results</h2>
                <div className="space-y-4">
                  {detailedResults.map((result) => (
                    <GlassCard 
                      key={result.id} 
                      className={`p-6 animate-fade-in border-l-4 ${
                        result.isCorrect ? 'border-l-green-500' : 'border-l-red-500'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          {result.isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <HelpCircle className="h-4 w-4 text-blue-600 mr-2" />
                            <h3 className="text-lg font-medium">{result.question}</h3>
                          </div>
                          
                          <div className="mt-3">
                            <p className="text-sm text-muted-foreground">Your answer:</p>
                            <p className={`text-sm mt-1 ${
                              result.isCorrect ? 'text-green-700' : 'text-red-700'
                            }`}>
                              {result.yourAnswer}
                            </p>
                            
                            {!result.isCorrect && (
                              <div className="mt-2">
                                <p className="text-sm text-muted-foreground">Correct answer:</p>
                                <p className="text-sm text-green-700 mt-1">{result.correctAnswer}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/assessment')}
                    className="group"
                  >
                    Take Another Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-medium mb-4">Skill Breakdown</h2>
                  <GlassCard className="p-6 animate-fade-in">
                    <ResultsChart data={skillData} />
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-medium mb-2">Key Strengths</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 opacity-80 rounded-full mr-2" />
                          <p className="text-sm">HTML/CSS (92%)</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 opacity-70 rounded-full mr-2" />
                          <p className="text-sm">Responsive Design (88%)</p>
                        </div>
                      </div>
                      
                      <h4 className="text-sm font-medium mt-4 mb-2">Areas for Growth</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 opacity-40 rounded-full mr-2" />
                          <p className="text-sm">Performance (75%)</p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
                
                <div>
                  <h2 className="text-xl font-medium mb-4">Recommendations</h2>
                  <GlassCard className="p-6 animate-fade-in">
                    <div className="space-y-4">
                      {recommendations.map((rec, index) => (
                        <div key={index} className="group">
                          <Button
                            variant="ghost"
                            className="w-full justify-start h-auto p-3 text-left hover:bg-blue-50"
                          >
                            <div className="flex items-center">
                              <span>{rec}</span>
                              <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </Button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border text-center">
                      <p className="text-sm text-muted-foreground">
                        Recommendations are based on your assessment results
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </AnimatedTransition>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
