import React from 'react';
import { Link } from 'react-router-dom';

const GridSubText = props => {
  return (
    <div className="gridtile-subtext-container">
      <div className="gridtile-text">
          <Link to={`articles/${props.slug}`}>
            <h2>
              {props.title}
            </h2>
          </Link>
          <hr />
        <p>
          {props.author}
        </p>
      </div>
    </div>
  );
};

export default GridSubText;
