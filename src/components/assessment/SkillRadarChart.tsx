
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

interface SkillRadarChartProps {
  scores: Record<string, number>;
}

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ scores }) => {
  const data = Object.entries(scores).map(([name, value]) => ({
    subject: name,
    value: value,
    fullMark: 100,
  }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#6b7280', fontSize: 10 }}
            tickLine={false}
          />
          <Radar
            name="Score"
            dataKey="value"
            stroke="#9333ea"
            fill="#a855f7"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
