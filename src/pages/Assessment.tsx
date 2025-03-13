
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import AssessmentCard from '@/components/assessment/AssessmentCard';
import ProgressBar from '@/components/assessment/ProgressBar';
import AnimatedTransition from '@/components/shared/AnimatedTransition';
import { useNavigate } from 'react-router-dom';
import {
  Clock,
  Calendar,
  BarChart3,
  PauseCircle,
  ChevronLeft,
  Timer,
  Check,
  AlertTriangle
} from 'lucide-react';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(3);
  const totalQuestions = 10;
  const [timeLeft, setTimeLeft] = useState('18:24');
  
  // Sample questions data
  const questions = [
    {
      id: 1,
      question: 'Which approach is most effective for optimizing web application performance?',
      options: [
        'Increase server capacity indefinitely',
        'Implement code splitting and lazy loading',
        'Use high-resolution images for better visual quality',
        'Add more JavaScript libraries for enhanced functionality'
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: 'What is the primary advantage of using a component-based architecture?',
      options: [
        'It requires more code to implement basic features',
        'It makes the codebase more difficult to understand',
        'It enables reusability and easier maintenance',
        'It requires multiple servers to function properly'
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: 'When designing a responsive interface, which approach is considered best practice?',
      options: [
        'Create separate websites for mobile and desktop users',
        'Use fixed pixel dimensions for all screen elements',
        'Design desktop-first, then adapt for smaller screens',
        'Design with a mobile-first approach and progressive enhancement'
      ],
      correctAnswer: 3,
    },
  ];
  
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [feedback, setFeedback] = useState<{isCorrect: boolean, message: string} | null>(null);
  
  const currentQuestionData = questions[currentQuestion - 1];
  
  const handleAnswer = (selectedOptionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: selectedOptionIndex
    });
    
    // Show feedback
    const isCorrect = selectedOptionIndex === currentQuestionData.correctAnswer;
    setFeedback({
      isCorrect,
      message: isCorrect 
        ? "Correct! This approach is indeed the most effective." 
        : "Not quite right. Consider the benefits of the correct approach."
    });
    
    // Auto advance to next question after a delay
    setTimeout(() => {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
        setFeedback(null);
      } else {
        navigate('/results');
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <AnimatedTransition animation="fade">
          <div className="page-container">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mr-2"
                    onClick={() => navigate('/dashboard')}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back
                  </Button>
                  <h1 className="text-2xl md:text-3xl font-medium">Frontend Development Assessment</h1>
                </div>
                <p className="text-muted-foreground mt-1 md:ml-8">
                  Evaluating your skills in modern web development
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="flex items-center text-muted-foreground mr-4">
                  <Timer className="h-4 w-4 mr-1" />
                  <span className="text-sm">{timeLeft} remaining</span>
                </div>
                <Button variant="outline" size="sm">
                  <PauseCircle className="h-4 w-4 mr-1" />
                  Pause
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 lg:order-2">
                <AssessmentCard
                  question={currentQuestionData.question}
                  options={currentQuestionData.options}
                  onAnswer={handleAnswer}
                  feedback={feedback}
                />
                
                <div className="mt-6 flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    disabled={currentQuestion === 1}
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  >
                    Previous
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    Question {currentQuestion} of {totalQuestions}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    disabled={currentQuestion === totalQuestions || !selectedAnswers[currentQuestion]}
                    onClick={() => {
                      setCurrentQuestion(currentQuestion + 1);
                      setFeedback(null);
                    }}
                  >
                    Skip
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-4 lg:order-1">
                <GlassCard className="p-6 animate-fade-in">
                  <div className="flex justify-center mb-6">
                    <ProgressBar 
                      currentStep={currentQuestion} 
                      totalSteps={totalQuestions} 
                    />
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Time Limit</p>
                        <p className="text-sm text-muted-foreground">30 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <BarChart3 className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Difficulty</p>
                        <p className="text-sm text-muted-foreground">Intermediate</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Topics</p>
                        <p className="text-sm text-muted-foreground">
                          React, CSS, JavaScript, Accessibility, Performance
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-start mb-4">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <p className="text-sm">
                        You can revisit questions before submitting the assessment.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <p className="text-sm">
                        The assessment will automatically submit when the time runs out.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </AnimatedTransition>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessment;
