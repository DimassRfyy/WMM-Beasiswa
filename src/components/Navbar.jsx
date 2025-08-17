import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        className={`fixed inset-y-0 left-0 transform md:hidden w-72 bg-gradient-to-b from-pink-50 to-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-pink-100">
          <div className="flex items-center">
            <img src="assets/images/logos/logo.png" alt="SalonKita Logo" className="h-12 w-auto" />
          </div>
          <button id="close-sidebar" className="text-pink-500 hover:text-pink-700 transition-colors" onClick={closeSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-6">
            <li>
              <Link to="/" className="flex items-center py-2 px-4 text-pink-600 hover:bg-pink-50 rounded-md transition duration-200 sidebar-link" onClick={closeSidebar}>
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/sponsorship" className="flex items-center py-2 px-4 text-pink-600 hover:bg-pink-50 rounded-md transition duration-200 sidebar-link" onClick={closeSidebar}>
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                Sponsorship
              </Link>
            </li>
            <li>
              <Link to="/partnership" className="flex items-center py-2 px-4 text-pink-600 hover:bg-pink-50 rounded-md transition duration-200 sidebar-link" onClick={closeSidebar}>
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                Partnership
              </Link>
            </li>
            <li>
              <Link to="/mentor" className="flex items-center py-2 px-4 text-pink-600 hover:bg-pink-50 rounded-md transition duration-200 sidebar-link" onClick={closeSidebar}>
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                Mentor
              </Link>
            </li>
            <li>
              <Link to="/coach" className="flex items-center py-2 px-4 text-pink-600 hover:bg-pink-50 rounded-md transition duration-200 sidebar-link" onClick={closeSidebar}>
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                Coach
              </Link>
            </li>
            <li>
              <Link to="/donation" className="flex items-center py-2 px-4 text-pink-600 hover:bg-pink-50 rounded-md transition duration-200 sidebar-link" onClick={closeSidebar}>
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                Donasi
              </Link>
            </li>
            <li>
              <a href="#apply" className="flex items-center py-2 px-4 text-pink-600 hover:bg-pink-50 rounded-md transition duration-200 sidebar-link" onClick={closeSidebar}>
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                Daftar Sekarang
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-pink-100">
          <div className="flex items-center text-pink-600">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Contact Service</p>
              <p className="text-xs">+62 123 4567 8901</p>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay for mobile sidebar */}
      <div id="sidebar-overlay" className={`fixed inset-0 bg-black/50 z-40 md:hidden ${sidebarOpen ? "" : "hidden"}`} onClick={closeSidebar} />
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="assets/images/logos/logo.png" alt="SalonKita Logo" className="h-12 w-auto" />
          </div>
          {/* Mobile menu button */}
          <button id="open-sidebar" className="md:hidden text-pink-600 hover:text-pink-800 transition-colors" onClick={openSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1={4} x2={20} y1={12} y2={12} />
              <line x1={4} x2={20} y1={6} y2={6} />
              <line x1={4} x2={20} y1={18} y2={18} />
            </svg>
          </button>
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              <li>
                <Link to="/" className="text-pink-600 hover:text-pink-800 transition duration-200 font-medium">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="text-pink-600 hover:text-pink-800 transition duration-200 font-medium">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="text-pink-600 hover:text-pink-800 transition duration-200 font-medium">
                  Partnership
                </Link>
              </li>
              <li>
                <Link to="/mentor" className="text-pink-600 hover:text-pink-800 transition duration-200 font-medium">
                  Mentor
                </Link>
              </li>
              <li>
                <Link to="/coach" className="text-pink-600 hover:text-pink-800 transition duration-200 font-medium">
                  Coach
                </Link>
              </li>
              <li>
                <Link to="/donation" className="text-pink-600 hover:text-pink-800 transition duration-200 font-medium">
                  Donasi
                </Link>
              </li>
              <li>
                <a href="#apply" className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition duration-200 font-medium">
                  Daftar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
