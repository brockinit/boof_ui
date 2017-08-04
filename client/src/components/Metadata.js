import React from 'react';
import { Helmet } from 'react-helmet';

const Metadata = () => {
  return (
    <Helmet>
      <title>Better Odds of Football</title>
      <meta name="title" content="Better Odds of Football" />
      <meta
        name="description"
        content="Giving you better odds through data science, machine learning, and years of football fandom."
      />
      <meta property="og:title" content="Better Odds of Football" />
      <meta property="og:url" content="https://betterodds.io" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Giving you better odds through data science, machine learning, and years of football fandom."
      />
      <meta property="og:image" content="/assets/boof-logo-metadata.png" />
    </Helmet>
  )
}

export default Metadata;
