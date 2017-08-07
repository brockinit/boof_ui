import React from 'react';
import moment from 'moment';

const GridTile = props => {
  return (
    <a className="gridtile-container" href={`article/${props.slug}`}>
      <div className="gridtile-text">
        <h2>
          {props.title}
        </h2>
        <p>
          {props.author}
        </p>
        <p>
          {moment(props.date).format('LL')}
        </p>
      </div>
      <div
        className="gridtile-image"
        style={{ backgroundImage: `url(${props.image})` }}
      />
    </a>
  );
};

export default GridTile;
