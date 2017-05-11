import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router';
import App from '../App';
import Home from '../containers/HomepageContainer';
// import AboutUs from '../containers/AboutUsContainer';
// import Article from '../containers/ArticleContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
  </Route>
);

export default () => <Router history={hashHistory} routes={routes} />;
