import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { BiRefresh } from "react-icons/bi";

const cpuData = {
  labels: Array.from({ length: 10 }, (_, i) => `-${(10 - i) * 6}s`),
  datasets: [
    {
      label: "CPU Usage (%)",
      data: [45, 50, 70, 65, 60, 55, 80, 78, 85, 90],
      borderColor: "#EF313B",
      backgroundColor: "rgba(239, 49, 59, 0.2)",
    },
  ],
};

const ramData = {
  labels: Array.from({ length: 10 }, (_, i) => `-${(10 - i) * 6}s`),
  datasets: [
    {
      label: "RAM Usage (%)",
      data: [60, 62, 65, 63, 67, 70, 68, 66, 71, 73],
      borderColor: "#F9FBFA",
      backgroundColor: "rgba(249, 251, 250, 0.2)",
    },
  ],
};

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: { color: "#F9FBFA" },
      grid: { color: "#334155" },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: { color: "#F9FBFA" },
      grid: { color: "#334155" },
    },
  },
  plugins: {
    legend: {
      labels: { color: "#F9FBFA" },
    },
  },
};

export default function AgentOverview() {
  const { agents, selectedAgentId } = useSelector((state) => state.agent);
  const agent = agents.find((a) => a.id === selectedAgentId);

  if (!agent) {
    return (
      <p className="text-gray-400">
        Please select an agent to view details.
      </p>
    );
  }

  return (
    <div className="text-light space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">📊 {agent.hostname} Overview</h1>
          <p className="text-light-soft mb-6">
            Here you can find real-time statistics and information about the
            selected agent.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-primary-dark hover:bg-primary text-light px-4 py-2 rounded transition">
          <BiRefresh className="text-2xl" />
          <span className="text-light-soft">Click to refresh</span>
        </button>
      </div>

      {/* Basic Info */}
      <div className="bg-dark-soft p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-2">Agent Info</h3>
        <p><strong>Hostname:</strong> {agent.hostname}</p>
        <p><strong>IP:</strong> {agent.ip}</p>
        <p><strong>OS:</strong> {agent.os}</p>
        <p><strong>Uptime:</strong> {agent.uptime}</p>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-dark-soft p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">CPU Usage</h3>
          <div className="w-full aspect-[4/2]">
            <Line data={cpuData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-dark-soft p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">RAM Usage</h3>
          <div className="w-full aspect-[4/2]">
            <Line data={ramData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Disk */}
      <div className="bg-dark-soft p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Disk Usage</h3>
        <p>Drive C: 128 GB used / 256 GB total</p>
        <p>Drive D: 80 GB used / 100 GB total</p>
      </div>
    </div>
  );
}
