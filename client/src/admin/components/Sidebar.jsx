import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdAddCircle,
  MdList,
  MdExitToApp,
  MdPerson,
  MdArrowDropDown,
} from "react-icons/md";

const SidebarLink = ({ to, icon: Icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center p-3 rounded-lg transition-all hover:bg-[#d1eeec] duration-200 ${
          isActive
            ? "!bg-[#00a39a] text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon className="mr-3" size={20} />
        <span className="font-medium">{children}</span>
      </Link>
    </li>
  );
};

export const Sidebar = () => {
  // Accept handleLogout as a prop
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogout = () => {
    // Clear user data from local storage
    console.log("Logging out...");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload()    
  };
  const username = "Admin";
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-4">
      <h2 className="text-2xl font-bold text-[#00a39a] mb-6 hidden lg:block">
        Ztart Admin Panel
      </h2>
      <ul className="space-y-2">
        <SidebarLink to="/" icon={MdDashboard}>
          Dashboard
        </SidebarLink>
        <SidebarLink to="/add-visas" icon={MdAddCircle}>
          Add Visas
        </SidebarLink>
        <SidebarLink to="/add-blog" icon={MdAddCircle}>
          Add Blog
        </SidebarLink>
        <SidebarLink to="/manage-blogs" icon={MdList}>
          Manage Blogs
        </SidebarLink>
        <SidebarLink to="/manage-visas" icon={MdList}>
          Manage Visas
        </SidebarLink>
        <div className="ml-3 relative block lg:hidden">
          <div className="flex ">
            <button
              onClick={toggleDropdown}
              className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <MdPerson className="h-8 w-8 rounded-full text-[#00a39a]" />
              <span className="ml-2 text-gray-700">{username}</span>
              <MdArrowDropDown className="ml-1 text-gray-400" />
            </button>
          </div>
          {isDropdownOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <button
                onClick={() => {
                  handleLogout(); // Call handleLogout to clear the session
                  setIsDropdownOpen(false); // Close the dropdown after logging out
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
              >
                <MdExitToApp className="inline-block mr-2" /> Sign out
              </button>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};
