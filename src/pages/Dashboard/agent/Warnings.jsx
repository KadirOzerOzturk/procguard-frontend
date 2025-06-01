import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const dummyWarnings = [
  {
    id: 1,
    agent: "DESKTOP-001",
    type: "CPU",
    value: "95%",
    threshold: "90%",
    time: "2025-06-01 17:45",
  },
  {
    id: 2,
    agent: "LAPTOP-002",
    type: "RAM",
    value: "92%",
    threshold: "85%",
    time: "2025-06-01 17:42",
  },
  {
    id: 3,
    agent: "SERVER-003",
    type: "CPU",
    value: "89%",
    threshold: "80%",
    time: "2025-06-01 17:40",
  },
];

export default function Warnings() {
  return (
    <div className="text-light">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <FaExclamationTriangle className="text-yellow-400" />
        System Warnings
      </h1>
      <p className="mb-6 text-light-soft">
        CPU/RAM thresholds exceeded by agents are listed here.
      </p>

      <table className="w-full text-sm border border-dark-contrast rounded-lg overflow-hidden">
        <thead className="bg-dark-soft text-left text-light-soft">
          <tr>
            <th className="px-4 py-2">Agent</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Value</th>
            <th className="px-4 py-2">Threshold</th>
            <th className="px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {dummyWarnings.map((warn) => (
            <tr
              key={warn.id}
              className="border-t border-dark-contrast hover:bg-dark transition duration-150"
            >
              <td className="px-4 py-2">{warn.agent}</td>
              <td
                className={`px-4 py-2 font-semibold ${
                  warn.type === "CPU" ? "text-red-400" : "text-blue-400"
                }`}
              >
                {warn.type}
              </td>
              <td className="px-4 py-2">{warn.value}</td>
              <td className="px-4 py-2">{warn.threshold}</td>
              <td className="px-4 py-2">{warn.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
