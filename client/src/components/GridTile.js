import React from 'react';

const GridTile = props => {
  return (
    <div className="single-gridtile">
      <div>{props.title}</div>
      <img
        alt="something"
        src={props.image}
        width='100px'
      />
    </div>
  );
};

export default GridTile;
