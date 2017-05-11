import React from 'react';
import AppBar from 'material-ui/AppBar';
import Home from './containers/HomepageContainer';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <AppBar title="Better Odds of Football" />
      <Home />
    </div>
  );
};

export default App;
