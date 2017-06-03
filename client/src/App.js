import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';

import Home from './containers/HomepageContainer';
import AboutUs from './containers/AboutUsContainer';
import Article from './containers/ArticleContainer';

const App =() => (
  <MuiThemeProvider>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/about' component={About} />
      <Route path='/schedule' component={Schedule} />
    </Switch>
  </MuiThemeProvider>
);

export default App;
