import React from 'react';

const PageHeader = props => {
  return (
    <div className="title-text-container">
      <h1>
        {props.title}
      </h1>
    </div>
  );
};

export default PageHeader;
