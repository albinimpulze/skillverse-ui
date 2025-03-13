
import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

interface SkillData {
  skill: string;
  score: number;
  fullMark: number;
}

interface ResultsChartProps {
  data: SkillData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded border border-border">
        <p className="text-sm font-medium">{`${payload[0].payload.skill}`}</p>
        <p className="text-sm text-blue-600">{`Score: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ResultsChart: React.FC<ResultsChartProps> = ({ data }) => {
  return (
    <div className="w-full h-80 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fill: "#9ca3af" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Skill Score"
            dataKey="score"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
