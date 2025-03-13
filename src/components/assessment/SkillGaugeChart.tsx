
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface SkillGaugeChartProps {
  score: number;
}

export const SkillGaugeChart: React.FC<SkillGaugeChartProps> = ({ score }) => {
  // Create data for gauge chart
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score },
  ];

  // Get color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10b981'; // green
    if (score >= 70) return '#22c55e'; // light green
    if (score >= 60) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  const scoreColor = getScoreColor(score);

  return (
    <div className="w-48 h-48 mx-auto relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell key="score" fill={scoreColor} />
            <Cell key="remaining" fill="#e5e7eb" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-3xl font-bold">{score.toFixed(1)}%</div>
        <div className="text-xs text-muted-foreground mt-1">Overall Score</div>
      </div>
    </div>
  );
};
