import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Dashboard/Layout";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Agents from "./pages/Dashboard/Agents";
import Logs from "./pages/Dashboard/agent/Logs";
import Settings from "./pages/Dashboard/Settings";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AllAgentsOverview from "./pages/Dashboard/AllAgentsOverview";
import AgentOverview from "./pages/Dashboard/agent/AgentOverview";
import Warnings from "./pages/Dashboard/agent/Warnings";
import Processes from "./pages/Dashboard/agent/Processes";
import AgentLayout from "./pages/Dashboard/agent/AgentLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/dashboard" element={<Layout />}>
        {/* System-wide dashboard */}
        <Route index element={<AllAgentsOverview />} />
        <Route path="overview" element={<AgentOverview />} />
        <Route path="agents" element={<Agents />} />
        <Route path="settings" element={<Settings />} />

       
    
        
         <Route path="agents/:agentId" element={<AgentLayout />}>
          <Route index element={<AgentOverview />} />
          <Route path="processes" element={<Processes />} />
          <Route path="logs" element={<Logs />} />
          <Route path="warnings" element={<Warnings />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
