import React from 'react';
import AppBar from 'material-ui/AppBar';
import RightSideMenu from './RightSideMenu'

const NavBar = () => {
  const styles = {
    textStyle: {
      backgroundColor: 'white',
      textColor: 'black',
    }
  }
  return (
    <AppBar
      title="Better Odds of Football"
      showMenuIconButton={false}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<RightSideMenu />}
      style={styles.textStyle}
      titleStyle={{color: 'black'}}
    />
)};

export default NavBar;
