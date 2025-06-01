import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

export default function UsageChart() {
  const { agents } = useSelector((state) => state.agent);

  const data = agents.map(agent => ({
    name: agent.hostname,
    CPU: agent.cpu,
    RAM: agent.ram,
  }));

  return (
    <div className="bg-dark-soft p-6 rounded-xl shadow border border-dark-contrast mb-6">
      <h2 className="text-xl font-bold text-light mb-4">CPU & RAM Usage by Agent</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#fff" }} />
          <Legend />
          <Bar dataKey="CPU" fill="#ef313b" />
          <Bar dataKey="RAM" fill="#2980b9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
