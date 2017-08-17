import React from 'react';
import Logo from '../assets/boof-logo-colored.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Better Odds of Football Logo" height="60px" />
        </Link>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <Link to="/articles">
            <p>Articles</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/draftmanual2017">
            <p>Draft 2017</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/about">
            <p>About Us</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
