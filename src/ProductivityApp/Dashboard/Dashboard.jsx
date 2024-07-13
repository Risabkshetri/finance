// import { useState } from "react";
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
//   FaBars,
//   FaSearch,
//   FaCog,
//   FaBell,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const navItems = [
//     { name: "Dashboard", Url: "/dashboard", icon: FaHome },
//     { name: "Progress Tracker", Url: "/Progress", icon: FaChartLine },
//     { name: "Social Media Manager", Url: "/Social", icon: FaUsers },
//     { name: "Finance Hub", Url: "/FinanceHub", icon: FaWallet },
//     { name: "Notes", Url: "/Note", icon: FaStickyNote },
//     { name: "AI Assistant", Url: "/Chatbot", icon: FaRobot },

//   ];

//   const accountItems = [
//     { name: "Profile", icon: FaUser },
//     { name: "Logout", icon: FaSignOutAlt },
//   ];

//   const NavItem = ({ name, icon: Icon, isActive, Url }) => (
//     <Link
//       to={Url}
//       className={`flex items-center px-4 py-2 text-gray-700 ${
//         isActive ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"
//       }`}
//     >
//       <Icon className="w-5 h-5" />
//       <span className="ml-2">{name}</span>
//     </Link>
//   );

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
//       >
//         <div className="p-4 flex justify-between items-center shadow-inner">
//           <h1 className="text-2xl font-bold text-indigo-600">KshetriAI</h1>
//           <button
//             onClick={toggleSidebar}
//             className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
//           >
//             <FaTimes size={24} />
//           </button>
//         </div>
//         <nav className="mt-4 flex flex-col">
//           <div>
//             <span className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
//               Dashboard
//             </span>
//             {navItems.map((item, index) => (
//               <NavItem key={item.name} {...item} isActive={index === 0} Url={item.Url} />
//             ))}
//           </div>
//           <div className="mt-6">
//             <span className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
//               Account
//             </span>
//             {accountItems.map((item) => (
//               <NavItem key={item.name} {...item} />
//             ))}
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-inner">
//             <div className="flex items-center">
//               <button
//                 onClick={toggleSidebar}
//                 className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden"
//               >
//                 <FaBars size={24} />
//               </button>
//               <h2 className="ml-4 text-xl font-semibold text-gray-900">
//                 Dashboard
//               </h2>
//             </div>
//             <div className="flex items-center">
//               <div className="relative hidden sm:block">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <FaSearch className="absolute left-3 top-3 text-gray-400" />
//               </div>
//               <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
//                 <FaCog />
//               </button>
//               <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
//                 <FaBell />
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="flex-1 overflow-y-auto bg-gray-100">
//           <main className="flex-1 overflow-y-auto bg-gray-100">
//             <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//               {/* Quick Stats */}
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//                 {[
//                   "Daily Progress",
//                   "Social Engagement",
//                   "Financial Overview",
//                   "Notes Created",
//                 ].map((stat, index) => (
//                   <div
//                     key={index}
//                     className="bg-white overflow-hidden shadow rounded-lg"
//                   >
//                     <div className="px-4 py-5 sm:p-6">
//                       <dt className="text-sm font-medium text-gray-500 truncate">
//                         {stat}
//                       </dt>
//                       <dd className="mt-1 text-3xl font-semibold text-gray-900">
//                         0
//                       </dd>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Main Sections */}
//               <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 {/* Progress Overview */}
//                 <div className="bg-white overflow-hidden shadow rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Your Productivity Journey
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       Keep pushing! You're making great progress.
//                     </p>
//                     <div className="mt-4 h-24 bg-gray-200 rounded"></div>
//                     <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
//                       View Detailed Progress
//                     </button>
//                   </div>
//                 </div>

//                 {/* Social Media Snapshot */}
//                 <div className="bg-white overflow-hidden shadow rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Social Media Snapshot
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       Your recent post performance across platforms.
//                     </p>
//                     <div className="mt-4 h-24 bg-gray-200 rounded"></div>
//                     <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
//                       Manage Accounts
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Sections */}
//               <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
//                 {/* Financial Health */}
//                 <div className="bg-white overflow-hidden shadow rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Financial Health
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       Current month's budget overview
//                     </p>
//                     <div className="mt-4 h-24 bg-gray-200 rounded"></div>
//                   </div>
//                 </div>

//                 {/* Recent Notes */}
//                 <div className="bg-white overflow-hidden shadow rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Recent Notes
//                     </h3>
//                     <div className="mt-4 space-y-2">
//                       {[1, 2, 3].map((note) => (
//                         <div key={note} className="bg-gray-100 p-2 rounded">
//                           Note {note}
//                         </div>
//                       ))}
//                     </div>
//                     <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
//                       Create New Note
//                     </button>
//                   </div>
//                 </div>

//                 {/* AI Assistant */}
//                 <div className="bg-white overflow-hidden shadow rounded-lg">
//                   <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       AI Assistant
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       Get instant help with KshetriAI
//                     </p>
//                     <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full">
//                       Ask KshetriAI
//                     </button>
//                     <div className="mt-4 text-sm text-gray-500">
//                       <p>Sample questions:</p>
//                       <ul className="list-disc list-inside">
//                         <li>How can I improve my productivity?</li>
//                         <li>Analyze my social media performance</li>
//                         <li>Suggest a budget plan</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react'
import DashboardLayout from './DashboardLayout'

function Dashboard() {
  return (
    <div>
      <DashboardLayout />
    </div>
  )
}

export default Dashboard