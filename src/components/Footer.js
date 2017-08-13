import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-inner">
        <div className="footer-item">
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <div className="footer-item">
          <Link to="/about">
            <p>About Us</p>
          </Link>
        </div>
        <div className="footer-item">
          <Link to="/articles">
            <p>Articles</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
