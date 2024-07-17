// // DashboardLayout.jsx
// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// // import DashboardContent from "./DashboardContent";
// import { Outlet } from "react-router-dom";

// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex h-auto bg-white overflow-hidden">
//       <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} className="h-screen fixed top-0 left-0"/>
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header toggleSidebar={toggleSidebar} className=""/>
//         <main className="mt-4 px-4">
//             <Outlet />
//         </main>
       
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarClass = " h-screen ";
  const headerClass = "fixed top-0 right-0 left-0 md:left-64 z-30";

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        className={sidebarClass}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          className={headerClass}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white mt-16 ">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;