import React from 'react';

const GridTile = props => {
  return (
    <a className="single-gridtile" href="/">
      <div className="gridcard-image"></div>
      <div className="gridcard-text">
        <h2>{props.title}</h2>
        <p>Sample text over the image</p>
      </div>

    </a>
  );
};

export default GridTile;
