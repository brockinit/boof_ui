import React from 'react';

const PageHeaderSubText = props => {
  return (
    <div className="sub-text-container">
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default PageHeaderSubText;
