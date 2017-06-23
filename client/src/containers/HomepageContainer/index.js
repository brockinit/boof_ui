import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { createClient } from 'contentful';

// Contentful read-only token
const SPACE_ID = 'wb0iqsd023ks';
const ACCESS_TOKEN = '943872b949f9300a341513cc498473efe36b1c8fdffe9f1886b18606bd1363cc';

const styles = {
  header: {
    padding: '40px',
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '0 40px 40px 40px',
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
class GridListHome extends React.Component {
  constructor(props) {
    super(props);

    this.client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: ACCESS_TOKEN
    });
    this.getArticles = this.getArticles.bind(this);
    this.viewPost = this.viewPost.bind(this);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.client.getContentTypes()
      .then(this.getArticles)
      .catch((error) => {
        console.error(error, 'error');
      });
  }

  getArticles({ items }) {
    const post = items.find(({ name }) => name === 'Post');
    this.client.getEntries({
      content_type: post.sys.id
    })
    .then((response) => {
      console.log('response.items', response.items);
      this.setState({ articles: response.items });
    })
    .catch((error) => {
      console.error(error, 'ERROR');
    });
  }

  viewPost(event) {
    event.preventDefault();
    console.log('event.target', event.target);
    this.props.history.push('/article');
  }

  render() {
    console.log('this.state.articles', this.state.articles);
    return (
      <div>
        <div style={styles.header}>
          <p>------------</p>
        </div>
        <div style={styles.gridContainer}>
          <GridList
            cellHeight={180}
            padding={15}
            style={styles.gridList}
          >
            {this.state.articles.map(({ fields, sys }, index) => {
              return (
                <GridTile
                  key={sys.id}
                  title={fields.articleTitle}
                  onClick={this.viewPost}
                  subtitle={<span>by <b>{"Sal Saluga"}</b></span>}
                  actionPosition="left"
                  titlePosition="bottom"
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                <img
                  alt={index.toString()}
                  src="http://sports.cbsimg.net/images/blogs/nike-football.jpg"
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

export default GridListHome;
