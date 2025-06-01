import { configureStore } from "@reduxjs/toolkit";
import agentReducer from "./agent/agentSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    agent: agentReducer,
    auth: authReducer,
  },
});
