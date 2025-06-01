import React from "react";
import TopStats from "./components/TopStats";
import UsageChart from "./components/UsageChart";
import AlertTrends from "./components/AlertTrends";
import DeviceTypeCards from "./components/DeviceTypeCards";
import TopAgentCards from "./components/TopAgentCards";

export default function AllAgentsOverview() {
  return (
    <div className="p-6 text-light">
      <h1 className="text-3xl font-bold mb-6">🌐 System Overview</h1>

      <TopStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <UsageChart />
        <AlertTrends />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <DeviceTypeCards />
        <TopAgentCards />
      </div>
    </div>
  );
}
