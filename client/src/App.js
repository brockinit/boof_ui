import React from 'react';

import AppBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/HomepageContainer';
import AboutUs from './containers/AboutUsContainer';
import Article from './containers/ArticleContainer';
import Footer from './components/Footer';

const App = () =>
  <div>
    <Router>
      <div className="app">
        <AppBar
          title="Better Odds"
          style={{
            backgroundColor: '#FFF',
          }}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route path="/:articleId" component={Article} />
        <Footer />
      </div>
    </Router>
  </div>;

export default App;
