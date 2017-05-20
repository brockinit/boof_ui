import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

const NavBar = () => {
  return (
    <div>
    <AppBar
      title="Better Odds of Football"
      className="navigation-bar"
      showMenuIconButton={false}
      style={{backgroundColor: '#fffff'}}
      titleStyle={{color: '#000000'}}
      zDepth={0}
    />
    <Tabs
      className="menu-items"
      contentContainerClassName="menu-items-container"
      >
      <Tab label="Articles" />
      <Tab label="Chart Porn" />
      <Tab label="About Us" />
    </Tabs>
    </div>
  );
};

export default NavBar;
