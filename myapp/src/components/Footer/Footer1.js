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
import "./Footer1.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import footerLogo from "../../Media/New logo 2 drop shadow.png";
import { Link } from "react-router-dom";
export default function Footer1() {
  function topOfPage() {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="footer">
      <div className="footerLogo">
        <img src={footerLogo} alt="Paws For Affection" className="footerlogo" />
      </div>
      <div className="footer-social">
        <FaTwitterSquare />
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaYoutubeSquare />
      </div>
      <div className="footer-contents">
        <div className="footer-links">
          <Link to="/" onClick={topOfPage} className="footer-contents">
            <p className="footer-contents-p">Home</p>
          </Link>
          <p className="footer-contents-p">Contact Us</p>
          <Link to="/about-us" onClick={topOfPage} className="footer-contents">
            <p className="footer-contents-p">About Us</p>
          </Link>
          <p className="footer-contents-p">Privacy</p>
          <p className="footer-contents-p">Accessibility</p>
          <p className="footer-contents-p">Legal</p>
          <p className="footer-contents-p">Cookies Settings</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Paws For Affection. All rights reserved.</p>
      </div>
    </footer>
  );
}
