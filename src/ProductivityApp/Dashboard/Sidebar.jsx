// // Sidebar.jsx
// import {  NavLink } from "react-router-dom";
// import {
//   FaHome,
//   FaChartLine,
//   FaUsers,
//   FaWallet,
//   FaStickyNote,
//   FaRobot,
//   FaUser,
//   FaSignOutAlt,
//   FaTimes,
// } from "react-icons/fa";

// const navItems = [
//   { name: "Dashboard", url: "/dashboard", icon: FaHome },
//   { name: "Progress Tracker", url: "/dashboard/progress", icon: FaChartLine },
//   { name: "Social Media Manager", url: "/dashboard/social", icon: FaUsers },
//   { name: "Finance Hub", url: "/dashboard/finance", icon: FaWallet },
//   { name: "Notes", url: "/dashboard/notes", icon: FaStickyNote },
//   { name: "AI Assistant", url: "/dashboard/chatbot", icon: FaRobot },
// ];

// const accountItems = [
//   { name: "Profile", url: "/dashboard/profile", icon: FaUser },
//   { name: "Logout", url: "/logout", icon: FaSignOutAlt },
// ];

// const NavItem = ({ name, url, onClick, icon: Icon }) => (
//   <NavLink
//     to={url}
//     onClick={onClick}
//     className={({ isActive }) =>
//       `flex items-center px-4 py-2 transition-colors duration-200 ${
//         isActive 
//           ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200" 
//           : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//       }`
//     }
//   >
//     <Icon className="w-5 h-5" />
//     <span className="ml-2">{name}</span>
//   </NavLink>
// );

// const Sidebar = ({ sidebarOpen, toggleSidebar, className = '' }) => {
//   return (
//     <aside
//       className={`  ${className} ${
//         sidebarOpen ? "translate-x-0" : "-translate-x-full"
//       } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl shadow-black transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
//     >
//       <div className="p-4 flex justify-between items-center shadow-inner">
//         <h1 className="text-2xl font-bold text-indigo-600">KshetriAI</h1>
//         <button
//           onClick={toggleSidebar}
//           className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
//         >
//           <FaTimes size={24} />
//         </button>
//       </div>
//       <nav className="mt-4 flex flex-col">
//         <div>
//           <span className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
//             Dashboard
//           </span>
//           {navItems.map((item) => (
//             <NavItem onClick={toggleSidebar} key={item.name} {...item} />
//           ))}
//         </div>
//         <div className="mt-6">
//           <span className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
//             Account
//           </span>
//           {accountItems.map((item) => (
//             <NavItem onClick={toggleSidebar} key={item.name} {...item} />
//           ))}
          
//         </div>
//       </nav>
//     </aside>
  
//   );
// };

// export default Sidebar;


// Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaWallet,
  FaStickyNote,
  FaRobot,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import LogoutModal from '../Logout'; // Make sure to create this component

const navItems = [
  { name: "Dashboard", url: "/dashboard", icon: FaHome },
  { name: "Progress Tracker", url: "/dashboard/progress", icon: FaChartLine },
  { name: "Social Media Manager", url: "/dashboard/social", icon: FaUsers },
  { name: "Finance Hub", url: "/dashboard/finance", icon: FaWallet },
  { name: "Notes", url: "/dashboard/notes", icon: FaStickyNote },
  { name: "AI Assistant", url: "/dashboard/chatbot", icon: FaRobot },
];

const accountItems = [
  { name: "Profile", url: "/dashboard/profile", icon: FaUser },
];

const NavItem = ({ name, url, onClick, icon: Icon }) => (
  <NavLink
    to={url}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center px-4 py-2 transition-colors duration-200 ${
        isActive 
          ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200" 
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span className="ml-2">{name}</span>
  </NavLink>
);

const Sidebar = ({ sidebarOpen, toggleSidebar, className = '' }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsLogoutModalOpen(true);
  };

  return (
    <>
      <aside
        className={`${className} ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl shadow-black transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="p-4 flex justify-between items-center shadow-inner">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">KshetriAI</h1>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none lg:hidden"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="mt-4 flex flex-col">
          <div>
            <span className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">
              Dashboard
            </span>
            {navItems.map((item) => (
              <NavItem onClick={toggleSidebar} key={item.name} {...item} />
            ))}
          </div>
          <div className="mt-6">
            <span className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">
              Account
            </span>
            {accountItems.map((item) => (
              <NavItem onClick={toggleSidebar} key={item.name} {...item} />
            ))}
            <NavLink
              to="#"
              onClick={handleLogoutClick}
              className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <FaSignOutAlt className="w-5 h-5" />
              <span className="ml-2">Logout</span>
            </NavLink>
          </div>
        </nav>
      </aside>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
    </>
  );
};

export default Sidebar;