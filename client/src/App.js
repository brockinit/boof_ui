import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import Home from './containers/HomepageContainer';
import AboutUs from './containers/AboutUsContainer';
import Article from './containers/ArticleContainer';

const App =() => (
  <MuiThemeProvider>
    <Router>
      <div className="app">
        <Route path="/" component={HomepageContainer} />
        <Route path="/about" component={AboutUsContainer} />
        <Route path="/article" component={ArticleContainer} />
);

export default App;
