import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="App-header">
          <SelectField
            floatingLabelText="Weeks"
            value="value"/>
          <MenuItem
            value={[7,8,9,10]}
            primaryText="Last 3 Weeks"/>
        </div>
      </div>
    );
  }
}

export default Home;
