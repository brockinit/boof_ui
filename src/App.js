import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomepageContainer from './containers/HomepageContainer';
import AboutUsContainer from './containers/AboutUsContainer';
import ContactUsContainer from './containers/ContactUsContainer';
import ArticleContainer from './containers/ArticleContainer';
import ArticleLandingContainer from './containers/ArticleLandingContainer';
import DraftManualContainer from './containers/DraftManualContainer';
import Footer from './components/Footer';

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={HomepageContainer} />
        <Route exact path="/about" component={AboutUsContainer} />
        <Route exact path="/articles" component={ArticleLandingContainer} />
        <Route exact path="/contact" component={ContactUsContainer} />
        <Route exact path="/draftmanual" component={DraftManualContainer} />
        <Route path="/articles/:articleId" component={ArticleContainer} />
        <Footer />
      </div>
    </Router>
  </div>;

export default App;
