import React from "react";
import { useSelector } from "react-redux";
import { FaServer, FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

export default function TopStats() {
  const { agents } = useSelector((state) => state.agent);

  const total = agents.length;
  const online = agents.filter((a) => a.status === "online").length;
  const offline = total - online;
  const warnings = agents.filter((a) => a.cpu > 80 || a.ram > 80).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-dark-soft border border-dark-contrast rounded-xl p-4 shadow">
        <div className="flex items-center gap-3 text-xl">
          <FaServer className="text-primary" />
          <span>Total Agents</span>
        </div>
        <p className="mt-2 text-3xl font-bold">{total}</p>
      </div>

      <div className="bg-dark-soft border border-dark-contrast rounded-xl p-4 shadow">
        <div className="flex items-center gap-3 text-xl">
          <FaCheckCircle className="text-green-400" />
          <span>Online</span>
        </div>
        <p className="mt-2 text-3xl font-bold">{online}</p>
      </div>

      <div className="bg-dark-soft border border-dark-contrast rounded-xl p-4 shadow">
        <div className="flex items-center gap-3 text-xl">
          <FaTimesCircle className="text-red-400" />
          <span>Offline</span>
        </div>
        <p className="mt-2 text-3xl font-bold">{offline}</p>
      </div>

      <div className="bg-dark-soft border border-dark-contrast rounded-xl p-4 shadow">
        <div className="flex items-center gap-3 text-xl">
          <FaExclamationTriangle className="text-yellow-400" />
          <span>Warnings</span>
        </div>
        <p className="mt-2 text-3xl font-bold">{warnings}</p>
      </div>
    </div>
  );
}
