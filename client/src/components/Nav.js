import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavTabs  from './NavTabs';

const tabComponents = [
  { label: 'About Us' },
  { label: 'Chart Porn' },
  { label: 'Articles' }
];

const NavBar = () => {

  return (
    <div>
    <AppBar
      title="Better Odds of Football"
      children={
        <NavTabs tabComponents={tabComponents} />
      }
      className="navigation-bar"
      showMenuIconButton={false}
      style={{backgroundColor: '#fffff'}}
      titleStyle={{color: '#000000'}}
      zDepth={0}
    />
    </div>
  );
};

export default NavBar;
