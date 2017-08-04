import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import marked from 'marked';
import moment from 'moment';
import { ajax } from 'jquery';
import { BLOG_POST_ENDPOINT } from '../../constants';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.parseMarkdown = this.parseMarkdown.bind(this);
    this.state = {
      articleBody: null,
      articleTitle: null,
      articleShortDescription: null,
      author: null,
      dateCreated: null,
      slug: null,
    };
  }

  componentDidMount() {
    const postId = this.props.location.pathname.split('/').pop();
    return ajax(BLOG_POST_ENDPOINT)
      .then(items => {
        for (var i = 0; i < items.length; i++) {
          if (items[i].fields.slug === postId) {
            return this.setState({
              articleBody: items[i].fields.articleBody,
              articleTitle: items[i].fields.articleTitle,
              articleShortDescription: items[i].fields.articleShortDescription,
              author: items[i].fields.author,
              dateCreated: moment(items[i].fields.dateCreated).format('LL'),
              slug: items[i].fields.slug,
            });
          }
        }
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  parseMarkdown() {
    return {
      __html: marked(this.state.articleBody, { sanitize: true }),
    };
  }

  render() {
    return (
      <div className="article-container">
        <Helmet>
          <title>
            {this.state.articleTitle}
          </title>
          <meta name="title" content="Better Odds of Football - About Us" />
          <meta
            name="description"
            content={this.state.articleShortDescription}
          />
          <meta
            property="og:title"
            content="Better Odds of Football - About Us"
          />
          <meta
            property="og:url"
            content={`https://betterodds.io/${this.state.slug}`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={this.state.articleShortDescription}
          />
          <meta property="og:image" content="/assets/boof-logo-metadata.png" />
        </Helmet>
        <h1 className="h1-article">
          {this.state.articleTitle}
        </h1>
        <div className="date-article">
          {this.state.author}
        </div>
        <div className="author-article">
          {this.state.dateCreated}
        </div>
        {this.state.articleBody &&
          <div
            className="article-body"
            dangerouslySetInnerHTML={this.parseMarkdown()}
          />}
      </div>
    );
  }
}
export default ArticleContainer;
