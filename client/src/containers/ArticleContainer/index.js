import React, { Component } from 'react';
import styles from './Article.css';
import marked from 'marked';

import { createClient } from 'contentful';

// Contentful read-only token
const SPACE_ID = 'wb0iqsd023ks';
const ACCESS_TOKEN = '943872b949f9300a341513cc498473efe36b1c8fdffe9f1886b18606bd1363cc';

class Article extends Component {
  constructor(props) {
    super(props);

    this.parseMarkdown = this.parseMarkdown.bind(this);

    this.client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: ACCESS_TOKEN
    });

    this.state = {
      articleBody: null,
    };
  }

  componentDidMount() {
    const postId = this.props.location.pathname.split('/').pop();
    this.client.getEntry(postId)
      .then((entry) => {
        console.log('entry', entry);
        return this.setState({ articleBody: entry.fields.articleBody });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  parseMarkdown() {
    return {
      __html: marked(this.state.articleBody, { sanitize: true })
    };
  }

  render() {
    return (
      <div className="article-container">
        {this.state.articleBody ? <div dangerouslySetInnerHTML={this.parseMarkdown()} /> : ''}
      </div>
    )
  }
}
export default Article;
