// hooks/useSelectedAgent.js
import { useSelector } from "react-redux";

export default function useSelectedAgent() {
  const { agents, selectedAgentId } = useSelector((state) => state.agent);
  const selectedAgent = agents.find((a) => a.id === selectedAgentId);
  return selectedAgent;
}
