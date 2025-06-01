// agentSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAgents } from "./agentThunks";

const agentSlice = createSlice({
  name: "agent",
  initialState: {
    agents: [
       {
      id: "1",
      hostname: "DESKTOP-001",
      ip: "192.168.1.101",
      status: "online",
      cpu: 72,
      ram: 60,
      os: "Windows 10",
      uptime: "5 days, 3 hours",
    },
    {
      id: "2",
      hostname: "LAPTOP-002",
      ip: "192.168.1.102",  
      status: "offline",
      cpu: 23,
      ram: 45,
      os: "macOS Monterey",
      uptime: "N/A",

    },
    ],
    selectedAgentId: null,
    loading: false,
    error: null,
  },
  reducers: {
    selectAgent: (state, action) => {
      state.selectedAgentId = action.payload;
    },
     addAgent: (state, action) => {
      state.agents.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectAgent,addAgent } = agentSlice.actions;
export default agentSlice.reducer;
