import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router';


import App from '../App';
import Home from '../containers/HomepageContainer';
// import AboutUs from '../containers/AboutUsContainer';
// import Article from '../containers/ArticleContainer';

const routes = (
  <Router>
  <Route exact path="/" component={App} />
  <Route path="/" component={App} />
  <Route path="home" component={Home} />
  </Router>
);

export default routes;
