import React from 'react';

const PageIntroText = props => {
  return (
    <div className="intro-text-container">
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default PageIntroText;
