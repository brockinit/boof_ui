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
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/article" component={Article} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
