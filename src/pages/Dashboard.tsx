
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import AnimatedTransition from '@/components/shared/AnimatedTransition';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  CheckCircle,
  Clock,
  ArrowRight,
  Award,
  Search,
  CalendarCheck,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import ResultsChart from '@/components/assessment/ResultsChart';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const skillData = [
    { skill: 'Technical', score: 75, fullMark: 100 },
    { skill: 'Communication', score: 85, fullMark: 100 },
    { skill: 'Leadership', score: 65, fullMark: 100 },
    { skill: 'Problem Solving', score: 80, fullMark: 100 },
    { skill: 'Creativity', score: 70, fullMark: 100 },
    { skill: 'Adaptability', score: 90, fullMark: 100 },
  ];
  
  const assessments = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Assess your skills in modern frontend technologies.',
      status: 'completed',
      progress: 100,
      score: 86,
    },
    {
      id: 2,
      title: 'Business Communication',
      description: 'Evaluate your professional communication abilities.',
      status: 'completed',
      progress: 100,
      score: 92,
    },
    {
      id: 3,
      title: 'Data Analysis',
      description: 'Test your analytical skills with real-world scenarios.',
      status: 'in-progress',
      progress: 45,
      score: null,
    },
    {
      id: 4,
      title: 'Project Management',
      description: 'Measure your project planning and execution abilities.',
      status: 'not-started',
      progress: 0,
      score: null,
    },
  ];
  
  const recommendations = [
    'UX Design Fundamentals',
    'Strategic Leadership',
    'Agile Methodologies',
    'Cloud Architecture',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <AnimatedTransition animation="fade">
          <div className="page-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-medium">Your Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Track your progress and manage your skill assessments
                </p>
              </div>
              <Button onClick={() => navigate('/assessment')} className="group">
                New Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <GlassCard className="p-6 animate-slide-up">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-muted-foreground text-sm">Completed</p>
                    <h3 className="text-2xl font-medium mt-1">12</h3>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                      <span className="text-green-600 font-medium">+3</span> this month
                    </p>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 animate-slide-up animation-delay-150">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-muted-foreground text-sm">In Progress</p>
                    <h3 className="text-2xl font-medium mt-1">3</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Next due in 2 days
                    </p>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-6 animate-slide-up animation-delay-300">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-muted-foreground text-sm">Certificates</p>
                    <h3 className="text-2xl font-medium mt-1">5</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Share your achievements
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-medium mb-4">Your Assessments</h2>
                <div className="space-y-4">
                  {assessments.map((assessment) => (
                    <GlassCard 
                      key={assessment.id} 
                      className="p-6 hover:shadow-md transition-all duration-300 animate-fade-in"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium">{assessment.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1">
                            {assessment.description}
                          </p>
                          
                          <div className="mt-4 flex items-center">
                            {assessment.status === 'completed' ? (
                              <div className="flex items-center text-green-600 text-sm">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Completed
                                <span className="mx-2">|</span>
                                Score: <span className="font-medium ml-1">{assessment.score}%</span>
                              </div>
                            ) : assessment.status === 'in-progress' ? (
                              <div className="flex items-center text-amber-600 text-sm">
                                <Clock className="h-4 w-4 mr-1" />
                                In Progress - {assessment.progress}% completed
                              </div>
                            ) : (
                              <div className="flex items-center text-blue-600 text-sm">
                                <CalendarCheck className="h-4 w-4 mr-1" />
                                Not Started
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 group"
                          onClick={() => navigate('/assessment')}
                        >
                          {assessment.status === 'completed' ? 'Review' : 
                           assessment.status === 'in-progress' ? 'Continue' : 'Start'}
                          <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Button>
                      </div>
                      
                      {assessment.status === 'in-progress' && (
                        <div className="mt-4">
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                              style={{ width: `${assessment.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </GlassCard>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-medium mb-4">Skill Breakdown</h2>
                  <GlassCard className="p-6 animate-fade-in">
                    <ResultsChart data={skillData} />
                  </GlassCard>
                </div>
                
                <div>
                  <h2 className="text-xl font-medium mb-4">Recommended for You</h2>
                  <GlassCard className="p-6 animate-fade-in">
                    <div className="space-y-4">
                      {recommendations.map((rec, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                          onClick={() => navigate('/assessment')}
                        >
                          <div className="flex items-center">
                            <Search className="h-4 w-4 text-blue-600 mr-3" />
                            <span>{rec}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button variant="outline" className="w-full" onClick={() => navigate('/assessment')}>
                        View All Recommendations
                      </Button>
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

export default Dashboard;
