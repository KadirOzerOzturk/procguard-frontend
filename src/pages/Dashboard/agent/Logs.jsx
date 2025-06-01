import React from "react";

const logs = [
  { id: 1, type: "WARNING", message: "Chrome.exe exceeded 90% CPU", timestamp: "2025-06-01 14:22" },
  { id: 2, type: "INFO", message: "Agent LAPTOP-002 connected", timestamp: "2025-06-01 13:10" },
  { id: 3, type: "CRITICAL", message: "Disk usage on DESKTOP-003 at 98%", timestamp: "2025-06-01 12:45" },
];

export default function Logs() {
  return (
    <div className="text-light">
      <h2 className="text-2xl font-bold mb-6">System Logs</h2>
      <ul className="space-y-4">
        {logs.map((log) => (
          <li key={log.id} className="bg-dark-soft border border-dark-contrast p-4 rounded-lg shadow">
            <div className="flex justify-between">
              <span className={`font-semibold ${
                log.type === "CRITICAL" ? "text-primary" :
                log.type === "WARNING" ? "text-yellow-400" :
                "text-light-soft"
              }`}>
                [{log.type}]
              </span>
              <span className="text-xs text-light-soft">{log.timestamp}</span>
            </div>
            <p className="mt-2 text-sm">{log.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
