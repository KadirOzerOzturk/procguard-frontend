import React, { useState, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAgent } from "../../redux/agent/agentSlice";
import {
  FaMicrochip,
  FaEye,
  FaExclamationTriangle,
  FaList,
} from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../assets/logo.png"; 

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { agents, selectedAgentId } = useSelector((state) => state.agent);

  const [sidebarWidth, setSidebarWidth] = useState(260);
  const isResizing = useRef(false);

  // Resize handlers
  const handleMouseMove = useCallback((e) => {
    if (!isResizing.current) return;
    const newWidth = Math.max(180, Math.min(e.clientX, 400));
    setSidebarWidth(newWidth);
  }, []);

  const stopResize = useCallback(() => {
    isResizing.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", stopResize);
  }, [handleMouseMove]);

  const startResize = useCallback(() => {
    isResizing.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopResize);
  }, [handleMouseMove, stopResize]);

  const handleAgentClick = (id) => {
    dispatch(selectAgent(id));
    navigate(`/dashboard/agents/${id}`);
  };

 return (
    <aside
      className="bg-dark-contrast text-light h-screen p-5 flex flex-col border-r border-dark-contrast relative"
      style={{
        width: sidebarWidth,
        transition: isResizing.current ? "none" : "width 0.2s",
      }}
    >
      {/* Logo */}
      <div className="mb-6">
        <img
          src={logo}
          alt="Logo"
          className="w-auto h-8 mb-2 "
        />
       
      </div>
      

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/dashboard"
          end
          onClick={() => dispatch(selectAgent(null))}
          className={({ isActive }) =>
            `px-2 py-2 rounded hover:bg-dark text-sm flex items-center gap-3 ${
              isActive
                ? "bg-primary text-white font-semibold"
                : "text-light-soft"
            }`
          }
        >
          <HiOutlineDesktopComputer className="text-lg" />
          <span>System Overview</span>
        </NavLink>

        {/* AGENTS */}
        <div className="mt-6">
          <span className="uppercase text-xs text-light-soft tracking-wider mb-2 block">
            Agents
          </span>
          <div className="text-light-soft mb-2 text-sm">
            
              <NavLink
          to="/dashboard/agents"
          end
          onClick={() => dispatch(selectAgent(null))}
          className={({ isActive }) =>
            `px-2 py-2 rounded hover:bg-dark text-sm flex items-center gap-3 ${
              isActive
                ? "bg-primary text-white font-semibold"
                : "text-light-soft"
            }`
          }
        >
          <HiOutlineDesktopComputer className="text-lg" />
          <span>My Agents - {agents.length}</span>
        </NavLink>
          
          </div>
          {agents.map((agent) => (
            <div key={agent.id} className="mb-1">
              <button
                onClick={() => handleAgentClick(agent.id)}
                className={`px-2 py-2 rounded flex items-center gap-3 w-full text-left ${
                  selectedAgentId === agent.id
                    ? "bg-primary text-white font-semibold"
                    : "text-light-soft hover:bg-dark"
                }`}
              >
                <FaMicrochip />
                <span>{agent.hostname}</span>
              </button>

              {selectedAgentId === agent.id && (
                <div className="ml-6 mt-1 flex flex-col gap-1 text-sm">
                  <NavLink
                    to={`/dashboard/agents/${agent.id}/logs`}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-1 rounded ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-light-soft hover:text-light"
                      }`
                    }
                  >
                    <FaList /> Logs
                  </NavLink>
                  <NavLink
                    to={`/dashboard/agents/${agent.id}/warnings`}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-1 rounded ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-light-soft hover:text-light"
                      }`
                    }
                  >
                    <FaExclamationTriangle /> Warnings
                  </NavLink>
                  <NavLink
                    to={`/dashboard/agents/${agent.id}/processes`}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-1 rounded ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-light-soft hover:text-light"
                      }`
                    }
                  >
                    <FaEye /> Processes
                  </NavLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* SETTINGS - En alta sabit */}
      <div className="mt-auto pt-6 border-t border-dark">
        <NavLink
          to={`/dashboard/settings`}
          onClick={() => dispatch(selectAgent(null))}
          className={({ isActive }) =>
            `flex items-center gap-2 px-2 py-2 rounded ${
              isActive
                ? "text-primary font-semibold"
                : "text-light-soft hover:text-light"
            }`
          }
        >
          <IoSettingsOutline />
          <span>Settings</span>
        </NavLink>
        <h1 className="text-xl font-bold mt-6 opacity-65 whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="text-primary">Agent</span> Dashboard
        <span className="text-secondary"> v2.0</span>
      </h1>
      </div>

      {/* Resize Handle */}
      <div
        onMouseDown={startResize}
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-primary/30 z-50"
      />
    </aside>
  );
}