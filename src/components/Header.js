import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-button">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" className="nav-button">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-button">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="nav-button">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-button">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" className="nav-button">
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;