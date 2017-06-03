import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
// import NavTabs  from './NavTabs';

const navTabs = [
  { label: 'Home',  value: 'home', route: 'home' },
  { label: 'About Us', value: 'aboutus', route: 'aboutus' },
  { label: 'Articles', value: 'articles', route: 'articles' },
];

const NavBar = () => {
  return (
    <div>
      <Tabs>
      {navTabs.map(({ label, route }, i) =>
        <Tab
          value={value}
          label={label}
          key={i}
        >
        <Route path={home} />
        </Tab>
      )}
      </Tabs>
    </div>
  );
}

export default NavBar;
