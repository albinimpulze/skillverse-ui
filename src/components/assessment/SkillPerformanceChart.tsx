
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SkillPerformanceChartProps {
  scores: Record<string, number>;
}

export const SkillPerformanceChart: React.FC<SkillPerformanceChartProps> = ({ scores }) => {
  const data = Object.entries(scores).map(([name, value]) => ({
    name,
    score: value,
  }));

  // Sort data by score (descending)
  data.sort((a, b) => b.score - a.score);

  // Define color based on score value
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10b981'; // green
    if (score >= 70) return '#22c55e'; // light green
    if (score >= 60) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end"
            height={70} 
            tick={{ fill: '#6b7280', fontSize: 10 }}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Score']}
            contentStyle={{ backgroundColor: 'white', borderColor: '#e9d5ff' }}
          />
          <Bar 
            dataKey="score" 
            name="Score" 
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <rect 
                key={`cell-${index}`}
                fill={getScoreColor(entry.score)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
