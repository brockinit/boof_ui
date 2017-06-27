import React from 'react';
import AppBar from 'material-ui/AppBar';
import RightSideMenu from './RightSideMenu';
import Logo from '../assets/boof-logo-colored.svg';

const styles = {
  textStyle: {
    backgroundColor: 'white',
    textColor: 'black',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  imgStyle: {
    marginLeft: '20px'
  }
}

const NavBar = () => {
  return (
    <div>
      <AppBar
        showMenuIconButton={false}
        iconElementRight={<RightSideMenu />}
        title={<img src={Logo} alt='Better Odds of Football Logo' height='60px' style={styles.imgStyle} />}
        style={styles.textStyle}
        href={'/'}
      />
    </div>
)};

export default NavBar;
