import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavTabs  from './NavTabs';

const tabComponents = [
  { label: 'About Us' },
  { label: 'Chart Porn' }
];

const NavBar = () => {


  return (
    <div>
    <AppBar
      title="Better Odds of Football"
      children={tabs.map}
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
