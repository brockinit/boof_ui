import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router';


const styles = {
  headline: {
    fontSize: 60,
  }
}

function handleActive(tab) {
  this.props.router.push(`/${tab.props.link}`)
}

const NavTabs = ({ tabComponents }) => {
  return (
    <Tabs>
      {tabComponents.map((tab) => {
        return (
          <Tab label={tab.label}>
            <Link to={tab.link} />
          </Tab>
        )
      })}
    </Tabs>
  );
};

export default NavTabs;
