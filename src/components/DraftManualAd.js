import React from 'react';
import { Link } from 'react-router-dom';

const DraftManualAd = props => {
  return (
    <div className="draft-manual-ad-container">
      <div className="draft-manual-ad-inner">
        <h2>Better Odds Fantasy Football Draft Guide 2017</h2>
        <p>The valuable insight that you need to dominate your draft</p>
        <Link to="/draftmanual" className="button">
          Get Yours
        </Link>
      </div>
    </div>
  );
};

export default DraftManualAd;
