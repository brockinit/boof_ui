import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import { BLOG_POST_ENDPOINT } from '../../constants';
import { ajax } from 'jquery';

const styles = {
  gridContainer: {
    fontFamily: 'Merriweather',
    lineHeight: '1.6rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '0 40px 40px 40px',
    height: 'auto',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    overflowY: 'auto',
  },
};

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
        <Helmet>
          <title>Better Odds of Football</title>
          <meta name="title" content="Better Odds of Football" />
          <meta
            name="description"
            content="Giving you better odds through data science, machine learning, and years of football fandom."
          />
          <meta property="og:title" content="Better Odds of Football" />
          <meta property="og:url" content="https://betterodds.io" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Giving you better odds through data science, machine learning, and years of football fandom."
          />
          <meta property="og:image" content="/assets/boof-logo-metadata.png" />
        </Helmet>
        <PageHeader title="Better Odds of Football" />
        <PageHeaderSubText text="Are you ready to receive the knowing" />
        <PageIntroText text="See some of our rants below" />
        <div style={styles.gridContainer}>
          <GridList
            cols={2}
            cellHeight={350}
            padding={25}
            style={styles.gridList}
          >
            {this.state.articles.map(({ fields, sys }, index) => {
              return (
                <GridTile
                  key={sys.id}
                  title={fields.articleTitle}
                  containerElement={<Link to={`article/${fields.slug}`} /> }
                  subtitle={fields.author}
                  actionPosition="left"
                  titlePosition="bottom"
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img
                    className="homepage-images"
                    alt={index.toString()}
                    src={fields.images[0].fields.file.url}
                  />
                </GridTile>
              );
            })}
          </GridList>
        </div>
      </div>
    );
  }
}

export default HomepageContainer;
