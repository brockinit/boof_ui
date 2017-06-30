import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles= {
  footerContainer: {
    fontFamily: 'Roboto',
    color: 'gray',
    fontSize: '0.95rem',
    height: '15rem',
    lineHeight: '15rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    textDecoration: 'none'
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer-container" style={styles.footerContainer}>
        <div className="footer" style={styles.footer}><Link to='/'>Home</Link></div>
        <div className="footer" style={styles.footer}><Link to='/about'>Contact</Link></div>
        <div className="footer" style={styles.footer}><Link to='/'>Articles</Link></div>
        <div className="footer" style={styles.footer}><Link to='/privacy-policy'>Privacy</Link></div>
        <div className="footer" style={styles.footer}><Link to='/terms-conditions'>Terms</Link></div>
        <div className="footer" style={styles.footer}><Link to='/about'>About</Link></div>
      </div>
    );
  }
};

export default Footer;
