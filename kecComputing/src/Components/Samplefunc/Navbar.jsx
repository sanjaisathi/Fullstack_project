import './css/Navbar.css'
// Components/Samplefunc/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/" className="logo">Logo</Link>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
        </ul>

        {/* Dropdown button */}
        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            Menu
          </button>

          {/* Dropdown menu - now vertical */}
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/" className="dropdown-link">Home</Link></li>
              <li><Link to="/about" className="dropdown-link">About</Link></li>
              <li><Link to="/gallery" className="dropdown-link">Gallery</Link></li>
              <li><Link to="/useref" className="dropdown-link">UseRef</Link></li>
              <li><Link to="/useeffect" className="dropdown-link">UseEffect</Link></li>
              <li><Link to="/usecontext" className="dropdown-link">UseContext</Link></li>
              <li><Link to="/usememo" className="dropdown-link">UseMemo</Link></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
