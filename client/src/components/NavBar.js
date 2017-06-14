import React from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';

const styles = {
  title: {
    cursor: 'pointer',
    fontSize: 24,
  },
};

const NavBar = () => (
  <AppBar
    title={<span style={styles.title}>Better Odds of Football</span>}>
    <Tabs>
      <Tab label="Home" />
      <Tab label="About Us" />
      <Tab label="Articles" />
    </Tabs>
  </AppBar>
);

export default NavBar;
