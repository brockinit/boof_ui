import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: 'auto',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/nepal-bells.png',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/lisbon-sunset-edited+4+2.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/nepal-mt-view.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/japan-temple.png',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/portugal-blue-house.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://s3.amazonaws.com/web-ready-andrea/thailand-beach.png',
    title: 'Honey',
    author: 'fancycravel',
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

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListHome = () => (
  <div style={styles.root}>
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
);

export default GridListHome;
