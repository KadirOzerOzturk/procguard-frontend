import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import bgImage from "../../assets/background.png";

export default function Layout() {
  return (
    <div className="flex h-screen  "
    style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
