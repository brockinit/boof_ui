import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import { GridList, GridTile } from 'material-ui/GridList';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';

// Contentful read-only token
const SPACE_ID = 'wb0iqsd023ks';
const ACCESS_TOKEN =
  '943872b949f9300a341513cc498473efe36b1c8fdffe9f1886b18606bd1363cc';

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

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: ACCESS_TOKEN,
    });
    this.getArticles = this.getArticles.bind(this);
    this.viewPost = this.viewPost.bind(this);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.client.getContentTypes().then(this.getArticles).catch(error => {
      console.error(error, 'error');
    });
  }

  getArticles({ items }) {
    const post = items.find(({ name }) => name === 'Post');
    this.client
      .getEntries({
        content_type: post.sys.id,
      })
      .then(response => {
        this.setState({ articles: response.items });
      })
      .catch(error => {
        console.error(error, 'ERROR');
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
                  containerElement={<Link to={fields.slug} />}
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
