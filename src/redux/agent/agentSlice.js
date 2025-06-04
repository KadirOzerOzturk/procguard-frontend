// agentSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAgents } from "./agentThunks";

const agentSlice = createSlice({
  name: "agent",
  initialState: {
    agents: [],
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
