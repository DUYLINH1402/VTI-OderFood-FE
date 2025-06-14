import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.scss";
import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon, faBars } from "../../utils/icons";
import Sidebar from "./Sidebar";
import ScrollToTop from "../../utils/ScrollToTop";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="layout min-h-screen flex flex-col">
      <ScrollToTop />
      <header className="layout__header">
        <Header />
      </header>
      <div className="layout__sidebar">
        <button
          onClick={() => setSidebarOpen(true)}
          className="menu-button flex items-center gap-2 px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2.5 lg:text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          <FontAwesomeIcon icon={faBars} className="text-lg sm:text-xl lg:text-2xl" />
          <span className="hidden md:inline">Menu</span>
        </button>

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <main className="layout__main flex-grow ">
        <Outlet />
      </main>

      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
