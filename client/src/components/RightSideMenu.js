import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  textStyle: {
    fontFamily: 'Open Sans',
    fontSize: '1.2rem',
    color: 'white',
  },
  buttonLayoutStyle: {
    paddingTop: '8px',
    paddingRight: '20px'
  }
}

const RightSideMenu = () => {
  return (
    <div>
      <FlatButton
        label="Articles"
        style={styles.buttonLayoutStyle}
        labelStyle={styles.textStyle}
      />
      <FlatButton
        label="About Us"
        style={styles.buttonLayoutStyle}
        labelStyle={styles.textStyle}
      />
    </div>
)};

export default RightSideMenu;
