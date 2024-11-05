import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../admin/components/Sidebar";
import Header from "../admin/components/Header";
import { MdMenu, MdClose } from "react-icons/md";
import Navbar from "../admin/components/Navbar";

// import '../../generate-sitemap.js'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 lg:hidden">
            <h2 className="text-2xl font-bold text-[#00a39a]">Ztart</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <MdClose size={24} />
            </button>
          </div>
          <Sidebar />
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          X
        </div>
      )}

      <div className="flex-1 flex flex-col  overflow-hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 m-4 hover:text-gray-600 focus:outline-none focus:text-gray-600 lg:hidden"
          aria-label="Open sidebar"
        >
          <MdMenu size={24} />
        </button>
        <Navbar />
      

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto   lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
