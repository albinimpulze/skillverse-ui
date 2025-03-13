
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface SkillDistributionChartProps {
  scores: Record<string, number>;
}

export const SkillDistributionChart: React.FC<SkillDistributionChartProps> = ({ scores }) => {
  const data = Object.entries(scores).map(([name, value]) => ({
    name: name,
    value: value,
  }));

  // Custom colors for the chart
  const COLORS = ['#a855f7', '#8b5cf6', '#6366f1', '#ec4899', '#8b5cf6', '#10b981', '#f97316', '#0ea5e9'];

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Score']}
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
