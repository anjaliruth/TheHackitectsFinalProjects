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
        <img src={logo} alt="Paws For affection" className="logo" />
        </div>
        {/* <div>
          <img className=“logo” src={logo} alt=“Paws for Affection logo” />
        </div> */}
        <div className={`header-nav ${isNavbarOpen ? "responsive_nav" : ""}`}>
        
          <Link to="/" className="nav-link" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/submitAdoption" className="nav-link" onClick={closeNavbar}>
           Adopter Side
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
         
        </div>
      </div>
    </nav>
  );
}
export default Navbar;