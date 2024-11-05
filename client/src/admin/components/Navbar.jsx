import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPerson, MdArrowDropDown, MdExitToApp } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const username = "Admin";
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
    localStorage.removeItem("user");
    setIsDropdownOpen(!isDropdownOpen);
    navigate("/");
    window.location.reload()
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl flex justify-end mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden p-4 sm:ml-6 lg:flex sm:items-center">
          <div className="ml-3 relative">
            <div className="flex justify-end">
              <button
                onClick={toggleDropdown}
                className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none a"
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
                  onClick={handleLogout}
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
        </div>
        {/* <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00a39a]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {/* <div className="sm:hidden" id="mobile-menu">
        
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <MdPerson className="h-10 w-10 rounded-full text-[#00a39a]" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                {username}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              Sign out
            </button>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
