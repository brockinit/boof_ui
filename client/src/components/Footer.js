import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles= {
  footerContainer: {
    fontFamily: 'Roboto',
    fontSize: '0.95rem',
    height: '12rem',
    lineHeight: '12rem',
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    textDecoration: 'none',
    color: 'gray'
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer-container" style={styles.footerContainer}>
        <div className="footer"><Link to='/' style={styles.footer}>Home</Link></div>
        <div className="footer"><Link to='/about' style={styles.footer}>Contact</Link></div>
        <div className="footer"><Link to='/' style={styles.footer}>Articles</Link></div>
        <div className="footer"><Link to='/privacy-policy' style={styles.footer}>Privacy</Link></div>
        <div className="footer"><Link to='/terms-conditions' style={styles.footer}>Terms</Link></div>
        <div className="footer"><Link to='/about' style={styles.footer}>About</Link></div>
      </div>
    );
  }
};

export default Footer;
