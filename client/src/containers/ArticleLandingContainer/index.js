import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import GridTile from '../../components/GridTile';
import Metadata from '../../components/Metadata';
import { BLOG_POST_ENDPOINT } from '../../constants';
import { ajax } from 'jquery';

class ArticleLandingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getArticles = this.getArticles.bind(this);
    this.viewPost = this.viewPost.bind(this);
    this.state = {
      articles: [],
      articleTitle: null,
      author: null,
      dateCreated: null,
      image: null,
      slug: null,
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    return ajax(BLOG_POST_ENDPOINT).then(data => {
      this.setState({ articles: data });
    });
  }

  viewPost(event) {
    event.preventDefault();
    this.props.history.push('/article');
  }

  render() {
    return (
        <div className="homepage-container">
          <Metadata
            title="Read our articles"
            description="Giving you better odds through data science, machine learning, and years of football fandom."
            url="https:www.betterodds.io"
            image="/assets/boof-logo-metadata.png"
            />
          <div className="header-container-outer outer">
            <div className="header-container div-container">
              <PageHeader title="Our Thoughts" />
              <PageHeaderSubText text="Giving you better odds this fantasy football season" />
              <PageIntroText text="Articles written by experienced fans, big data analysis and machine learning technologies to give you better odds this fantasy football season." />
            </div>
          </div>
          <div className="gridcard-container-outer outer">
            <div className="gridcard-container div-container">
              {this.state.articles.map(({ fields, sys }, index) => {
                return (
                  <div>
                    <GridTile
                      title={fields.articleTitle}
                      author={fields.author}
                      image={fields.images[0].fields.file.url}
                      date={fields.dateCreated}
                      slug={fields.slug}
                      />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    );
  }
}

export default ArticleLandingContainer;
