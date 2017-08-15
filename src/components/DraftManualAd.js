import React from "react";
import { Link } from "react-router-dom";

const DraftManualAd = props => {
  return (
    <div className="draft-manual-ad-container">
      <div className="draft-manual-ad-inner">
        <h2>2017 Better Odds of Football Draft Manual!</h2>
        <p>The valuable insight that you need to dominate your draft</p>
        <Link to="/" className="button">
          Get a Draft Manual
        </Link>
      </div>
    </div>
  );
};

export default DraftManualAd;
