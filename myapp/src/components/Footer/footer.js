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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/pets">Pets</a>
          <a href="/donate">Donate</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Wood Green. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


