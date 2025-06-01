import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const dummyAlerts = [
  { day: "Mon", warnings: 2 },
  { day: "Tue", warnings: 5 },
  { day: "Wed", warnings: 3 },
  { day: "Thu", warnings: 7 },
  { day: "Fri", warnings: 4 },
  { day: "Sat", warnings: 1 },
  { day: "Sun", warnings: 6 },
];

export default function AlertTrends() {
  return (
    <div className="bg-dark-soft p-6 rounded-xl shadow border border-dark-contrast mb-6">
      <h2 className="text-xl font-bold text-light mb-4">Warning Trends (Last 7 Days)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dummyAlerts}>
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis allowDecimals={false} stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#fff" }} />
          <Legend />
          <Line type="monotone" dataKey="warnings" stroke="#facc15" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
