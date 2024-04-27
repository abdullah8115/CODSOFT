import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>ABC Software Solutions</p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: abdullah.mairajk@gmail.com</p>
          <p>Phone: +123456789</p>
          <p>Address: XYZ Street</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ABC Software Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;