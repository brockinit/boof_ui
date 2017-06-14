import React from 'react';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './containers/HomepageContainer';
import AboutUs from './containers/AboutUsContainer';
import Article from './containers/ArticleContainer';

const App = () => (
  <div>
    <NavBar />
    <Router>
      <div className="app">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/article' component={Article} />
      </div>
    </Router>
  </div>
);

export default App;
