import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import NavBar from '../../components/NavBar';
import { createClient } from 'contentful';

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

const tilesData = [
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/nepal-bells.png',
    title: 'Why are the Browns Sooooo Bad',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/nepal-mt-view.png',
    title: 'Are you Ready',
    author: 'Danson67',
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/japan-temple.png',
    title: 'To Receive the Knowing',
    author: 'fancycrave1',
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/portugal-blue-house.png',
    title: 'Top Quarterback Picks for your 2017 Draft',
    author: 'Hans',
    featured: true,
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/thailand-boats.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/japan-many-boards.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const SPACE_ID = 'wb0iqsd023ks'
const ACCESS_TOKEN = '943872b949f9300a341513cc498473efe36b1c8fdffe9f1886b18606bd1363cc'

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
  }

  componentDidMount() {
    this.client.getContentTypes()
    .then((response) => {
      console.log(response.items, 'RESPONSEs');
    })
    .catch((error) => {
      console.error(error, 'error');
    });
  }

  render() {
    return (
      <div>
        <div style={styles.header}>
          <h1>Better Odds of Football</h1>
          <h2>Changing the game via deep data analysis and wild rants.</h2>
          <p>------------</p>
          <p>Read our latest rants below.</p>
        </div>
        <div style={styles.gridContainer}>
          <GridList
            cols={2}
            cellHeight={180}
            padding={15}
            style={styles.gridList}
          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                actionPosition="left"
                titlePosition="bottom"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default GridListHome;
