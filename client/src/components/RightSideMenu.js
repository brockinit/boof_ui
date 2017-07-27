import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: '1.1rem',
    color: 'black',
    paddingTop: '8px',
    paddingRight: '20px',
  },
  buttonLayoutStyle: {
    paddingTop: '8px',
    paddingRight: '20px',
  },
};

const RightSideMenu = () => {
  return (
    <div className="right-side-menu" style={styles.buttonLayoutStyle}>
      <FlatButton label="Home" labelStyle={styles.textStyle} href="/" />
      <FlatButton
        label="About Us"
        labelStyle={styles.textStyle}
        href="/about"
      />
    </div>
  );
};

export default RightSideMenu;
