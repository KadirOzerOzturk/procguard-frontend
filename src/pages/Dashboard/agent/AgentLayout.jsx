import React from "react";
import { Outlet } from "react-router-dom";


export default function AgentLayout() {

  return (
    <div className="flex">
      
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
