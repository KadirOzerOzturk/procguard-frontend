import React from "react";
import { FaDesktop, FaLaptop, FaServer } from "react-icons/fa";

const dummyDeviceCounts = {
  desktop: 4,
  laptop: 3,
  server: 2,
};

const deviceTypes = [
  {
    type: "Desktop",
    count: dummyDeviceCounts.desktop,
    icon: <FaDesktop className="text-3xl text-blue-400" />,
    color: "bg-blue-500/10 border-blue-400",
  },
  {
    type: "Laptop",
    count: dummyDeviceCounts.laptop,
    icon: <FaLaptop className="text-3xl text-purple-400" />,
    color: "bg-purple-500/10 border-purple-400",
  },
  {
    type: "Server",
    count: dummyDeviceCounts.server,
    icon: <FaServer className="text-3xl text-yellow-400" />,
    color: "bg-yellow-500/10 border-yellow-400",
  },
];
export default function DeviceTypeCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {deviceTypes.map((device) => (
        <div
          key={device.type}
          className={`flex items-center gap-4 p-4 rounded-xl border ${device.color}`}
        >
          <div className="p-3 rounded-full bg-dark-contrast">
            {device.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-light">{device.type}</h3>
            <p className="text-light-soft text-sm">{device.count} agents</p>
          </div>
        </div>
      ))}
    </div>
  );
}
