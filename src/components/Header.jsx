
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mini-DashBoard</div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
