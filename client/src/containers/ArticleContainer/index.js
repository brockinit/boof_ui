import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Article.css';
import marked from 'marked';
import moment from 'moment';

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
    // call AJAX service...
    // .then(entry => {
    //   for (var i = 0; i < entry.items.length; i++) {
    //     if (entry.items[i].fields.slug === postId) {
    //       return this.setState({
    //         articleBody: entry.items[i].fields.articleBody,
    //         articleTitle: entry.items[i].fields.articleTitle,
    //         articleShortDescription:
    //           entry.items[i].fields.articleShortDescription,
    //         author: entry.items[i].fields.author,
    //         dateCreated: moment(entry.items[i].fields.dateCreated).format(
    //           'LL',
    //         ),
    //         slug: entry.items[i].fields.slug,
    //       });
    //     }
    //   }
    // })
    // .catch(err => {
    //   console.log('error', err);
    // });
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
