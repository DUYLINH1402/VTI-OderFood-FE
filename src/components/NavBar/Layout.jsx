import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.scss";
import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon, faBars } from "../../utils/icons";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="layout">
      <header className="layout__header">
        <Header />
      </header>
      <div className="layout__sidebar">
        <button onClick={() => setSidebarOpen(true)} className="menu-button">
          <FontAwesomeIcon icon={faBars} /> Menu
        </button>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <main className="layout__main">
        <Outlet />
      </main>

      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
