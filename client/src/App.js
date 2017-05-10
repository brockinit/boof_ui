import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Home from './containers/HomepageContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppBar title="Better Odds of Football" />
        <Home />
      </div>
    );
  }
}

export default App;
