import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    color: 'black',
    paddingTop: '8px',
    paddingRight: '20px'
  },
  buttonLayoutStyle: {
    paddingTop: '8px',
    paddingRight: '20px'
  }
}

const RightSideMenu = () => {
  return (
    <div className="right-side-menu" style={styles.buttonLayoutStyle}>
      <FlatButton
        label="Articles"
        labelStyle={styles.textStyle}
      />
      <FlatButton
        label="About Us"
        labelStyle={styles.textStyle}
      />
    </div>
)};

export default RightSideMenu;
