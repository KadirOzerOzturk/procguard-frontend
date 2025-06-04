import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addAgent, selectAgent } from "../../redux/agent/agentSlice"
import AddAgentForm from "./agent/AddAgentForm";
import { LuPlus } from "react-icons/lu";
import { toast } from "sonner";
import api from "../../utils/api";

export default function Agents() {
  const dispatch = useDispatch();
  const { agents } = useSelector((state) => state.agent);
  const [isOpenAddAgentForm, setIsOpenAddAgentForm] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAgents = async (pageNum) => {
      try {
        const response = await api.get(`/agents?page=${pageNum}`);
        if (response.status !== 200) {
          toast.error("Failed to fetch agents. Please try again later.");
        }
        const data = await response.json();
        
        data.agents.forEach(agent => {
          dispatch(addAgent(agent));
        });
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Failed to fetch agents:", error);
        toast.error("Failed to fetch agents. Please try again later.");
      }
    };
    fetchAgents(page);
  }, [dispatch, page]);

  const handleSelect = (id) => {
    dispatch(selectAgent(id));
  };

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

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
        <>
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
                <td className="px-4 py-2">{agent.id}</td>
                <td className="px-4 py-2">{agent.ipAddress}</td>
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
                    onClick={(e) => handleSelect(agent.id)}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 bg-dark-soft rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-dark-soft rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        </>
      )}
    </div>
  );
}
