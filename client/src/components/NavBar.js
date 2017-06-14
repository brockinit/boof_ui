import React from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';
import { Link } from 'react-router-dom';

const styles = {
  title: {
    cursor: 'pointer',
    fontSize: 24,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const NavBar = () => (
  <AppBar
    title={<span style={styles.title}>Better Odds of Football</span>}>
    <Tabs>
      <Tab label="Home" />
      <Tab
        label="About Us"
        data-route="/about"
        containerElement={<Link to='/about'></Link>}
        onActive={handleActive}
      />
      <Tab label="Articles" />
    </Tabs>
  </AppBar>
);

export default NavBar;
