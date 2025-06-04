import React, { use, useEffect } from "react";
import TopStats from "./components/TopStats";
import UsageChart from "./components/UsageChart";
import AlertTrends from "./components/AlertTrends";
import DeviceTypeCards from "./components/DeviceTypeCards";
import TopAgentCards from "./components/TopAgentCards";
import api from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { addAgent } from "../../redux/agent/agentSlice";

export default function AllAgentsOverview() {

  const dispatch = useDispatch();
  const { agents } = useSelector((state) => state.agent);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await api.get("/agents");
      if (response.status !== 200) {
        console.error("Failed to fetch overview data");
        return;
      }
      const data = response.data?.data?.content || [];
      data.forEach(agent => {
        if (!agents.some(existingAgent => existingAgent.id === agent.id)) {
          dispatch(addAgent(agent));
        }
      });
    } catch (error) {
      console.error("Error fetching overview data:", error);
    }
  };

  fetchData();
}, []);

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
