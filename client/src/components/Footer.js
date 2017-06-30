import React from 'react';

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

const Footer = () => {
  return (
    <div className="footer-container" style={styles.footerContainer}>
      <div className="footer" style={styles.footer}>Home</div>
      <div className="footer" style={styles.footer}>Contact</div>
      <div className="footer" style={styles.footer}>Articles</div>
      <div className="footer" style={styles.footer}>Privacy</div>
      <div className="footer" style={styles.footer}>Terms</div>
      <div className="footer" style={styles.footer}>About</div>
    </div>
  );
};

export default Footer;
