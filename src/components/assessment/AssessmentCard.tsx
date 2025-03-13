
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowRight, CheckCircle, HelpCircle, AlertCircle } from 'lucide-react';

interface AssessmentCardProps {
  question: string;
  options: string[];
  onAnswer: (selectedOptionIndex: number) => void;
  feedback?: {
    isCorrect: boolean;
    message: string;
  };
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  question,
  options,
  onAnswer,
  feedback,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null && !isSubmitted) {
      setIsSubmitted(true);
      onAnswer(selectedOption);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <GlassCard className="w-full max-w-3xl mx-auto overflow-hidden animate-fade-in">
      <div className="p-6 md:p-8">
        <div className="flex items-start">
          <HelpCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
          <h3 className="text-xl font-medium">{question}</h3>
        </div>
        
        <div className="mt-8 space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                selectedOption === index
                  ? isSubmitted
                    ? feedback?.isCorrect
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-red-500 bg-red-50 text-red-700'
                    : 'border-blue-400 bg-blue-50 text-blue-700'
                  : 'border-border hover:border-blue-300 hover:bg-blue-50/50'
              }`}
              onClick={() => handleOptionSelect(index)}
              disabled={isSubmitted}
            >
              <div className="flex items-center">
                <div className={`h-5 w-5 rounded-full border mr-3 flex items-center justify-center ${
                  selectedOption === index
                    ? isSubmitted
                      ? feedback?.isCorrect
                        ? 'border-green-500 bg-green-500'
                        : 'border-red-500 bg-red-500'
                      : 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedOption === index && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
        
        {isSubmitted && feedback && (
          <div className={`mt-6 p-4 rounded-lg ${
            feedback.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start">
              {feedback.isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
              )}
              <p className={feedback.isCorrect ? 'text-green-700' : 'text-red-700'}>
                {feedback.message}
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex justify-end">
          {!isSubmitted ? (
            <Button 
              onClick={handleSubmit} 
              disabled={selectedOption === null}
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext} className="group">
              Next Question
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default AssessmentCard;
