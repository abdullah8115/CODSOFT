import React from "react";
import "./navbar.css";
import logo from "../../Components/Images/logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} className="logo" alt="Logo" />
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#info">Info</a>
          </li>
          <li>
            <a href="#email">Email Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
