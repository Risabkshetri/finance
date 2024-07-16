// DashboardLayout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
// import DashboardContent from "./DashboardContent";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-auto bg-white overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="mt-4 px-4">
            <Outlet />
        </main>
       
      </div>
    </div>
  );
};

export default DashboardLayout;