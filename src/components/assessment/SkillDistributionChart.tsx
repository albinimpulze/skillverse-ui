
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface SkillDistributionChartProps {
  scores: Record<string, number>;
}

export const SkillDistributionChart: React.FC<SkillDistributionChartProps> = ({ scores }) => {
  const data = Object.entries(scores).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = [
    '#9333ea', // purple-700
    '#a855f7', // purple-500
    '#c084fc', // purple-400
    '#d8b4fe', // purple-300
    '#e9d5ff', // purple-200
    '#f3e8ff', // purple-100
    '#6366f1', // indigo-500
    '#818cf8', // indigo-400
  ];

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Score']}
            contentStyle={{ backgroundColor: 'white', borderColor: '#e9d5ff' }}
          />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
