import React from 'react';

import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomepageContainer from './containers/HomepageContainer';
import AboutUsContainer from './containers/AboutUsContainer';
import ArticleContainer from './containers/ArticleContainer';
import ArticleLandingContainer from './containers/ArticleLandingContainer';
import Footer from './components/Footer';

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={HomepageContainer} />
        <Route exact path="/about" component={AboutUsContainer} />
        <Route exact path="/articles" component={ArticleLandingContainer} />
        <Route path="/article/:articleId" component={ArticleContainer} />
        <Footer />
      </div>
    </Router>
  </div>;

export default App;
