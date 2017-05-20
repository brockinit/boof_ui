import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './containers/HomepageContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
};

export default App;
