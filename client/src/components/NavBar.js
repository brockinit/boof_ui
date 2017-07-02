import React from 'react';
import AppBar from 'material-ui/AppBar';
import RightSideMenu from './RightSideMenu';
import Logo from '../assets/boof-logo-colored.svg';
import { Link } from 'react-router-dom';

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
        title={
          <div>
            <Link to='/'>
            <img src={Logo} alt='Better Odds of Football Logo' height='60px' style={styles.imgStyle} />
            </Link>
          </div>}
        style={styles.textStyle}
      />
    </div>
)};

export default NavBar;
