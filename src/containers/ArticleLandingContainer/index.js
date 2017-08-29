import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import GridTile from '../../components/GridTile';
import GridSubText from '../../components/GridSubText';
import Metadata from '../../components/Metadata';
import DraftManualAd from '../../components/DraftManualAd';
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
          description="Providing knowledge that'll supercharge your fantasy squad and set you up to dominate this season"
          url="https:www.betterodds.io/articles"
          image="/assets/boof-logo-metadata.png"
        />
        <div className="header-container-outer outer">
          <div className="header-container div-container">
            <PageHeader title="Our Thoughts" />
            <PageHeaderSubText text="On football, data, and other things we geek out over." />
            <PageIntroText text="Providing knowledge that'll supercharge your fantasy squad and set you up to dominate this season" />
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
                <GridSubText
                    title={fields.articleTitle}
                    author={fields.author}
                    slug={fields.slug}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <DraftManualAd />
      </div>
    );
  }
}

export default ArticleLandingContainer;
