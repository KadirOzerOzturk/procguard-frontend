import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAgent } from "../../redux/agent/agentSlice"
import AddAgentForm from "./agent/AddAgentForm";
import { LuPlus } from "react-icons/lu";

export default function Agents() {
  const dispatch = useDispatch();
  const { agents } = useSelector((state) => state.agent);
  const [isOpenAddAgentForm, setIsOpenAddAgentForm] = useState(false);
  const handleSelect = (id) => {
    dispatch(selectAgent(id));
  };

  return (
    <div className="text-light">
      <h2 className="text-2xl font-bold mb-6">Connected Agents</h2>
      <button onClick={ ()  => setIsOpenAddAgentForm(!isOpenAddAgentForm) }
        className="flex justify-between items-center bg-dark-soft hover:bg-dark-contrast text-light px-6 py-3 rounded-lg mb-6  gap-2 transition">
        Add Agent
      <LuPlus className="text-primary text-lg" />
      </button>
      {isOpenAddAgentForm && (
        <AddAgentForm />
      )}

      {agents.length === 0 ? (
        <p>No agents connected.</p>
      ) : (
        <table className="w-full text-sm border border-dark-contrast rounded-lg overflow-hidden">
          <thead className="bg-dark-soft text-left text-light-soft">
            <tr>
              <th className="px-4 py-2">Hostname</th>
              <th className="px-4 py-2">IP</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">CPU %</th>
              <th className="px-4 py-2">RAM %</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.id}
                className="border-t border-dark-contrast hover:bg-dark transition duration-150"
              >
                <td className="px-4 py-2">{agent.hostname}</td>
                <td className="px-4 py-2">{agent.ip}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    agent.status === "online"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {agent.status}
                </td>
                <td className="px-4 py-2">{agent.cpu}%</td>
                <td className="px-4 py-2">{agent.ram}%</td>
                <td className="px-4 py-2">
                  <Link
                    to="/dashboard/overview"
                    className="text-primary hover:underline font-medium"
                    onClick={() => handleSelect(agent.id)}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
