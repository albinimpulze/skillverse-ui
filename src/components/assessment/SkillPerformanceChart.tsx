
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface SkillPerformanceChartProps {
  scores: Record<string, number>;
}

export const SkillPerformanceChart: React.FC<SkillPerformanceChartProps> = ({ scores }) => {
  const data = Object.entries(scores).map(([name, value]) => ({
    name: name.split(' ').slice(0, 2).join(' '), // Truncate long names
    score: value,
  }));

  const getBarColor = (score: number) => {
    if (score >= 80) return "#10b981"; // green
    if (score >= 70) return "#8b5cf6"; // purple
    if (score >= 60) return "#f59e0b"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end"
            height={60}
            tick={{ fontSize: 10, fill: '#6b7280' }}
          />
          <YAxis 
            domain={[0, 100]} 
            ticks={[0, 20, 40, 60, 80, 100]}
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, 'Score']}
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}
          />
          <Bar 
            dataKey="score" 
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.score)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
