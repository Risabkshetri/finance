import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useTheme } from "./Context/themeContext";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDarkMode} = useTheme();  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarClass = "h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-white";
  const headerClass = "fixed top-0 right-0 left-0 md:left-64 z-30 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md";

  return (
    <div className={`flex h-screen overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        className={sidebarClass}
      />
      <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header 
          toggleSidebar={toggleSidebar} 
          className={headerClass}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto mt-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;