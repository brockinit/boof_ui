import React from 'react';
import Nav from './components/Nav';
import Home from './containers/HomepageContainer';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Home />

    </div>
  );
};

export default App;
