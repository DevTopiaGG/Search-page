import React, { Component } from "react";
import "./styles/Navbar.css";

const Header = () => {
  return (
    <div className="container">
      <h3 id="header-title">Infinity</h3>
      <nav>
        <ul>
          <li id="login">Login</li>
          <li id="signin">Sign in</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
