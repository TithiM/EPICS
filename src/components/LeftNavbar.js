// src/components/LeftNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/auth" className="nav-link">Auth</Link>
          </li>
          <li className="nav-item">
            <Link to="/soil-testing" className="nav-link">Soil Testing</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default LeftNavbar;
