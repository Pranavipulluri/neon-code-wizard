
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Example journey data:
const data = [
  { name: '2022', Level: 10, Label: "Start" },
  { name: '2023', Level: 30, Label: "College" },
  { name: '2024', Level: 55, Label: "Key Projects" },
  { name: '2025', Level: 80, Label: "Internships" },
  { name: "Future", Level: 100, Label: "Aim" }
];

export default function CareerJourneyChart() {
  return (
    <div className="relative w-full h-[330px] neon-border rounded-xl bg-black/20 p-2 shadow animate-fade-in">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="6 8" stroke="#0ff2"/>
          <XAxis dataKey="name" stroke="#f0f0ff" />
          <YAxis stroke="#f0f0ff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Level" stroke="#f472b6" strokeWidth={4} activeDot={{ r: 10 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        {/* animated mountain/dot art, can expand later */}
      </div>
    </div>
  );
}
