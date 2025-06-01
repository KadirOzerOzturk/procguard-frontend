import React from "react";
import { useSelector } from "react-redux";

const dummyProcesses = [
  { id: 1, name: "chrome.exe", pid: 1234, cpu: "5%", memory: "120 MB" },
  { id: 2, name: "node.exe", pid: 5678, cpu: "12%", memory: "80 MB" },
  { id: 3, name: "explorer.exe", pid: 9101, cpu: "2%", memory: "60 MB" },
];

export default function Processes() {
  const selectedAgent = useSelector((state) => state.agent.selectedAgent);

  if (!selectedAgent) {
    return (
      <div className="text-light p-6">
        <h2 className="text-xl font-semibold mb-2">No Agent Selected</h2>
        <p className="text-light-soft">
          Please select an agent from the <strong>Agents</strong> page to view its processes.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 text-light">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
        <span>🔍</span> Active Processes on{" "}
        <span className="text-primary">{selectedAgent.hostname}</span>
      </h1>
      <p className="text-light-soft mb-6">
        Below is the list of running processes reported by the agent.
      </p>

      <div className="overflow-x-auto shadow-lg rounded-xl bg-dark-soft border border-dark-contrast">
        <table className="min-w-full text-sm">
          <thead className="bg-dark-contrast text-left text-light uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Process Name</th>
              <th className="px-6 py-4">PID</th>
              <th className="px-6 py-4">CPU Usage</th>
              <th className="px-6 py-4">Memory</th>
            </tr>
          </thead>
          <tbody>
            {dummyProcesses.map((proc, i) => (
              <tr
                key={proc.id}
                className={`${
                  i % 2 === 0 ? "bg-dark" : "bg-dark-contrast"
                } hover:bg-primary/10 transition`}
              >
                <td className="px-6 py-3 font-medium">{proc.name}</td>
                <td className="px-6 py-3">{proc.pid}</td>
                <td className="px-6 py-3">{proc.cpu}</td>
                <td className="px-6 py-3">{proc.memory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
