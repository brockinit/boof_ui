import React from 'react';
import Logo from '../assets/boof-logo-colored.svg';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <img
        src={Logo}
        alt="Better Odds of Football Logo"
        height="60px"
      />
    </div>
  );
};

export default NavBar;
