// Sidebar.jsx
import { Link, NavLink } from "react-router-dom";
import Logout from "../Logout";
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

const navItems = [
  { name: "Dashboard", url: "/dashboard", icon: FaHome },
  { name: "Progress Tracker", url: "/dashboard/progress", icon: FaChartLine },
  { name: "Social Media Manager", url: "/dashboard/social", icon: FaUsers },
  { name: "Finance Hub", url: "/dashboard/finance", icon: FaWallet },
  { name: "Notes", url: "/dashboard/notes", icon: FaStickyNote },
  { name: "AI Assistant", url: "/dashboard/chatbot", icon: FaRobot },
];

// const accountItems = [
//   { name: "Profile", url: "/dashboard/profile", icon: FaUser },
//   { name: "Logout", url: "/LogoutBtn", icon: FaSignOutAlt },
// ];

const NavItem = ({ name, url, icon: Icon }) => (
  <NavLink
    to={url}
    className={({ isActive }) =>
      `flex items-center px-4 py-2 text-gray-700 ${
        isActive ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span className="ml-2">{name}</span>
  </NavLink>
);

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl shadow-black transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="p-4 flex justify-between items-center shadow-inner">
        <h1 className="text-2xl font-bold text-indigo-600">KshetriAI</h1>
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="mt-4 flex flex-col">
        <div>
          <span className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
            Dashboard
          </span>
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </div>
        <div className="mt-6">
          <span className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
            Account
          </span>
          {/* {accountItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))} */}
          <Link to='/profile'> <FaUser />profile</Link>
          <FaSignOutAlt/><Logout />
        </div>
      </nav>
    </aside>
  
  );
};

export default Sidebar;