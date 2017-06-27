import React from 'react';
import AppBar from 'material-ui/AppBar';
import RightSideMenu from './RightSideMenu'

const NavBar = () => {
  return (
    <AppBar
      title="Better Odds of Football"
      showMenuIconButton={false}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<RightSideMenu />}
    />
)};

export default NavBar;
