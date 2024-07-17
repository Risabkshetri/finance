// Header.jsx
import { FaBars, FaSearch, FaCog, FaBell } from "react-icons/fa";

const Header = ({ toggleSidebar, className = '' }) => {
  return (
    <header className={`bg-white shadow-md shadow-slate-300 ${className}`}>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-inner">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden"
          >
            <FaBars size={24} />
          </button>
          <h2 className="ml-4 text-xl font-semibold text-gray-900">
            Dashboard
          </h2>
        </div>
        <div className="flex items-center">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
            <FaCog />
          </button>
          <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
            <FaBell />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;