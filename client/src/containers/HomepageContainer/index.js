import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
// import GridTile from '/../../components/GridTile';
// import { Link } from 'react-router-dom';
import { BLOG_POST_ENDPOINT } from '../../constants';
import { ajax } from 'jquery';

class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getArticles = this.getArticles.bind(this);
    this.viewPost = this.viewPost.bind(this);
    this.state = {
      articles: [],
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
      <div>
        <PageHeader title="Better Odds of Football" />
        <PageHeaderSubText text="Are you ready to receive the knowing" />
        <PageIntroText text="See some of our rants below" />
        <div>
          {this.state.articles.map(({ fields, sys }, index) => {
            return (
              <div>
                {fields.articleTitle}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomepageContainer;
