import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const NavTabs = ({ tabComponents }) => {
  return (
    <Tabs>
      {tabComponents.map((tab) => {
        return (
          <Tab label={tab.label} />
        )
      })}
    </Tabs>
  );
};

export default NavTabs;
