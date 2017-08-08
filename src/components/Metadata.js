import React from 'react';
import { Helmet } from 'react-helmet';

const Metadata = (props) => {
  return (
    <Helmet>
      <title>Better Odds of Football</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
    </Helmet>
  )
}

export default Metadata;
