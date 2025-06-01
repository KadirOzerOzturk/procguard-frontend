import React from "react";
import { FaMicrochip, FaMemory } from "react-icons/fa";
const topAgents = [
  {
    id: "1",
    hostname: "DESKTOP-001",
    ip: "192.168.1.101",
    cpu: 92,
    ram: 78,
  },
  {
    id: "2",
    hostname: "SERVER-002",
    ip: "192.168.1.110",
    cpu: 87,
    ram: 91,
  },
  {
    id: "3",
    hostname: "LAPTOP-007",
    ip: "192.168.1.106",
    cpu: 84,
    ram: 66,
  },
];

export default function TopAgentCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {topAgents.map((agent) => (
        <div
          key={agent.id}
          className="bg-dark-soft border border-dark-contrast p-5 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-light mb-2">
            {agent.hostname}
          </h3>
          <p className="text-light-soft text-sm mb-4">{agent.ip}</p>

          <div className="flex items-center gap-3 mb-2">
            <FaMicrochip className="text-primary" />
            <span className="text-light font-medium">CPU: {agent.cpu}%</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMemory className="text-secondary" />
            <span className="text-light font-medium">RAM: {agent.ram}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
