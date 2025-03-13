
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { DownloadIcon, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { SkillRadarChart } from '@/components/assessment/SkillRadarChart';
import { SkillDistributionChart } from '@/components/assessment/SkillDistributionChart';
import { SkillPerformanceChart } from '@/components/assessment/SkillPerformanceChart';
import { SkillGaugeChart } from '@/components/assessment/SkillGaugeChart';

const SkillReport = () => {
  const navigate = useNavigate();
  
  // Sample data - in a real app, this would come from an API or context
  const studentInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Computer Science",
    year: "3rd Year"
  };
  
  const scores = {
    "Core Employability Skills": 85,
    "Soft Skills": 75,
    "Professional Skills": 80,
    "AI Literacy": 70,
    "Domain-Specific Skills": 90,
    "Job Application Skills": 65,
    "Entrepreneurial Skills": 60,
    "Project Management Skills": 78
  };
  
  const overallScore = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.keys(scores).length;
  
  // Get thresholds from configuration
  const thresholds = {
    "Excellent": 80,
    "Good": 70,
    "Average": 60,
    "Needs Improvement": 0
  };
  
  const getScoreCategory = (score: number) => {
    if (score >= thresholds["Excellent"]) return { label: "Excellent", color: "text-green-600", bg: "bg-green-100" };
    if (score >= thresholds["Good"]) return { label: "Good", color: "text-green-600", bg: "bg-green-50" };
    if (score >= thresholds["Average"]) return { label: "Average", color: "text-yellow-600", bg: "bg-yellow-50" };
    return { label: "Needs Improvement", color: "text-red-600", bg: "bg-red-50" };
  };
  
  const getScoreEmoji = (score: number) => {
    if (score >= thresholds["Excellent"]) return "🌟";
    if (score >= thresholds["Good"]) return "✅";
    if (score >= thresholds["Average"]) return "⚠️";
    return "❌";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/skill-assessment')}
              className="mr-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
              Skill Gap Analysis Report
            </h1>
          </div>
          
          {/* Student Information */}
          <GlassCard className="p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Student Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{studentInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{studentInfo.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="font-medium">{studentInfo.department}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-medium">{studentInfo.year}</p>
              </div>
            </div>
          </GlassCard>
          
          {/* Performance Overview */}
          <GlassCard className="p-6 mb-8">
            <h2 className="text-lg font-medium mb-6">Performance Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center">
                <SkillGaugeChart score={overallScore} />
                <p className="mt-4 text-lg font-medium">
                  Overall Score: {overallScore.toFixed(1)}%
                </p>
                <div className={`mt-2 px-4 py-1 rounded-full ${getScoreCategory(overallScore).bg}`}>
                  <span className={`text-sm font-medium ${getScoreCategory(overallScore).color}`}>
                    {getScoreCategory(overallScore).label}
                  </span>
                </div>
              </div>
              <div>
                <SkillRadarChart scores={scores} />
              </div>
            </div>
          </GlassCard>
          
          {/* Detailed Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GlassCard className="p-6">
              <h2 className="text-lg font-medium mb-6">Score Distribution</h2>
              <SkillDistributionChart scores={scores} />
            </GlassCard>
            
            <GlassCard className="p-6">
              <h2 className="text-lg font-medium mb-6">Category Performance</h2>
              <SkillPerformanceChart scores={scores} />
            </GlassCard>
          </div>
          
          {/* Detailed Scores */}
          <GlassCard className="p-6 mb-8">
            <h2 className="text-lg font-medium mb-6">Detailed Scores</h2>
            <div className="space-y-4">
              {Object.entries(scores).map(([category, score]) => {
                const { bg, label } = getScoreCategory(score);
                const emoji = getScoreEmoji(score);
                
                return (
                  <div key={category} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="mr-2">{emoji}</span>
                        <span className="font-medium">{category}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${bg}`}>
                        {score.toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={score} className="h-2" 
                      style={{ 
                        backgroundColor: 'rgba(168, 85, 247, 0.2)',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </GlassCard>
          
          {/* Analysis and Recommendations */}
          <GlassCard className="p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Detailed Analysis</h2>
            <div className="prose max-w-none">
              <h3>Executive Summary</h3>
              <p>
                John demonstrates strong technical aptitude with exceptional performance in Domain-Specific Skills (90%) and Core Employability Skills (85%). 
                Areas for development include Entrepreneurial Skills (60%) and Job Application Skills (65%), which could be enhanced through targeted training.
              </p>
              
              <h3>Strengths</h3>
              <ul>
                <li>
                  <strong>Domain-Specific Skills (90%):</strong> Exceptional technical knowledge and problem-solving abilities.
                </li>
                <li>
                  <strong>Core Employability Skills (85%):</strong> Strong critical thinking and adaptability.
                </li>
                <li>
                  <strong>Professional Skills (80%):</strong> Solid understanding of workplace ethics and communication.
                </li>
              </ul>
              
              <h3>Areas for Improvement</h3>
              <ul>
                <li>
                  <strong>Entrepreneurial Skills (60%):</strong> Consider developing innovation and business planning capabilities.
                </li>
                <li>
                  <strong>Job Application Skills (65%):</strong> Focus on resume writing and interview preparation.
                </li>
                <li>
                  <strong>AI Literacy (70%):</strong> Enhance knowledge of AI tools and concepts.
                </li>
              </ul>
              
              <h3>Recommended Action Plan</h3>
              <p>
                Based on your assessment results, we recommend focusing on the following areas over the next 3 months:
              </p>
              <ol>
                <li>Join an entrepreneurship workshop or course</li>
                <li>Attend resume building and interview skills seminars</li>
                <li>Complete an online AI fundamentals course</li>
                <li>Participate in project management scenarios</li>
              </ol>
            </div>
          </GlassCard>
          
          {/* Download Options */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download Full Report
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download Data (CSV)
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkillReport;
