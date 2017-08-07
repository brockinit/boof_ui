import React from 'react';

const ArticleHeader = props => {
  return (
    <div className="article-header-container">
      <h1 className="h1-article">
        {props.title}
      </h1>
      <div className="date-article">
        <p>
          {props.author}
        </p>
      </div>
      <div className="author-article">
        <p>
          {props.date}
        </p>
      </div>
    </div>
  );
};

export default ArticleHeader;
