import React from 'react';
import PropTypes from 'prop-types';
import Metadata from '../../components/Metadata';
import DraftManualAd from '../../components/DraftManualAd';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homepage-container">
        <Metadata
          title="Better Odds of Football"
          description="Giving you better odds through data science, machine learning, and years of football fandom."
          url="https:www.betterodds.io"
          image="/assets/boof-logo-metadata.png"
        />
        <DraftManualAd />
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DashboardContainer;
