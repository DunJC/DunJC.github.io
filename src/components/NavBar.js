import React from 'react';
import logo from '../resources/jclogo.png';
import AnnouncementBanner from './AnnouncementBanner.js'; // Import the banner

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark">
      
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>C & J | Wedding</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
        <a href="#/accommodation"> Accommodation</a>
        </li>
      </ul>
      <a href="https://forms.gle/4LLPz3LWeJpnRqkN7" className="navbar-button">Share Your Intent</a>
      
    </nav>
   
  );
};

export default NavBar;
