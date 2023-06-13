import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const showNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav id="nav">
      <div className="nav-container">
        <button className="nav-btn" onClick={showNavbar}>
          {isNavbarOpen ? (
            <FaTimes className="nav-icon" />
          ) : (
            <FaBars className="nav-icon" />
          )}
        </button>
        <div className={`header-nav ${isNavbarOpen ? "responsive_nav" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
          <Link to="/info-pack" className="nav-link">
            Info Pack
          </Link>
          <Link to="/application-form" className="nav-link">
            Application Form
          </Link>
          <Link to="/stretch-goals" className="nav-link">
            Stretch Goals
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
