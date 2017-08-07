import React from 'react';
import Logo from '../assets/boof-logo-colored.svg';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <a href="/">
          <img src={Logo} alt="Better Odds of Football Logo" height="60px" />
        </a>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <a href="/">
            <p>Home</p>
          </a>
        </div>
        <div className="menu-item">
          <a href="about">
            <p>About Us</p>
          </a>
        </div>
        <div className="menu-item">
          <a href="article/cleveland-browns-quarterback-madness-part-1">
            <p>Articles</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
