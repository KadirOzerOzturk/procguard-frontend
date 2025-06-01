// src/redux/agent/agentThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";

// GET /api/agents
export const fetchAgents = createAsyncThunk("agent/fetchAgents", async () => {
  const res = await fetch("http://localhost:8080/api/agents");
  if (!res.ok) throw new Error("Failed to fetch agents");
  return await res.json();
});

// GET /api/agents/:id
export const fetchAgentDetails = createAsyncThunk("agent/fetchAgentDetails", async (id) => {
  const res = await fetch(`http://localhost:8080/api/agents/${id}`);
  if (!res.ok) throw new Error("Failed to fetch agent details");
  return await res.json();
});
