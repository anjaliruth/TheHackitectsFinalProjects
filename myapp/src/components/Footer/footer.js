// import React from "react";

// const footer = () => {
//   return (
//     <div className="footer-container">
//       <footer className="footer">
//         <h3>Contact Us</h3>
//         <h3>About Us</h3>
//         <h3>Privacy</h3>
//         <h3>Accessibility</h3>
//         <h3>Legal</h3>
//         <h3>Cookies Settings</h3>
//       </footer>
//     </div>
//   );
// };
// export default footer;

import React from "react";
import "./Footer.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { GrTiktok } from "react-icons/gr";


const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-social">
          <FaTwitterSquare />
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaLinkedin />
          <FaYoutubeSquare />
          <GrTiktok />
        </div>
        
      <div className="footer-contents">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/pets">Contact Us</a>
          <a href="/donate">About Us</a>
          <a href="/about">Privacy</a>
          <a href="/contact">Accessibility</a>
          <a href="/contact">Legal</a>
          <a href="/contact">Cookies Settings</a>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Paws For Affection. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


