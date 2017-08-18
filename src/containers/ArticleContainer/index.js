import React, { Component } from 'react';
import Metadata from '../../components/Metadata';
import ArticleHeader from '../../components/ArticleHeader';
import DraftManualAd from '../../components/DraftManualAd';
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
    return ajax(BLOG_POST_ENDPOINT).then(items => {
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
    });
  }

  parseMarkdown() {
    return {
      __html: marked(this.state.articleBody, { sanitize: true }),
    };
  }

  render() {
    return (
      <div>
        <div className="article-container outer">
          <div className="article-container-inner">
            <Metadata
              title={this.state.articleTitle}
              description={this.state.articleShortDescription}
              url={`https://www.betterodds.io/${this.state.slug}`}
              image="/assets/boof-logo-metadata.png"
            />
            <ArticleHeader
              title={this.state.articleTitle}
              author={this.state.author}
              date={this.state.dateCreated}
            />
            {this.state.articleBody &&
              <div
                className="article-body"
                dangerouslySetInnerHTML={this.parseMarkdown()}
              />}
          </div>
        </div>
        <DraftManualAd />
      </div>
    );
  }
}
export default ArticleContainer;
