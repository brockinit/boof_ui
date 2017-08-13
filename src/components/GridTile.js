import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const GridTile = props => {
  return (
    <Link to={`article/${props.slug}`} className="gridtile-container">
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
  </Link>
  );
};

export default GridTile;
