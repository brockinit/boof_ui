import React from 'react';

const GridTile = props => {
  // const imageUrl = require(`${props.image}`)
  console.log(props.image, 'props image');

  return (
    <a className="single-gridtile" href="/">
      <div className="gridcard-text">
        <h2>{props.title}</h2>
      </div>
      <div className="gridcard-image" style={{ backgroundImage: `url(${props.image})` }} />
    </a>
  );
};

export default GridTile;
