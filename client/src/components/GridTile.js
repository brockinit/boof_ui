import React from 'react';

const GridTile = props => {
  // const imageUrl = require(`${props.image}`)
  console.log(props.image, 'props image');

  return (
    <a className="single-gridtile" href="/">
      <div className="gridcard-container">
        <div className="gridcard-text">
          <h2>{props.title}</h2>
          <p>{props.author}</p>
        </div>
        <div className="gridcard-image" style={{ backgroundImage: `url(${props.image})` }} />
      </div>
    </a>
  );
};

export default GridTile;
