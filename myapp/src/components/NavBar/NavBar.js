import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../Media/New logo 2 drop shadow.png";
function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <nav id="nav">
      <div className="nav-container">
        <button className="nav-btn" onClick={toggleNavbar}>
          {isNavbarOpen ? (
            <FaTimes className="nav-icon" />
          ) : (
            <FaBars className="nav-icon" />
          )}
        </button>

        <div className="ourLogo">
          <img src={logo} alt="Paws For affection logo" className="logo" />
        </div>

 <h2 className="title">Paws For Affection</h2>
        <div className={`header-nav ${isNavbarOpen ? "responsive_nav" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/about-us" className="nav-link" onClick={closeNavbar}>
            About Us
          </Link>
          <Link to="/info-pack" className="nav-link" onClick={closeNavbar}>
            Info Pack
          </Link>
          <Link
            to="/application-form"
            className="nav-link"
            onClick={closeNavbar}
          >
            Application Form
          </Link>
          <Link to="/submitAdoption" className="nav-link" onClick={closeNavbar}>
            Shelter Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
