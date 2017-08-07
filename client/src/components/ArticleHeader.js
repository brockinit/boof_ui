import React from 'react';

const ArticleHeader = props => {
  return (
    <div className="article-header-container">
      <h1 className="h1-article">
        {props.title}
      </h1>
      <div className="date-article">
        {props.author}
      </div>
      <div className="author-article">
        {props.date}
      </div>
    </div>
  );
};

export default ArticleHeader;
