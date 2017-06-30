import React from 'react';

import AppBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './containers/HomepageContainer';
import AboutUs from './containers/AboutUsContainer';
import Article from './containers/ArticleContainer';
import Footer from './components/Footer';

const App = () => (
  <div>
    <AppBar
      title="Better Odds"
      style={{
        "backgroundColor": '#FFF',
      }}
    />
    <Router>
      <div className="app">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/:articleId' component={Article} />
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
